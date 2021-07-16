const nodemailer = require('nodemailer');

//Enviar mail demora async
const send = async ({mail, asunto, cuerpo})=>{
    try {
        const transporter = nodemailer.createTransport({
            /*host:"smtp.gmail.email",
            port:587,
            secure:false,*/ //Es lo mismo que decir service:'gmail'
            service:process.env.MAIL_SERVICE || 'gmail',
            auth:{
                user: process.env.MAIL_USER || 'cursotestnode@gmail.com',
                pass: process.env.MAIL_PASS || 'pirata22'
            }
        });
    
        const info = {
            to:mail,
            subject:asunto,
            html:cuerpo
        }
        
        const {messageId} = await transporter.sendMail(info);
        return messageId;
        
    } catch (error) {
        console.log(error)
    }
   


    


}
module.exports = {send};
