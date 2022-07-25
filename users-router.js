const express = require('express');
const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;

let router = express.Router();

router.get("/", listUsers);
router.post("/", createNewUser);

router.get("/:uid", readUser);
router.post("/:uid", updateUser);
router.delete("/:uid", deleteUser);
router.put("/:uid", undoDelete);

function listUsers(req, res, next){
	console.log("/users GET request received.");
}

function createNewUser(req, res, next){
	let user = {};
	
	user.username = req.body.username;
	user.email = req.body.email;
	user.password = req.body.password;
	
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

function updateUser(req, res, next){
	let id = req.params.pid;	
	let oid;
	console.log("id: " + id);
	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	
	let product = {}
	
	product.name = req.body.name;
	product.price = Number(req.body.price);
	product.stock = Number(req.body.stock);
	product.comments = req.body.comments;
	product.hidden = req.body.hidden;
		
	mongoose.connection.db.collection("users").replaceOne({"_id": oid}, product, function(err, result){
		if(err){
			res.status(500).send("Error saving to database.");
			return;
		}
		console.log(result);
		//Redirect to the view page for the new product
		res.redirect("http://localhost:3000/users/" + id);
	});
}

function deleteUser(req, res, next){ 
	
	let id = req.params.pid;
	let oid;
	console.log("id: " + id);
	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	
	mongoose.connection.db.collection("users").findOne({"_id": oid}, function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		result.hidden = true;
		result.comments = req.body.comments;
				
		mongoose.connection.db.collection("users").replaceOne({"_id": oid}, result, function(err, result){
			if(err){
				res.status(500).send("Error saving to database.");
				return;
			}
		});
		
		console.log(result);
		res.status(200).send();
	});
}

function undoDelete(req, res, next){		
	let id = req.params.pid;
	let oid;
	console.log("id: " + id);
	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	
	mongoose.connection.db.collection("users").findOne({"_id": oid}, function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		
		result.hidden = false;
		result.comments = "";
		
		mongoose.connection.db.collection("users").replaceOne({"_id": oid}, result, function(err, result){
			if(err){
				res.status(500).send("Error saving to database.");
				return;
			}
		});
		
		console.log(result);
		res.status(200).send();
	});
}

//Export the router so it can be mounted in the main app
module.exports = router;