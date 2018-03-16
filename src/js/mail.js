var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikas.sehrawat1611@gmail.com',
    pass: 'vks16116'
  }
});

var mailOptions = {
  from: 'vikas.sehrawat1611@gmail.com',
  to: 'gundeeps2786@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});