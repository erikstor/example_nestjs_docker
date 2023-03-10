import {NestFactory} from '@nestjs/core';
import {ConfigService} from '@nestjs/config';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    let port = configService.get<number>('port');
    await app.listen(port, () => console.log(`Running on port ${port}`));
}

bootstrap();
