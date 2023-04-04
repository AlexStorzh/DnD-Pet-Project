const express = require('express') // 1. Получаем модуль express
const cors = require('cors')
const mongoose = require('mongoose') //2. Получаем mongoose
const authRouter = require('./routes/authRoutes.js') //3. Получаем пути с запросами CRUD
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middleware/errorMiddleware.js')
require('dotenv').config()




const PORT = process.env.SERVER_PORT || 4001
const MONGOOSE_CONNECT = process.env.MONGOOSE_CONNECT
const app = express() // 1.1 Запускаем функцию express


app.use(express.json())// Возможность серверу читать json данные
app.use(cookieParser())
app.use(cors())
app.use('/auth', authRouter) //3.1 Прослуштваем пути на сервере
app.use(errorMiddleware)



// 1.2 Начинаем прослушку на порту 

const start = async () => {
    try {
        await mongoose.connect(MONGOOSE_CONNECT).then(() => console.log('DB is OK')) //2.1 Коннектимся к базе

        app.listen(PORT, (err) => {
            if (err) {
                return console.log(err);
            }

            console.log(`Server is OK on ${PORT}`);
        })
    } catch (error) {

    }
}


start();