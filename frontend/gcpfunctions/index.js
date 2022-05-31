const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = async (req, res) => {
  // Enable CORS using the `cors` express middleware.
  return cors(req, res, async () => {
    try {
      // console.log(req);
      console.log(req.body.firstName);
      console.log(req.body.lastName);
      console.log(req.body.email);
      console.log(req.body.message);
      res.status(200).send('Success');
    } catch (error) {
      //return an error
      console.log('got error: ', error);
      res.status(500).send(error);
    }

    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    let mailDetails = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'WEB PORTFOLIO MESSAGE',
      text: `First Name: ${req.body.firstName}\nLast Name: ${req.body.lastName}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
    };

    let mailResponse = {
      from: process.env.EMAIL,
      to: [req.body.email, process.env.EMAIL],
      subject: 'Kevin Estrada Email Response',
      text: `Hello ${req.body.firstName},\n\nThank you for contacting me! I recieved your email and I should be able to send you a response within 24 hours!\n\nThank you,\nKevin Estrada`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log(err, 'Web Portfolio Error Occurs');
      } else {
        console.log('Web Portfolio Email sent successfully');
      }
    });

    mailTransporter.sendMail(mailResponse, function (err, data) {
      if (err) {
        console.log(err, 'Multiple People Email Error Occurs');
      } else {
        console.log('Multiple People Email sent successfully');
      }
    });
  });
};
