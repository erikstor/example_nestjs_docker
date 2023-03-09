"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    let port = configService.get('port');
    console.log(`Running on port ${port} aaa1`);
    port = parseInt(process.env.PORT, 10) || 3000;
    await app.listen(port, () => console.log(`Running on port ${port} aaa2`));
}
bootstrap();
//# sourceMappingURL=main.js.map