const userService = require('../services/userService.js')
const CLIENT_URL = process.env.CLIENT_URL
const { validationResult } = require('express-validator')
const ApiError = require('../middleware/apiError.js')

class userController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation fault', errors.array()))
            }
            const { email, username, password } = req.body;
            const userData = await userService.registration(email, username, password)
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (err) {
            next(err);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (err) {
            next(err)
        }

    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (err) {
            next(err)
        }

    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken)
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (err) {

        }

    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink)
            return res.redirect(CLIENT_URL)
        } catch (err) {
            next(err);
        }

    }
    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users)
        } catch (err) {
            next(e)

        }
    }
}

module.exports = new userController()