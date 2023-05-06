import { User } from "../../domain/user/iuser.entity";
export class UserHelper {
	constructor() {}

	private validateFirstName(firstName: string): Boolean {
		if (firstName.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	private validateLastName(lastName: string): Boolean {
		if (lastName.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	private validateEmail(email: string): Boolean {
		const regExpression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const result: boolean = regExpression.test(email); // true
		return result;
	}

	private validatePassword(password: string): Boolean {
		if (password.length >= 8) {
			return true;
		} else {
			return false;
		}
	}

	public validateUser(user: User): Boolean {
		try {
			if (
				this.validateFirstName(user.firstName) &&
				this.validateLastName(user.lastName) &&
				this.validateEmail(user.email) &&
				this.validatePassword(user.password)
			) {
				return true;
			} else {
				return false;
			}
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}
