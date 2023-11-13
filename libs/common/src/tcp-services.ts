import { Transport } from "@nestjs/microservices";

export const AuthService = {
	name: "AUTH_SERVICE",
	transport: Transport.TCP,
	options: {
		host: process.env.HOST || "localhost",
	},
};
