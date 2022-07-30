const express = require('express');
const app = express();
const mongoose = require("mongoose");

const uri = 'mongodb+srv://username:password1234@cluster0.6s9149c.mongodb.net/?retryWrites=true&w=majority';
let db;
let status = 0;

//Use body parser for form data
app.use(express.urlencoded({extended: true}));
app.set("view engine", "pug");

//Serve static files from public (for the add page)
app.use(express.static("public"));
let usersRouter = require("./users-router");
app.use("/users", usersRouter);
let productsRouter = require("./products-router");
app.use("/products", productsRouter);

app.get("/", function(req, res, next){
	res.send(status);
});

app.post("/login", function(req, res, next){
	let username = req.body.username;
	let password = req.body.password;
	
	mongoose.connection.db.collection("users").findOne({"username": username, "password": password}, function(err, result){
		if(err)throw err;

		if(result){
			console.log("Username: " + username);
			res.redirect("/users");
		}
		else{
			res.status(401).send("Not authorized. Invalid username or password.");
			return;
		}
	});
});

app.get("/logout", function(req, res, next){
	req.session.loggedin = false;
	res.redirect("/");
});

mongoose.connect(uri, {useNewUrlParser: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	status = 1;
	app.listen(3000);
	console.log("Server listening on port 3000");
});
	
