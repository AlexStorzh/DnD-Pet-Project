const ApiError = require('./apiError.js')
const tokenService = require('../services/tokenService')
module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const accesToken = authorizationHeader.split(' ')[1];
        if (!accesToken) {
            return next(ApiError.UnauthorizedError())
        }
        const userData = tokenService.validateAccessToken(accesToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next()
    } catch (err) {
        return next(ApiError.UnauthorizedError())
    }
}