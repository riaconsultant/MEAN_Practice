var mail=require('nodemailer');

var transporter = mail.createTransport({
    service:'gmail',
    auth:{
        user:'manoj.chaurasiya@outlook.com',
        pass:'@Manu_tech1'
    }
});

var mailOptions = {
    from:'manoj.chaurasiya@outlook.com',
    to:'admin@riaconsultant.in',
    subject:'Hello Mail testing from node server.',
    text:'Body message of the mail.'
};

transporter.sendMail(mailOptions,function(err,message){
    if(err){
        console.log('Error'+err);
    } else {
        console.log('Email sent'+message.response);
    }
});