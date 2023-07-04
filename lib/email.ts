import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SOLUTION1_EMAIL_ADDRESS,
        pass: process.env.SOLUTION1_EMAIL_PASSWORD
    }
})

export const sendEmail = async (from: string, text: string) => {
    const email = {
        from: 'next_solution1@hotmail.com',
        to: ['next_solution1@hotmail.com', 'robin_steeman@hotmail.com', 'joeriabbo@hotmail.com'],
        subject: 'Solution1 contact request',
        text: `${text}
        
        
        Afzender: ${from}
        `
    }

    return await transporter.sendMail(email)
}