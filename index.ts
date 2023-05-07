import { UserController } from "./src/infrastructure/user/user.controller";

const express = require("express");
const session = require("express-session");

const app = express();
const port = 3000;

const LoggerMiddleware = (req: any, res: any, next: any) => {
	console.log(`Logged  ${req.urcl}  ${req.method} -- ${new Date()}`);
	next();
};

// Middleware
app.use(LoggerMiddleware);
app.use(express.json());
app.use(
	session({
		secret: "secretkey",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60,
		},
	})
);

// Routes

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});

const userController = new UserController();
app.post("/register-user", (req: any, res: any) => {
	const user = userController.create(req.body);
	res.send(user);
});
