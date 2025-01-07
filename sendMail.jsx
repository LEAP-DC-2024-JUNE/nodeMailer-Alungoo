const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailInfo = {
  from: 'Alungoo 👻" <alungoo976@gmail.com>', // sender address
  to: ["billduluu@gmail.com"], // list of receivers
  subject: "Sain uu bagshaa, nodemailer bichij bn", // Subject line
  text: "Manaid end zondoo tsas orj bn", // plain text body
  html: "<b>Manaid end zondoo tsas orj bn</b>", // html body
  attachments: [
    {
      filename: "pic.jpg",
      path: path.join(__dirname, "pic.jpg"),
      contentType: "image/jpg",
    },
  ],
};

const sendMail = async (transporter, mailInfo) => {
  try {
    await transporter.sendMail(mailInfo);
    console.log("Email has been sent!");
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailInfo);
