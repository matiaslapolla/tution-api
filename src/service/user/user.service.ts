import { UserRepositoryImpl } from "../../repository/user/user.repository";
import { User } from "../../domain/user/iuser.entity";
import { UserRepository } from "../../domain/user/iuser.repository";

export class UserService {
	private userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepositoryImpl();
	}

	public create(user: User): Object {
		const serviceMessage = "UserService.create()";
		const resp: Object = this.userRepository.create(user);

		const userResp = {
			message: serviceMessage,
			data: resp,
		};

		return userResp;
	}
}
