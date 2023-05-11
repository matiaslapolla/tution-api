import { User } from "../../domain/user/iuser.entity";
import { UserRepository } from "../../domain/user/iuser.repository";
const mongoose = require("mongoose");

export class UserRepositoryImpl implements UserRepository {
	private collection: String = "users";
	private userSchema: any = new mongoose.Schema({
		firstName: String,
		lastName: String,
		email: String,
		password: String,
	});
	private userModel: any = mongoose.model(this.collection, this.userSchema);

	constructor() {
		mongoose.connect("mongodb://localhost:27017/sidequix", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}

	public create(user: User): Object {
		try {
			const newUser: any = new this.userModel(user);
			const resp: any = newUser.save();
			return resp;
		} catch (error: any) {
			console.error(error);
			return { error: error.message };
		}
	}
}
