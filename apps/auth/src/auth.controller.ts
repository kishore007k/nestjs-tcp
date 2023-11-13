import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@MessagePattern({ cmd: "greet" })
	getHello(): string {
		return this.authService.getHello();
	}

	@MessagePattern({ cmd: "greet_hybrid" })
	greetHybrid(): string {
		return this.authService.greetHybrid();
	}
}
