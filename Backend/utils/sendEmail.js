const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.io",
        port: 465,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: "",
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transport.sendMail(mailOptions)
}

module.exports = sendEmail;