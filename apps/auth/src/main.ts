import { NestFactory } from "@nestjs/core";
import { AuthModule } from "./auth.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AuthModule,
		{
			transport: Transport.TCP,
			options: {
				host: "localhost",
				retryAttempts: 5,
				retryDelay: 3000,
				port: 3001,
			},
		}
	);

	const logger = new Logger(bootstrap.name);

	await app.listen();

	logger.log(`Auth Microservice listening 🪄`);
}
bootstrap();
