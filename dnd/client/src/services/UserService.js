import ApiInstance from "../api";

export default class UserService {
    static fetchUsers() {
        return ApiInstance.get('/users')
    }
}