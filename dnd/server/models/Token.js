const { Schema, model } = require('mongoose')


const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" }, // ObjectId создаёт рандомный идентификатор в 24 значения
    refreshToken: { type: String, required: true }
})

module.exports = model('Token', TokenSchema)