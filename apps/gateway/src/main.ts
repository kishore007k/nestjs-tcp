import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const logger = new Logger(bootstrap.name);

	const port = (process.env.NODE_ENV && process.env.PORT) || 3000;

	await app.listen(port, () => {
		logger.log(`Gateway is running on http://localhost:${port}`);
	});
}
bootstrap();
