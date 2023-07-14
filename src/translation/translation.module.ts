import { NestOpenaiModule } from 's0t12/nest-openai';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JsonStorageModule } from 'src/json-storage/json-storage.module';
import { LanguageValidationModule } from 'src/language-validation/language-validation.module';
import { MyLoggerModule } from '../my-logger/my-logger.module';
import { TranslationEntity } from './entities/translation.entity';
import { TranslationService } from './translation.service';
import { TranslationController } from './translation.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TranslationEntity]),
    JsonStorageModule,
    NestOpenaiModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService) => {
        return configService.get('OPENAI_API_KEY');
      },
    }),
    MyLoggerModule,
    LanguageValidationModule,
  ],
  controllers: [TranslationController],
  providers: [TranslationService],
  exports: [TypeOrmModule],
})
export class TranslationModule {}
