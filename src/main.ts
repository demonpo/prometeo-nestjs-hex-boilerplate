import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { errorHandler } from '@prometeo-dev/error-handler-library/dist/middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(errorHandler());
  await app.listen(3000);
}
bootstrap();
