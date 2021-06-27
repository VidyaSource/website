const nodemailer = require("nodemailer")
const vidya = "vidyacontactinfo@gmail.com"

export default async (req, res) => {
  const {from, subject, message} = req.body
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: vidya,
      pass: process.env.MAIL_PASSWORD
    },
  })
  await transporter.sendMail({
    from: vidya,
    to: "info@vidyasource.com",
    subject: subject,
    text: `From ${from}\n\n${message}`
  }, function (err, info) {
    if(err)
      res.status(err.responseCode).json({message: err.response})
    else
      res.status(200).json({message: "OK"})
  })
}

