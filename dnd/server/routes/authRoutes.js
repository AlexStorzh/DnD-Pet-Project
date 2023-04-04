const { Router } = require("express") // 1. Получаем Router .
const router = new Router() // 1.1 Инициализируем.
const controller = require('../controllers/userController.js') //2.1 Получаем функции из контроллера
const registerValidation = require('../services/validators/authValidator.js')
const authMiddleware = require('../middleware/authMiddleware.js')
//1.2 Создаём нужные нам пути (цепочка прослушивания начинается в index.js)
//2.2 Вторым параметром передаём нужные функции
//3 Мидлвейр registerValidaton проверяет полученый реквест 
router.post('/registration', registerValidation, controller.registration)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/refresh', controller.refresh)
router.get('/activate/:link', controller.activate)
router.get('/users', authMiddleware, controller.getUsers)


//1.3 Экспортируем роутер.
module.exports = router
