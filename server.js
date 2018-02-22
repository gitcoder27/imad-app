var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
	title : 'Article one | Ayan Saha',
	heading : 'Article one',
	date : 'Feb 5, 2018',
	content : `
	 <p>yo, this is testing. This is the first article hosted on article one html page</p>
	            <p>this is the first article hosted on article one html page</p>
	            <p>this is the first article hosted on article one html page</p>
	            <p>this is the first article hosted on article one html page</p>`
	        },
'article-two' : {
		title : 'Article 2 | Ayan Saha',
	heading : 'Article two',
	date : 'Feb 29, 2018',
	content : `
	 			<p>This is testing. This is the first article hosted on article one html page</p>
	            <p>this is the first article hosted on article one html page</p>`
	            
	},

'article-three' : {
	title : 'Article 3 by ayan',
	heading : 'ARTICLE 3',
	date : '22 feb 2018',
	content : `
	<p>hey people</p>
	<p>this is the last page of my web app!!!!!</p>`
}
};

function createTemplate(data) {
	date = data.date;
	heading = data.heading;
	title = data.title;
	content = data.content;
	var htmltemplate =
	`<html>
    <head>
        <title>${title}</title>
       	<link href="ui/style.css" rel="stylesheet">
    </head>
    <body>
    	<div class="container">
	        <div>
	        <a href="/">Home</a>
	        </div>
	        <div>
	        <h4>${heading}</h4>
	        </div>
	        <div>
	            <h1>${date}</h1>
	        </div>
	        <div>
	            <h1>Hello everyone.</h1>
	        </div>
	        <div>
	            ${content}
	        </div>
	    </div>
    </body>
</html>`
return htmltemplate
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/:articleName', function (req, res) {
	var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
