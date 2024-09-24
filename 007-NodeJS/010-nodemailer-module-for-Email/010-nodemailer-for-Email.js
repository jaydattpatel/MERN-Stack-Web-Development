/*
author : Jaydatt Patel

nodemailer module : To Email Purpose
*/

// 1. import nodemailer
const nodemailer = require("nodemailer");
const readline = require("readline");

const senderEmailId = "sender@gmail.com"; //sender's email id
const senderPassword = "appGeneratedPassword"; // AppgeneratedPassword

// 2. Configure email and send it.
async function sendMail() {
  function procedure(receiver) {
    // 1. Create an email transporter.
    // SMTP (Simple Mail Transfer Protocol)
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmailId, //sender's email id
        pass: senderPassword, // AppgeneratedPassword
      },
    });

    const mailOptions = {
      from: senderEmailId,
      to: receiver, // receiver's email id
      subject: "Nodemailer Test",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              /* Add your custom CSS styles here */
              body {
                font-family: Arial, sans-serif;
              }
              .content{
                color: red;
              }
              
          </style>
      </head>
      <body>
          <div class="container">
              <div>
                  <img src="https://picsum.photos/500/300" alt="image">
              </div>
              <div class="content">
                  <h3>Nodemailer</h3>
                <p>Welcome To NodeJS<p>
              </div>
              <div>
              <a href="https://www.google.com">Link Google</a>
              </div>
          </div>
      </body>
      </html>
  `,
    };

    try {
      const result = transport.sendMail(mailOptions);
      console.log("Success: Email sent to", receiver);
    } catch (err) {
      console.log(err);
    }
  }

  let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  read.question("Please Enter Receiver's Email ID: ", (email) => {
    procedure(email);
    read.close();
  });
}

sendMail();
