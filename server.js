const express = require('express');
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const bodyParser = require('body-parser')
const cors = require("cors")
let corsOptions = {
	origin: "http://localhost:4200"
};

const uri = 'mongodb+srv://username:password1234@cluster0.6s9149c.mongodb.net/?retryWrites=true&w=majority';
let db;
let status = {stat: 0};
let data;

app.use(cors(corsOptions));
app.use(bodyParser.json());
//Use body parser for form data
app.use(express.urlencoded({extended: true}));

//Serve static files from public (for the add page)
app.use(express.static("public"));
let usersRouter = require("./users-router");
app.use("/users", usersRouter);
let productsRouter = require("./products-router");
app.use("/products", productsRouter);

app.post("/signin", function(req, res, next){
	let data = {username: req.body.username, password: req.body.password};
	
	mongoose.connection.db.collection("users").findOne({"username": data.username, "password": data.password}, function(err, result){
		if(err)throw err;

		if(result){
			console.log("Username: " + data.username);
			res.status(200);
		}
		else{
			res.status(401).send("Not authorized. Invalid username or password.");
			return;
		}
	});
});

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/stop-one/index.html'));
});

mongoose.connect(uri, {useNewUrlParser: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	app.listen(3000);
	console.log("Server listening on port 3000");
});
	
