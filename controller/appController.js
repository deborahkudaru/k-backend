const nodemailer = require("nodemailer")

const book = async (req, res) => {

  const { userEmail, name, phoneNumber, address, sessionType, date, time } = req.body;
  let config = {
    service: "gmail", 
    auth: {
      user: "quanimagery@gmail.com",
      pass: "vahwzrrlebkiftlm",
    },
  };

  let transporter = nodemailer.createTransport(config);

  const info = {
    from: userEmail, 
    to: "quanimagery@gmail.com", 
    subject: `Quan Imagery Booking`, 
    text:  `Name: ${name} Phone No: ${phoneNumber} Email: ${email} Address: ${address} Session Type: ${sessionType} Date: ${date} Time: ${time}</p>`,
  };

  transporter
    .sendMail(info)
    .then(() => {
      return res.status(201).json({
        msg: "you should receieve an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("Loggeed in successfully");
};

module.exports = {
  book,
};
