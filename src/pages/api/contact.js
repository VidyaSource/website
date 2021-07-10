import nodemailer from 'nodemailer'
import isEmail from 'validator/lib/isEmail'
import DOMPurify from 'dompurify'

const vidyaFrom = "vidyacontactinfo@gmail.com"
const vidyaTo = "info@vidyasource.com"

export default async (req, res) => {
  const {from, subject, message} = req.body
  if (isEmail(from)) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: vidyaFrom,
        pass: process.env.MAIL_PASSWORD
      },
    })
    await transporter.sendMail({
      from: vidyaFrom,
      to: vidyaTo,
      subject: DOMPurify.sanitize(subject),
      text: `From ${from}\n\n${DOMPurify.sanitize(message)}`
    }, function (err, info) {
      if (err)
        res.status(err.responseCode).json({message: err.response})
      else
        res.status(200).json({message: `OK: ${info}`})
    })
  }
}

