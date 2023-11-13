import { AUTH, HYBRID_MESSAGE } from "@app/common";
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
	constructor(
		// Two diff Microservices are injected separately
		@Inject(AUTH) private readonly client: ClientProxy,
		@Inject(HYBRID_MESSAGE) private readonly hybridClient: ClientProxy
	) {}

	async getHello(): Promise<Observable<string>> {
		return await new Promise((resolve, reject) => {
			this.client.send({ cmd: "greet" }, {}).subscribe({
				next: (data) => resolve(data),
				error: (err) => reject(err),
				complete: () => resolve(null),
			});
		});
	}

	async getMessage(): Promise<Observable<string>> {
		return await new Promise((resolve, reject) => {
			this.hybridClient.send({ cmd: "send_message" }, {}).subscribe({
				next: (data) => resolve(data),
				error: (err) => reject(err),
				complete: () => resolve(null),
			});
		});
	}
}
