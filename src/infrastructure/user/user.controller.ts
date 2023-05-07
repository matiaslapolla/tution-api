import { User } from "../../domain/user/iuser.entity";
import { UserService } from "../../service/user/user.service";

export class UserController {
	private UserService: UserService;

	constructor() {
		this.UserService = new UserService();
	}

	public async create(user: User): Promise<any> {
		const resp: any = await this.UserService.create(user);
		const respObject = {
			status: "success",
			data: resp,
		};
		return respObject;
	}
}
