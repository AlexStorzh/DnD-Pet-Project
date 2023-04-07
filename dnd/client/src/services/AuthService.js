import ApiInstance from "../api";

export default class AuthService {
    static async login(email, password) {
        return ApiInstance.post('/login', { email, password })
    }
    static async registration(email, username, password) {
        return ApiInstance.post('/registration', { email, username, password })
    }
    static async logout() {
        return ApiInstance.post('/logout')
    }
}
