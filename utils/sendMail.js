const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        auth:{
            user: 'legelcipher@gmail.com',
            pass: 'rlqylhiqyehvzubv',
        },
            tls:{
                rejectUnAuthorized:true
            }
    });

    const mailOptions = {
        from: 'legelcipher@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    console.log(transporter.options.host);

    await transporter.sendMail(mailOptions, function(error, info){

        if (error) {
      
          console.log(error);
      
        } 
      
      else {
      
          console.log('Email sent: ' + info.response);
      
        }
      
      });
};

module.exports = sendMail;