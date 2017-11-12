const http = require("http");
const express = require("express");
const path = require('path');
const mysql = require("mysql");
const bodyParser = require("body-parser"); // express parser for body data

var api = require('/api');
var routes = require('/routes.js');
var server = require('/server.js'); // our database connection file

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;

// configure app // jade is express default view engine aka part of MVC 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use middleware
app.use(router); // using our router express()
app.use('/', apps); // using our app.js file in path

app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

// define routes ----  with .get we render index.jade and send to browser 
router.get('/', function(req, res) {
    res.send('Welcome to the NASA Fireball API Page!');
    res.json({ message: 'hooray! welcome to my first api!' });
    res.end(); // end request when done
});

// api call to NASA fireball API
router.route('./api/') 
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


// get routes to sql! 
router.get('/api', function(req, res) {
    connection.query('SELECT * FROM expressAPIfireball', function(err, data) {
        if (err) throw err;
        res.send(data);
    })
})


// mysql query for API 1st attempt
router.post('/', function(req, res) {
    var sql = 'SELECT * FROM expressAPIfireball';
    // Retrieve the data to insert from the POST body
    var data = [
        req.body.signature
    ];

    console.log(req.body);
    let brighness = req.body.signature[0];
    let velocity = req.body.signature[0];
    let dateTime = req.body.signature[0];

    server.query(sql, data, function(err, res) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        return res.json({
        errors: ['Failed to upload data']
      })
        res.redirect('/');
    };
  
// with .put we can add/update response data through using specific params
router.put('/api/:param', function(req, res) {
    res.send('Got a PUT request for new params')
});


app.listen(process.env.PORT || 8080, function() { // use app.listen || server.listen
    process.env.PORT === undefined ? 
    console.log('Magic is not happening and server is not listening') : 
    console.log("Magic is happening while our server is listening: http://localhost:" + 
        process.env.PORT);
})

// export modules for router, app and database
module.exports = router;
module.exports = app;
module.exports = server;

