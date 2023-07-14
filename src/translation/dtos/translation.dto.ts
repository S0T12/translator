import { IsString } from 'class-validator';
import { Languages } from '../entities/translation.entity';

export class TranslateReqeuseDTO {
  @IsString()
  sourceLang: Languages;

  @IsString()
  targetLang: Languages;

  @IsString()
  phrase: string;
}
