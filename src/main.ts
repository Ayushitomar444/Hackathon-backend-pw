import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseTransformerInterceptor } from './common/interceptors/response.interceptor';
import { PpContextService } from './core/services/context.service';
import { PpLoggingInterceptor } from './common/interceptors/logger.interceptor';
import { Module, ValidationPipe } from '@nestjs/common';
import { Logger, LoggerModule } from 'nestjs-pino'

async function createLogger() {
  @Module({
    imports: [LoggerModule.forRoot()],
  })
  class TempModule {}

  const tempApp = await NestFactory.createApplicationContext(TempModule)
  await tempApp.close()
  return tempApp.get(Logger)
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: await createLogger()
}); //{
  //   logger: false
  // });

  // app.useLogger(new MyLogger(NestApplication.name));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validateCustomDecorators: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new ResponseTransformerInterceptor());

  app.useGlobalInterceptors(app.get(PpLoggingInterceptor));

  PpContextService.context = app;

  const config = new DocumentBuilder()
    .setTitle('Order Management Microservice')
    .setDescription('Order Management Microservice API description')
    .setVersion('1.0')
    .addTag('Order Management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { filter: true },
  });

  const port = app.get<ConfigService>(ConfigService).get('port') || 3000;
  const host = app.get<ConfigService>(ConfigService).get('host') || '0.0.0.0';

  await app.listen(port, host);
  console.log(`App listening on port ${port} and host ${host}`);
}

bootstrap();
