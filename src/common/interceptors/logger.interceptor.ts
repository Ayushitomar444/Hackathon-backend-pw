import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
  } from "@nestjs/common";
  import { catchError, tap, map } from "rxjs/operators";
  import { PpLoggerService } from "src/boostrap/logger.service";
  import * as _ from "lodash";
  
  @Injectable()
  export class PpLoggingInterceptor implements NestInterceptor {
	constructor(private logger: PpLoggerService) {
	  this.logger.setContext(PpLoggingInterceptor.name);
	}
	intercept(context: ExecutionContext, next: CallHandler<any>) {
	  const className = context.getClass().name;
	  const request = context.switchToHttp().getRequest();
	  const response = context.switchToHttp().getResponse();
	  request["logger"] = this.logger;
  
	  let date = Date.now();
  
	  let logsMsg = {
		path: request.originalUrl,
		apiUrl: request.path,
		method: request.method,
		statusCode: response?.statusCode
	  }
  
	  return next.handle().pipe(
		map((data) => {
		  if (response?.statusCode == 200 || response?.statusCode == 201) return data;
		  this.logger.log({
			timeStamp: new Date(),
			body: request.body,
			...logsMsg,
			responseTime: Date.now() - date
		  })
		  return data;
	  }),
		catchError((err) => {
		  this.logger.error({
			className: className,
			timeStamp: new Date(),
			error: JSON.stringify(err),
			stack: JSON.stringify(err.stack),
			body: request.body,
			...logsMsg,
			responseTime: Date.now() - date
		  })
		  throw err;
		})
	  );
	}
  }