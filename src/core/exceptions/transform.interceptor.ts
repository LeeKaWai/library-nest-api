import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}
let response = null;

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    response = ctx.getResponse();

    return next.handle().pipe(
      map((data) => {
        if (
          response.req.method === 'GET' &&
          response.req.url.startsWith('/wechatCoupon')
        ) {
          return data;
        } else {
          return {
            result: data,
            status: 200,
          };
        }
      }),
    );
  }
}
