import { Module } from '@nestjs/common';
import got from 'got';
import { MyLoggerService } from './my-logger.service';
import { IP } from './constants/injection-token';

@Module({
  providers: [
    MyLoggerService,
    {
      provide: IP,
      useFactory: async () => {
        const response = await got.get('https://ip-api.ir/info/myip');
        const body = response.body;
        console.log('body', body);
        const myip = JSON.parse(body);

        await new Promise((resolve) => {
          setTimeout(() => resolve(1), 1000);
        });
        return myip.MyIP;
      },
    },
  ],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
