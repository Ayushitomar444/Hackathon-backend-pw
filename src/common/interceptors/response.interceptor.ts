import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
import { map } from 'rxjs/operators';
import { findIndex, isUndefined, isEmpty } from 'lodash';

@Injectable()
export class ResponseTransformerInterceptor implements NestInterceptor {


  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    if (
      ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].indexOf(request.method) === -1
    ) {
      return next.handle();
    }

    return next.handle().pipe(
      map((data) => {
        if (data?.paginate && data?.data) {
          if (data.paginate.limit) {
              return {
                  success: true,
                  data: data.data,
                  paginate: data.paginate,
                  refresh: data.refresh
              };
          }
          else {
              data.paginate["limit"] = 20;
              return {
                  success: true,
                  data: data.data,
                  paginate: data.paginate,
                  refresh: data.refresh
              }
          }
        } else if (data && data.refresh) {
            return {
                success: true,
                data: data.data,
                refresh: data.refresh
            }
        }
        return {
            success: true,
            data: data
        };
      }),
    );
  }
}
