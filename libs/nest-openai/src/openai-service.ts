import { Configuration, OpenAIApi } from 'openai';

export abstract class OpenAiService {
  async sharedTranslate(
    sourceLang: string,
    targetLang: string,
    phrase: string,
    apiKey: string,
  ) {
    try {
      const configuration = new Configuration({
        apiKey,
      });

      const openai = new OpenAIApi(configuration);
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a translator, I give you a phrase and you should get me the translation. don't provide anything except the translation`,
          },
          {
            role: 'user',
            content: `translate from ${sourceLang} to ${targetLang}\nphrase: ${phrase}`,
          },
        ],
      });
      const { choices } = response.data;
      const {
        message: { content },
      } = choices[choices.length - 1];
      const processedContent = content
        .replace(/^['"]|['"]$/g, '')
        .replace(/^[pP]hrase:/, '')
        .replace(/^[tT]ranslation:/, '')
        .replace(/\.$/, '')
        .trim();
      return processedContent;
    } catch (error) {
      if (typeof error === 'object') {
        if ('response' in error) {
          return {
            error: error.response.data,
          };
        }
      }
    }
  }

  abstract translate(sourceLang: string, targetLang: string, phrase: string);
}
