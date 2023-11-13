import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
	getHello(): string {
		return "Hello World!";
	}

	greetHybrid(): string {
		return "Welcome to Hybrid Microservice🤗";
	}
}
