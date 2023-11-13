import { Module } from "@nestjs/common";
import { HybridController } from "./hybrid.controller";
import { HybridService } from "./hybrid.service";
import { HYBRID_HELLO } from "@app/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
	imports: [
		// Publish on 3001
		ClientsModule.register([
			{
				name: HYBRID_HELLO,
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3001,
				},
			},
		]),
	],
	controllers: [HybridController],
	providers: [HybridService],
})
export class HybridModule {}
