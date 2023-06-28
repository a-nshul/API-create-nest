import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle('E-commerce')
  .setDescription('This is  API Application for online sopping')
  .setVersion('1.0')
  .addTag('backend-main')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(process.env["APP_PORT"] || 3000);

}
bootstrap();
