var express = require( 'express' )
var path = require( 'path' )
var bodyParser = require( 'body-parser' );
var app = express();
var nodemailer = require("nodemailer");
var port = process.env.PORT || 8000
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( express.static( __dirname + '/dist' ) );

// var smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     auth: {
//         user: "vikas.sehrawat1611@gmail.com",
//         pass: "vks16116"
//     }
// });

// app.get('/send',function(req,res){
// 	var mailOptions={
//    to : req.query.to,
//    subject : req.query.subject,
//    text : req.query.text
// 	}
// 	console.log(mailOptions);
// 	smtpTransport.sendMail(mailOptions, function(error, response){
// 	if(error){
// 	console.log(error);
// 	res.end("error");
// 	}else{
// 	console.log("Message sent: " + response.message);
// 	res.end("sent");
// 	}
// 	});
// });

app.post("/Hiring", function(req,res){
	var api_key = 'key-7a2322746b659a0a26d66f0c07e27db1';
	var domain = 'sandbox7102872c028b4e199dcaafbbac291c22.mailgun.org';
	var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
	 
	var data = {
	  from: 'Pronto it labs <postmaster@sandbox7102872c028b4e199dcaafbbac291c22.mailgun.org>',
	  to: 'gundeeps2786@gmail.com',
	  subject: req.body.browser,
	  html: '<b>Client Email Address: </b>' + req.body.email + '<br><b>Phone No.</b><br>' + req.body.contact +
        '<br><b>Name</b><br>' + req.body.firstName
	};
	 
	mailgun.messages().send(data, function (error, body) {
		console.log('error',error);
	  if(!error){
	  res.sendFile( path.join( __dirname, '/dist/index.html' ) );
	}
	  else{res.send("Mail not sent",error)}
});
});



app.listen(port, function() {
    console.log("App is running on port " + port);
});
