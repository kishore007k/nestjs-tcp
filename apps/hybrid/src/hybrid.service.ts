import { HYBRID_HELLO } from "@app/common";
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class HybridService {
	constructor(@Inject(HYBRID_HELLO) private readonly client: ClientProxy) {}

	async getHello(): Promise<Observable<string>> {
		return await new Promise((resolve, reject) => {
			this.client.send({ cmd: "greet_hybrid" }, {}).subscribe({
				next: (data) => resolve(data),
				error: (err) => reject(err),
				complete: () => resolve(null),
			});
		});
	}

	getMessage(): string {
		return "This is a message sent by the hybrid microservice!";
	}
}
