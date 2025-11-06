import { ValidationPipe, ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: WinstonModule.createLogger(winstonConfig),
    // logger: new ConsoleLogger({
    //   prefix: 'NEST API',
    //   json: false,
    // }),
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties not defined in the DTO
    transform: true, // Automatically transform plain objects to DTO instances
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
  }));
  // Use DocumentBuilder to create a new Swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('API') // Set the title of the API
    .setDescription('Api Nestjs') // Set the description of the API
    .setVersion('0.1') // Set the version of the API
    .build(); // Build the document

  // Create a Swagger document using the application instance and the document configuration
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger module with the application instance and the Swagger document
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
