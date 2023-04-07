const { body } = require('express-validator');

//1. Создаём форму валидации
// ADD IS EMAIL, USERNAME, ISLENGHT
const registerValidation = [
    body('email', 'Invalid Email'),
    body('username', 'Username has to be 2 or more symbols'),
    body('password', 'Password has to be 4 or more symbols')
]
//1.1 Экспортируем
module.exports = registerValidation