import { Injectable } from '@nestjs/common';
import { SendGridClient } from './sendgrid-client';
import { MailDataRequired } from '@sendgrid/mail';

@Injectable()
export class MailService {
    constructor(private readonly sendGridClient: SendGridClient) { }
    
    
    async sendTestEmail(recipient: string, body = 'This is a test mail'): Promise<void> {
        const mail: MailDataRequired = {
            to: recipient,
            from: process.env.SENDGRID_SENDER_EMAIL_ID,
            subject: 'Test email',
            content: [{ type: 'text/plain', value: body }],
        };
        await this.sendGridClient.send(mail);
    }

    async sendEmailWithTemplate(recipient: string, body: string): Promise<void> {
        const mail: MailDataRequired = {
            to: recipient,
            from: process.env.SENDGRID_SENDER_EMAIL_ID,
            templateId: 'Sendgrid_template_ID',
            dynamicTemplateData: { body, subject: 'Send Email with template' }, //The data to be used in the template
        };
        await this.sendGridClient.send(mail);
    }
}
