import { Inject, Injectable, Scope } from '@nestjs/common';
import { IP } from './constants/injection-token';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class MyLoggerService {
  context = 'MyLoggerService';
  constructor(
    @Inject(IP)
    private ip: string,
  ) {}

  async log(message: string) {
    console.log(`[${this.context}] - [${this.ip}] - ${message}`);
  }

  setContext(context: string) {
    this.context = context;
  }
}
