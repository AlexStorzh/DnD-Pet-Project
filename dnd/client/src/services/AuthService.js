import ApiInstance from "../api";

export default class AuthService {
    static async login(email, password) {
        return ApiInstance.post('/login', { email, password })
    }

    static async registration(email, password) {
        return ApiInstance.post('/registration', { email, password })
    }

    static async logout() {
        return ApiInstance.post('/logout')
    }

}
