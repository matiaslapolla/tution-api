const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://localhost:27017/sidequix");
}

// define user schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
});

// define user methods
userSchema.methods.getName = function () {
	var returnObject = {
		name: this.name,
	};
	return returnObject;
};

userSchema.methods.getEmail = function () {
	var returnObject = {
		email: this.email,
	};
	return returnObject;
};

userSchema.methods.getPassword = function () {
	var returnObject = {
		password: this.password,
	};
	return returnObject;
};

// define user model
const User = mongoose.model("User", userSchema);

// export user model
module.exports = User;
