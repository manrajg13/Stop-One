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
let productsRouter = require("./products-router");
app.use("/products", productsRouter);
let usersRouter = require("./users-router");
app.use("/users", usersRouter);

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

mongoose.connect(uri, {useNewUrlParser: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	app.listen(3000);
	console.log("Server listening on port 3000");
});
	
