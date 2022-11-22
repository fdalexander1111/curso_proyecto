import nodemailer from "nodemailer";
import { config } from "../src/config";
import dotenv from 'dotenv';
dotenv.config();

export default class Notification{

    private options:object;
     
    constructor(type:string, subject:any = null, html:any = null, body:any = null){
       let to;
       let from;
     
        switch (type) {
            case "email":
                
                to =  `${process.env.NOTIFICATION_RECIPIENT}`;
                from = `${process.env.NOTIFICATION_EMAIL}`;
                break;
        
            case "message":

                break;

            case "whatsapp":

                break;
        
            default:
                break;
        }

        this.options = {
            ...(to ? {to:to} : {}),
            ...(from ? {from:from} : {}),
            ...(subject ? {subject:subject} : {}),
            ...(html ? {html:html} : {}),
            ...(body ? {body:body} : {}),
        }
        
    }

    async sendEmail(){
        const transporter = nodemailer.createTransport(config.ethereal);

        try {
            const info = await transporter.sendMail(this.options);
            //log info
        } catch (error) {
            //log error
        }

    }


}




