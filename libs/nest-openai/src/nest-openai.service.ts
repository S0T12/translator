import { Inject, Injectable } from '@nestjs/common';
import { OPENAI_API_KEY } from './constants/injection-token';
import { OpenAiService } from './openai-service';

@Injectable()
export class NestOpenaiService extends OpenAiService {
  constructor(
    @Inject(OPENAI_API_KEY)
    private openapiKey: string,
  ) {
    super();
  }

  async translate(sourceLang: string, targetLang: string, phrase: string) {
    return this.sharedTranslate(
      sourceLang,
      targetLang,
      phrase,
      this.openapiKey,
    );
  }
}
