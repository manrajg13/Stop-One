const express = require('express');
const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;
const bodyParser = require('body-parser')
const cors = require("cors")
let corsOptions = {
	origin: "http://localhost:4200"
};
let router = express.Router();

router.get("/", listProducts);
router.post("/", createNewProduct);

router.get("/:pid", readProduct);

function listProducts(req, res, next){
	
	mongoose.connection.db.collection("products").find({}).toArray(function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		console.log(result);
		res.status(200);
	});
}

function createNewProduct(req, res, next){
	let product = {};
	
	product.name = req.body.name;
	product.price = Number(req.body.price);
	product.stock = Number(req.body.stock);
	product.hidden = false;
	product.comments = "";
	
	mongoose.connection.db.collection("products").insertOne(product, function(err, result){
		if(err){
			res.status(500).send("Error saving to database.");
			return;
		}
		let newID = result.insertedId;
		
		//Redirect to the view page for the new product
		res.redirect("http://localhost:3000/products/" + newID);
	});
}

function readProduct(req, res, next){
	let id = req.params.pid;	
	let oid;

	try{
		oid = new ObjectID(id);
	}catch{
		res.status(404).send("That ID does not exist.");
		return;
	}
	console.log("read: " + id);
	mongoose.connection.db.collection("products").findOne({"_id": oid}, function(err, result){
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
		if(!result){
			res.status(404).send("That ID does not exist in the database.");
			return;
		}
		res.status(200).render("product", {product: result});
	});
}

//Export the router so it can be mounted in the main app
module.exports = router;