import { User } from "./iuser.entity";

export interface UserRepository {
	create(user: User): Object;
	// update(user: User): Promise<User>;
	// delete(id: string): Promise<void>;
	// findById(id: string): Promise<User>;
	// findAll(): Promise<User[]>;
}
