const express = require('express');
const app = express();
const newsRouter = require('./src/Routes/newsRouter.js');
const port = process.env.PORT || 5656;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:Password123%23@ds133762.mlab.com:33762/elamongodb';
var db;


MongoClient.connect(url, function(err, client) {
	if (err) throw err;
	db = client.db('elamongodb');
	app.listen(port, () => {
		console.log(`Listening at http://localhost:${port}`);
	});
});


app.use('/api/news', newsRouter);


app.get('/api/us',(req,res) => {
  var query = { country: "US" };
  db.collection('news').find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    res.send(result);    
  });	
});

app.get('/api/europe',(req,res) => {
  var query = { country: "Europe" };
  db.collection('news').find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    res.send(result);    
  });	
});
app.get('/api/middleeast',(req,res) => {
  var query = { country: "MiddleEast" };
  db.collection('news').find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    res.send(result);    
  });	
});
app.get('/api/asia',(req,res) => {
  var query = { country: "Asia" };
  db.collection('news').find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    res.send(result);    
  });	
});


// app.listen(port, () => {
// 	console.log(`http://localhost:${port}`);
// });


