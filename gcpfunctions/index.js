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
			res
				.status(200)
				.send(
					`Recieved the following: ${req.body.firstName},${req.body.lastName},${req.body.email},${req.body.message}`
				);
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
			text: `Fisrt Name: ${req.body.firstName}\nLast Name: ${req.body.lastName}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
		};

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log('Error Occurs');
			} else {
				console.log('Email sent successfully');
			}
		});
	});
};
