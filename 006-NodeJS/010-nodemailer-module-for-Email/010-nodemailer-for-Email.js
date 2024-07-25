/*
author : Jaydatt Patel

nodemailer module : To Email Purpose
*/

// 1. import nodemailer
const nodemailer = require('nodemailer');
const readline = require('readline');

// 2. Configure email and send it.
async function sendMail(){

    function procedure(receiver){
        // 1. Create an email transporter.
        // SMTP (Simple Mail Transfer Protocol)
        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth : {
            user : "sender@gmail.com",  //sender's email id
            pass:"123456"   // AppgeneratedPassword
            }
        });
        
        const mailOptions = {
            from : "receiver@gmail.com",
            to : receiver,  // receiver's email id
            subject : "NodeJs",
            text : "Welcome to NodeJS!"
        };
        
        try{
            const result = transport.sendMail(mailOptions);
            console.log("Success: Email sent to", receiver)
        }catch(err){
            console.log(err);
        }
    }
  

    let read = readline.createInterface({input : process.stdin, output : process.stdout});
    read.question("Please Enter Receiver's Email ID: ", (email) =>{
        procedure(email);
        read.close();
    });

}

sendMail();
