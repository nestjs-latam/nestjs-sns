import { Inject, Injectable } from '@nestjs/common';
import { AWSError, SNS } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

import { SmsDto } from '../dtos/sms.dto';

@Injectable()
export class SmsService {
  private sns: SNS;
  constructor(
    @Inject('SMS_CONFIG')
    private readonly config: SNS.ClientConfiguration
  ) {
    this.sns = new SNS(config);
  }

  public async send(
    params: SmsDto
  ): Promise<PromiseResult<SNS.PublishResponse, AWSError>> {
    return this.sns
      .publish({
        Message: params.message,
        PhoneNumber: params.phone
      })
      .promise();
  }
}
