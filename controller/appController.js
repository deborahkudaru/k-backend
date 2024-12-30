const nodemailer = require("nodemailer")

const book = async (req, res) => {

  const { email, name, phoneNumber, address, sessionType, date, time } = req.body;
  let config = {
    service: "gmail", 
    auth: {
      user: "quanimagery@gmail.com",
      pass: "vahwzrrlebkiftlm",
    },
  };

  let transporter = nodemailer.createTransport(config);

  const info = {
    from: email, 
    to: "quanimagery@gmail.com", 
    subject: `Quan Imagery Booking`, 
    text:  `Name: ${name} /nPhone No: ${phoneNumber} /nEmail: ${email} /nAddress: ${address} /nSession Type: ${sessionType} /nDate: ${date} /nTime: ${time}</p>`,
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
