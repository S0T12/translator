import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { LanguageService } from 'src/language/language.service';

@Injectable()
export class LanguageValidationPipe implements PipeTransform {
  constructor(private readonly _languageService: LanguageService) {}

  async transform(value: string, metadata: ArgumentMetadata) {
    const found = await this._languageService.existShortName(value);
    if (found) {
      return value.toLowerCase();
    } else {
      throw new BadRequestException('language not supported');
    }
  }
}
