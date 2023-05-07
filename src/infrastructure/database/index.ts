const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const db = mongoose.connection;

const initialize = () => {
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", function () {
		console.log("Connected to MongoDB");
	});
};

const createConnection = () => {
	db.on("error", console.error.bind(console, "connection error:"));

	db.once("open", function () {
		console.log("Connected to MongoDB");
	});

	db.on("disconnected", () => {
		console.log("MongoDB disconnected");
	});

	return mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
};

module.exports = db;
