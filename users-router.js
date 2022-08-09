const express = require('express');
const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;
const bodyParser = require('body-parser')
const cors = require("cors")
let corsOptions = {
	origin: "http://localhost:4200"
};
let router = express.Router();
router.use(cors(corsOptions));
router.use(bodyParser.json());

router.post("/", createNewUser);

router.get("/:uid", readUser);

function createNewUser(req, res, next){
	
	let user = {username: req.body.username, password: req.body.password, email: req.body.email};

	mongoose.connection.db.collection("users").insertOne(user, function(err, result){
		if(err){
			res.status(500).send("Error saving to database.");
			return;
		}
		if(result){
			console.log("Username: " + user.username);
			res.status(200);
		}
	});
}

function readUser(req, res, next){
	let id = req.params.uid;	
	let oid;

	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	console.log("id: " + id);
	mongoose.connection.db.collection("users").findOne({"_id": oid}, function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		res.status(200).render("user", {user: result});
	});
}

/*
function deleteUser(req, res, next){
	let id = req.params.uid;
	let oid;
	console.log("deleting: " + id);
	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	
	mongoose.connection.db.collection("users").deleteOne({"_id": oid}, function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		res.status(200).render("user", {user: result});
	});
}*/	

//Export the router so it can be mounted in the main app
module.exports = router;