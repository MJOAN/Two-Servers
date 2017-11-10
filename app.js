var http = require("http");
var express = require("express");
var path = require('path');
var api = require('/api');
var mysql = require("mysql");
var bodyParser = require("body-parser"); // express parser for body data

var app = express();
var router = express.Router();

var db = require('/db.js'); // our database connection file

const PORT = process.env.PORT || 8080;

// configure app // jade is express default view engine aka part of MVC 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use middleware
app.use(router);
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));



// define routes ----  with .get we render index.jade and send to browser 
router.get('/', function(req, res) {
    res.send('Welcome to the NASA Fireball API Page!');
    res.json({ message: 'hooray! welcome to my first api!' });
    res.end(); // end request when done
});


router.route('./api/') // api call to NASA fireball API
    .get(function(req, res) {
        request({
            url: "https://data.nasa.gov/resource/2af2-m89m.json",
            type: "GET",
            data: {
                "$limit": 5000,
                "$$app_token": 'DZ9KAMGqWgIE5bEl3tgNmARhVQud44sivoEos3wM'
            }
        }, function(err, res, body) {
            if (!error && response.statusCode == 200) {
                res.json(body);

                alert('Retrieved ' + body.length + ' records from the dataset!');
                console.log(body);
                res.end(); // end request when done
            }
        });
    });


// with .put we can add/update response data through using specific params
router.put('/api/:param', function(req, res) {
    res.send('Got a PUT request for new params')
});


// mysql query for API 1st attempt
router.post('/', function(req, res) {
  var sql = 'SELECT * FROM expressAPIfireball';
  // Retrieve the data to insert from the POST body
  var data = [
    req.body.signature
  ];
  
  db.query(sql, data, function(err, result) {
    if (err) {
      // We shield our clients from internal errors, but log them
      console.error(err);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to upload data']
      });
    }


app.listen(8080, function() { // use app.listen || server.listen
    console.log("Magic is happening while our server listens on: http://localhost:" + PORT);
})

// export modules for router, app and database
module.exports = router;
module.exports = app;
module.exports = db;