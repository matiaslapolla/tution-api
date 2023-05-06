import { UserHelper } from "../../helpers/user/user.helper";
import { UserService } from "../../service/user/user.service";

export class UserController {
	private UserService: UserService;
	private UserHelper: UserHelper;

	constructor() {
		this.UserService = new UserService();
		this.UserHelper = new UserHelper();
	}

	create(user: any) {
		const validRequest = this.UserHelper.validateUser(user);
		let resp: Object = {};

		if (!validRequest) {
			resp = {
				message: "UserController.create()",
				data: "Invalid request",
			};
		}

		resp = this.UserService.create(user);
		return resp;
	}
}
