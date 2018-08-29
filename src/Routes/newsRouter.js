const express = require('express');
const newsRouter = express.Router();
const News = require('../models/newsModel');

function getNews() {
	var MongoClient = require('mongodb').MongoClient;
	let response;
	MongoClient.connect('mongodb://admin:Password123%23@ds133762.mlab.com:33762/elamongodb', function(err, client) {		
		if (err) {
			console.log("Error connecting to the Database " + err);
			throw err
		}

		var db = client.db('elamongodb');
		db.collection('news').find().toArray(function(err,result) {
			if (err) throw err;
			console.log(result);
			response = result;
			
		})
	});
	return response;
}

newsRouter
	.get('/usnews',(req,res) => {
		let allnews = getNews();
		console.log("all news are"  + allnews);
		res.send(allnews);


		// console.log(News);
		// News.find({},(err,news) => {
		// 	if(err) {
		// 		console.log("got error" + err);
		// 	} else {
		// 		console.log(news);	
		// 	}
			
		// 	res.json({dummy:'dummy'});
		// })
		// res.json({data1: 'data1'});
	})
	.get('/europenews',(req,res) => {
		res.json({data2: 'data2'});
	});

 module.exports = newsRouter;	


