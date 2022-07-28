const express = require('express');
const app = express();
const mongoose = require("mongoose");

const uri = 'mongodb+srv://username:password1234@cluster0.6s9149c.mongodb.net/?retryWrites=true&w=majority';
let db;

//Use body parser for form data
app.use(express.urlencoded({extended: true}));
app.set("view engine", "pug");

//Serve static files from public (for the add page)
app.use(express.static("public"));
let usersRouter = require("./users-router");
app.use("/users", usersRouter);
let productsRouter = require("./products-router");
app.use("/products", productsRouter);

app.get('/', function(req, res) {
	
	mongoose.connection.db.collection("config").findOne({id:"mainpage"}, function(err, result){
		if(err){
			res.status(500).send("Error reading main page config.");
			return;
		}
		console.log("Result: ")
		console.log(result);
		res.render('pages/index', result);
	});
});

app.post("/login", function(req, res, next){
	if(req.session.loggedin){
		res.redirect("/");
		return;
	}
	
	let username = req.body.username;
	let password = req.body.password;
	mongoose.connection.db.collection("users").findOne({username: username, password: password}, function(err, result){
		if(err)throw err;
		
		console.log(result);
		
		if(result){
			req.session.loggedin = true;
			req.session.username = username;
			console.log("Username: " + username);
			console.log(result);
			res.redirect("/");
		}else{
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
	app.listen(3000);
	console.log("Server listening on port 3000");
});
	
