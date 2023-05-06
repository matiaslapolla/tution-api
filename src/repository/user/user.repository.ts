import { User } from "../../domain/user/iuser.entity";
import { UserRepository } from "../../domain/user/iuser.repository";

export class UserRepositoryImpl implements UserRepository {
	constructor() {}

	public create(user: User): Object {
		const resp = {
			message: "UserRepositoryImpl.create()",
			data: user,
		};
		return resp;
	}
}
