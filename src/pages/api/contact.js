// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer")
const vidya = "vidyacontactinfo@gmail.com"

export default async (req, res) => {
  const {from, subject, message} = req
  console.log("from " + from)
  console.log("subject " + subject)
  console.log("message " + message)
  if (process.env.MAIL_PASSWORD) {
    console.log("pwd")
  } else {
    console.log("Nope")
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: vidya,
      pass: process.env.MAIL_PASSWORD
    },
  })
  console.log("Sending mail")
  const info = await transporter.sendMail({
    from: vidya,
    to: "info@vidyasource.com",
    subject: subject,
    text: `From ${from}\n\n${message|`
  })
}

