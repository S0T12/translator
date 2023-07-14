import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ErrorsService } from '../../errors/errors.service';
import { CreateErrorDto } from '../../errors/dto/create-error.dto';

@Catch(HttpException)
export class LogErrorFilter implements ExceptionFilter {
  constructor(private readonly _errorService: ErrorsService) {}
  async catch(exception: HttpException, host: ArgumentsHost) {
    console.log('exception >>>>>>', exception.getStatus());

    const context = host.switchToHttp();
    const request = context.getRequest();
    const response = context.getResponse();
    const exeptionRespone = exception.getResponse();

    const errorDto = new CreateErrorDto();
    errorDto.message = JSON.stringify(exeptionRespone);
    const errorInserted = await this._errorService.create(errorDto);

    response.send({
      // statusCode: exception.getStatus(),
      response: exception.getResponse(),
      trackingId: errorInserted.id,
    });
  }
}
