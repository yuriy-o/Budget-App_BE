import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

const HOST: string = process.env.HOST;
const PORT: string | 3000 = process.env.PORT || 3000;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/');
  app.enableCors();
  await app.listen(PORT, HOST);
  console.log(
    `Nest application successfully started: http://${HOST}:${PORT}/api/v1`,
  );
}

bootstrap();
