import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const emailVerificationMailgenContent = (username, verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our APP! we're excited to have you onboard",
            action: {
                instructions: "To verify your email please click on the following button",
                button: {
                    color: "#22BC66",
                    text: 'Verify your email',
                    link: verificationURL
                }
            },
            outro: "Need help, or have questions just reply to this email, we'd love to help"
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetURL) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of your account",
            action: {
                instructions: "To reset your password please click on the following button",
                button: {
                    color: "#bd6309ff",
                    text: 'Reset your password',
                    link: passwordResetURL
                }
            },
            outro: "Need help, or have questions just reply to this email, we'd love to help"
        }
    }
}

const sendEmail = async function (options) {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagelink.com"
        }
    })

    const emailtextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHTMl = mailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_SMTP_HOST,
        port: process.env.MAIL_TRAP_SMTP_PORT,
        auth: {
            user: process.env.MAIL_TRAP_SMTP_USER,
            pass: process.env.MAIL_TRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "dhananjaybalekar@gmail.com",
        to: options.email,
        subject: options.subject,
        text: emailtextual,
        html: emailHTMl
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed. Check the MAILTRAP credentials in the .env file", error)
    }
}

export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent, sendEmail
}