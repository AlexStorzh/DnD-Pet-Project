const { body } = require('express-validator');

//1. Создаём форму валидации
const registerValidation = [
    body('email', 'Invalid Email').isEmail(),
    body('username', 'Username has to be 2 or more symbols').isLength({ min: 2 }),
    body('password', 'Password has to be 5 or more symbols').isLength({ min: 5 })
]
//1.1 Экспортируем
module.exports = registerValidation