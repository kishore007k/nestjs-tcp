import { Controller, Get } from "@nestjs/common";
import { HybridService } from "./hybrid.service";
import { Observable } from "rxjs";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class HybridController {
	constructor(private readonly hybridService: HybridService) {}

	@Get()
	getHello(): Promise<Observable<string>> {
		return this.hybridService.getHello();
	}

	@MessagePattern({ cmd: "send_message" })
	getMessage(): string {
		return this.hybridService.getMessage();
	}
}
