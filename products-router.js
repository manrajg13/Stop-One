const express = require('express');
const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;
const bodyParser = require('body-parser')
const cors = require("cors")
let corsOptions = {
	origin: "http://localhost:4200/products"
};
let router = express.Router();

router.get("/", listProducts);
router.post("/", createNewProduct);

router.get("/:_id", readProduct);

function listProducts(req, res, next){
	
	mongoose.connection.db.collection("products").find({}).toArray(function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		console.log(result);
		res.send(result);
	});
}

function createNewProduct(req, res, next){
	
	let product = {name: req.body.name, price: Number(req.body.price), description: req.body.description};
	
	mongoose.connection.db.collection("products").insertOne(product, function(err, result){
		if(err){
			res.status(500).send("Error saving to database.");
			return;
		}
		
		if(result){
			console.log("Product: " + product.name);
			res.status(200);
		}
		
	});
}

function readProduct(req, res, next){
	let id = req.params._id;
	let oid = new ObjectID(id);;

	console.log("read: " + id);
	mongoose.connection.db.collection("products").findOne({"_id": oid}, function(err, result){
		console.log("Result: " + result.name);
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		res.send(result);
	});
}

//Export the router so it can be mounted in the main app
module.exports = router;