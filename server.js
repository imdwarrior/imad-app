var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


 var articles = {
	 'article-one' : {
		title	 :  'Article One | Mohit' ,
		date	 : 'Feb 17, 2018' , 
		heading	:  'Article One',
		content	 : `<p>
		                    This is the content for Article one This is the ontent for Article one This is the ontent for Article one This is the ontent for Article one
		                    This is the content for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article one
		                    
		                </p>
		            <p>
		                    This is the content for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article one
		            </p>`, 
		},

	 'article-two' : {
			title	 :  'Article Two | Mohit' ,
			date	 : 'Feb 18, 2018' , 
			heading	:  'Article Two',
			content	 : `<p>
			                    This is the content for Second Article
			            </p>`, 
		},

	 'article-three': {
			title	 :  'Article Three | Mohit' ,
			date	 : 'Feb 18, 2018' , 
			heading	:  'Article Three',
			content	 : `<p>
			                    This is the content for Third Article
			            </p>`, 
		},

};


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
	        ${date}
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// we have put the code of names here since article was executing first
var names= [];
app.get('/submit-name', function (req, res) { //url: submit-name?query regarding name to do so we use query instead or params 
   
   var name = req.query.name //also provided by xpress framework
  
   names.push(name);
   //JSON 
   res.send(JSON.stringiFy(names));
});


app.get('/:articleName', function (req, res){
 //aticleName == article-one
 //(articles[articleName]) == thw {} object of article one
 var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName])); 
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
