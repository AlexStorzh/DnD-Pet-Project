const nodemailer = require('nodemailer')
require('dotenv').config()


const HOST = process.env.SMTP_HOST
const PORT = process.env.SMTP_PORT
const USER = process.env.SMTP_USER
const PASSWORD = process.env.SMTP_PASSWORD
class EmailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            auth: {
                user: USER,
                pass: PASSWORD
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'dnd5create@gmail.com',
            to,
            subject: "Account activation on" + 'http://localhost:4000',
            html:
                `< div >

                <h1> To activate account click on link
                    <a href= ${link}>${link}</a>
                </h1>
            <div/>`

        })

    }
}

module.exports = new EmailService()


