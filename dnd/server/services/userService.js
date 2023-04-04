const userModel = require('../models/User.js')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const emailService = require('./emailService.js')
const tokenService = require('./tokenService.js')
const UserDto = require('../dtos/userDto.js')
const ApiError = require('../middleware/apiError.js')

class UserService {
    async registration(email, username, password) {
        const candidate = await userModel.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`User with ${email} is already registered`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await userModel.create({ email, username, password: hashPassword, activationLink })
        await emailService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }

    }
    async activate(activationLink) {
        const user = await userModel.findOne({ activationLink })
        console.log(activationLink);
        if (!user) {
            throw ApiError.BadRequest("Invalid activation link.")
        }
        user.isActivated = true;
        await user.save()
    }



    async login(email, password) {
        const user = await userModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest("No user with this email")
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest("Password not correct")
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.FindOneToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await userModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
    async getAllUsers() {
        const users = await userModel.find()
        return users
    }
}

module.exports = new UserService()