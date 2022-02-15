require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Use Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile('/index.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }

    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.RECEIVER,
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('error');
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, ()=>{
    console.log('everything is ok!');
});