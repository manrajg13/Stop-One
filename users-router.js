const express = require('express');
const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;
let router = express.Router();

router.get("/", signedIn);
router.post("/", createNewUser);

router.get("/:uid", readUser);
router.delete("/:uid", deleteUser);

function createNewUser(req, res, next){
	let user = {};
	
	user.username = req.body.username;
	user.email = req.body.email;
	user.password = req.body.password;
	user.signedIn = true;
	
	mongoose.connection.db.collection("users").insertOne(user, function(err, result){
		if(err){
			res.status(500).send("Error saving to database.");
			return;
		}
		let newID = result.insertedId;
		
		//Redirect to the view page for the new product
		res.redirect("http://localhost:3000/users/" + newID);
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
}	

function signedIn(req, res, next){
	console.log("bitch:" + __dirname);
	res.sendFile(path.join(__dirname, '/public/index2.html'));
}	

//Export the router so it can be mounted in the main app
module.exports = router;