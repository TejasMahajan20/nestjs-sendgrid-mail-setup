import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendGridClient } from './sendgrid-client';

@Module({
  providers: [MailService, SendGridClient]
})
export class MailModule {}
