import { DynamicModule, Global, Module } from '@nestjs/common';
import { SmsModuleAsyncOptions } from './interfaces/async-options.interface';
import { SmsService } from './services/sms.service';

@Global()
@Module({
  providers: [SmsService],
  exports: [SmsService]
})
export class SmsModule {
  static forRootAsync(options: SmsModuleAsyncOptions): DynamicModule {
    return {
      module: SmsModule,
      imports: [...options.imports],
      providers: [
        {
          provide: 'SMS_CONFIG',
          useFactory: options.useFactory,
          inject: options.inject
        },
        SmsService
      ],
      exports: [SmsService]
    };
  }
}
