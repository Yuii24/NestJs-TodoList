import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? port);

  console.log(`App is run on 『 http://127.0.0.1:${4000} 』`);
}
void bootstrap();
