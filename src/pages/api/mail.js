// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer")
const vidya = "vidyacontactinfo@gmail.com"

export default async (req, res) => {
  const {from, subject, message} = req
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: vidya,
      pass: process.env.MAIL_PASSWORD
    },
  })
  const info = await transporter.sendMail({
    from: from,
    to: vidya,
    subject: subject,
    text: message
  })
}

