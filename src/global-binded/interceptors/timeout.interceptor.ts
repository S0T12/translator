import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { TimeoutException } from '../../shared/exeptions/timeout.exeption';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError((error) => {
        console.log(error);
        return throwError(() => new TimeoutException('Response Timeout'));
      }),
    );
  }
}
