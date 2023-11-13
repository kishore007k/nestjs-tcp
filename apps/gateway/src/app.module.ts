import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AUTH, HYBRID_MESSAGE } from "@app/common";

@Module({
	imports: [
		// Here we are sending two separate req to two microservices
		ClientsModule.register([
			{
				name: AUTH,
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3001,
				},
			},
			{
				name: HYBRID_MESSAGE,
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3002,
				},
			},
		]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
