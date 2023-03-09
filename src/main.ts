import {NestFactory} from '@nestjs/core';
import {ConfigService} from '@nestjs/config';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    let port = configService.get<number>('port');
    console.log(`Running on port ${port} aaa1`)
    port = parseInt(process.env.PORT, 10) || 3000
    await app.listen(port, () => console.log(`Running on port ${port} aaa2`));
}

bootstrap();
