var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config ={
	user: 'ask4mohitdrocker',
	database: 'ask4mohitdrocker',
	host: 'db.imad.hasura-app.io', 
	port: '5432', 
	password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);

function createTemplate(data){
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;
	
	var htmlTemplate = `
	<html>
	<head>
	    <link href=ui/style.css rel="stylesheet"/>
	        <title>
	         ${title}
	        </title>
	    </head>
	    <body>
	        <div>
	      <a href="/">Home</a>
	    </div>
	    <hr/>
	    <h3>
	        ${heading}
	    </h3>
	    <div>
	        ${date.toDateString()}
	    </div>
	    <div>
	    <p>
	         ${content}
	    </p>
	    </div>
	    </body>
	</html>
	`;
	return htmlTemplate;
}

var counter=0;
app.get('/counter', function (req, res) {
	counter+=1;
  res.send(counter.toString());
});

// we have put the code of names here since article was executing first
 var names= [];
 app.get('/submit-name', function (req, res) { //url: submit-name?query regarding name
   var name = req.query.name; //also provided by xpress framework
   names.push(name);
   //JSON 
   res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/test-db',function(req,res)
{
	//make a query
		//return a response
	pool.query('select * from test',function(err,result) 
    { 
		if(err)
        {
			res.status(500).send(err.toString());
		}
		else
        {
			res.send(JSON.stringify(result.rows)); 
		}
	});

});

app.get('/articles/:articleName', function (req, res){
 //aticleName == article-one
 //(articles[articleName]) == thw {} object of article one
 
/*to prevent sql injection as a user can do /articles/'; delete from articl where 'a'='a or any query like that we use libary funtion to use parameter inside the query
old code:  pool.query("select * from article where title='"+req.params.articleName+"'", function(err,result){  we pass parameter as an array as asecond argument */

 pool.query("select * from article where title=$1",[req.params.articleName], function(err,result){
 	if(err){
 		res.status(500).send(err.toString());
 	}
 	else{
 		if(result.rows.length === 0){
 			res.status(404).send('article not found');
 		}
 		else{
 		    var articleData=result.rows[0];	
 		    res.send(createTemplate(articleData)) ; 
 		}
 	}
 });
 });
 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});