
var http = require("http");
var express = require("express");
var path = require('path');
var mysql = require("mysql");
var bodyParser = require("body-parser")
var router = express.Router();

var app = express();
var PORT = 8080;

// configure app
// user middleware
// define routes at least 1 route with app object

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser());


// define routes

app.use(require('./todos'));
// app.use('/api', require('api'));




var todoItems = [
			{ id: 1, desc: 'foo' },
			{ id: 2, desc: 'bar' },
			{ id: 3, desc: 'baz' }
	];

router.get('/', function(req, res) {
	// load data from DB here could also use res.send()
	res.render("index", {
		title: 'My App",
		items: todoItems
	});
});

router.post('/add', function(req, res){
	var newItem = req.body.newItem;

	todoItems.push({
		id: todoItems.length + 1, 
		desc: newItem
	});
	res.redirect('/');
})




app.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	console.log(newItem);
});


app.listen(8080, function() {   // verses ---> server.listen
  console.log("Server listening on: http://localhost:" + PORT);
})

// patterns can be strings or regestrings can contain param placeholders
/* 

app.get('/api/user', function(req, res) {
	var userId = =req.params.id;
	// load user and return JSON
})

app.get(/^\/api\/history\/(\d{4})$/, function(req, res) {
	var year = parseInt(req.params[0])
	// load user and return JSON
})

*/


module.exports = router;