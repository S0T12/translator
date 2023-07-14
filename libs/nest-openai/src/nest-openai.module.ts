import {
  DynamicModule,
  InjectionToken,
  Module,
  OptionalFactoryDependency,
} from '@nestjs/common';
import { NestOpenaiRequestScopeService } from './nest-openai-request-scope.service';
import { NestOpenaiService } from './nest-openai.service';
import { OPENAI_API_KEY } from './constants/injection-token';

@Module({})
export class NestOpenaiModule {
  static register(apiKey: string): DynamicModule {
    return {
      module: NestOpenaiModule,
      providers: [
        {
          provide: OPENAI_API_KEY,
          useValue: apiKey,
        },
        NestOpenaiService,
        NestOpenaiRequestScopeService,
      ],
      exports: [NestOpenaiService, NestOpenaiRequestScopeService],
    };
  }

  static registerAsync(options: {
    imports: any[];
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    useFactory: (...args: any[]) => string | Promise<string>;
  }): DynamicModule {
    return {
      module: NestOpenaiModule,
      imports: options.imports,
      providers: [
        {
          provide: OPENAI_API_KEY,
          inject: options.inject,
          useFactory: options.useFactory,
        },
        NestOpenaiService,
        NestOpenaiRequestScopeService,
      ],
      exports: [NestOpenaiService, NestOpenaiRequestScopeService],
    };
  }
}
