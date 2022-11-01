require('dotenv').config({
  path:
    './configs/env/.env-' +
    (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
});
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter, TransformInterceptor } from './core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(process.env.PORT);

  console.info(
    'api run in [ %s ] successfully at port %s',
    process.env.NODE_ENV || 'development',
    process.env.PORT,
  );
}
bootstrap();
