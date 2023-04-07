const { Schema, model } = require('mongoose') //1. Импортитруем Схему и саму модель


//2. Создаём класс схемы с нужными полями
const UserSchema = new Schema({
    email: { type: String, unique: true, required: true, },
    username: { type: String, required: true, },
    password: { type: String, required: true, },
    isActivated: { type: Boolean, default: false, },
    activationLink: { type: String },
},
    {
        timestamps: true
    }
);
//3. Экспортируем МОДЕЛЬ (1 прм. - Название, 2 прм. - класс модели)
module.exports = model('User', UserSchema)