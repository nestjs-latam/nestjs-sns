import { ModuleMetadata, Type } from '@nestjs/common';
import { SNS } from 'aws-sdk';

export interface SmsModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<SNS.ClientConfiguration>;
  useClass?: Type<SNS.ClientConfiguration>;
  useFactory?: (
    ...args: any[]
  ) => Promise<SNS.ClientConfiguration> | SNS.ClientConfiguration;
  inject?: any[];
}

export type SmsConnectionFactory = (
  config?: SNS.ClientConfiguration
) => Promise<SNS.ClientConfiguration>;
