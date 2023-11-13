import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const TcpOptions: MicroserviceOptions = {
	transport: Transport.TCP,
	options: {
		host: "localhost",
		retryAttempts: 5,
		retryDelay: 3000,
		port: 3001,
	},
};
