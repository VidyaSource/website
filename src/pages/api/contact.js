// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer")
const vidya = "vidyacontactinfo@gmail.com"

export default async (req, res) => {
  console.log(JSON.stringify(req.body))
  const {from, subject, message} = req.body
  console.log("from " + from)
  console.log("subject " + subject)
  console.log("message " + message)
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
  await transporter.sendMail({
    from: vidya,
    to: "info@vidyasource.com",
    subject: subject,
    text: `From ${from}\n\n${message}`
  })
  res.status(200)
}

