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

//HandleCors middleware
 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.get('/news/:country',(req,res) => {
  console.log(req.params.country);
    var query = { country: "US" };
    switch(req.params.country) {
        case "au":
          query.country = "AU";      
          break;
        case "gb":
          query.country = "GB";
          break;
        case "jp":
          query.country = "JP";
          break;
        case "fr":
          query.country = "FR";
          break;
        case "cn":
          query.country = "CN";
          break;
    }
    console.log(query);

      db.collection('worldnews').find(query).toArray(function(err,result){
              if (err) throw err;
              res.send(result);    
      }); 
});

app.get('/', (req,res) => {
  db.collection('worldnews').find({}).toArray(function(err,result){
      if (err) throw err;
            res.send(result);    
      }); 
});

app.get('/news', (req,res) => {
  db.collection('worldnews').find({}).toArray(function(err,result){
      if (err) throw err;
            res.send(result);    
      }); 
});






