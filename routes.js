const request = require("request");
const http = require("http");
// secret token: 2maFEvROHauMTFVKD9GWQhghZ_cu3V5SryHR
const mysql = require("mysql");
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser"); // express parser for body data

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3306;

app.set('views', path.join(__dirname, 'main'));
// app.set('view engine', 'jade');

// data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'main')));

app.use('/', function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "expressAPIfireball"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

// define routes 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/main.html"));
});

app.get("/api", function(req, res) {
    request("https://ssd-api.jpl.nasa.gov/fireball.api", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //res.send(res);   
        res.json(response);
        //console.log(JSON.stringify(res, null, ' '));
        res.end(); 
        };   
    });
});

app.route('/api/json') 
    .get(function(req, res) {
        request({
            url: "https://ssd-api.jpl.nasa.gov/fireball.api",
            type: "GET",
            data: {
                "$limit": 5000,
                "$$app_token": 'Iuetg2FmNYDcjonMcxRWDYsBS'
            }
        }, function(err, res, body) {
                // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            if (!error && response.statusCode == 200) {
                res.send(body);   
                res.json(body);
                alert('Retrieved ' + body.length + ' records from the dataset!');
                console.log(JSON.stringify(body, null, ' '));
                // res.end(); // end request when done
            }
        });
    });

// get reports from NASA 
app.route('/api/reports') 
    .get(function(req, res) {
        request({
            url: "https://data.nasa.gov/resource/2af2-m89m.json",
            type: "GET",
        }, function(err, res, body) {
            if (!error && response.statusCode == 200) {
                res.json(body);
                alert('Retrieved ' + body.length + ' records from the dataset!');
                console.log(JSON.stringify(body, null, ' '));
                // res.end(); // end request when done
            }
        });
    });


// get routes to mysql! 1st attempt 
app.get('/api/mysql', function(req, res) {
    connection.query('SELECT * FROM fireballCSV LIMIT 25', function(error, results) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
            console.log('results!');
            //res.json({ message: 'hooray! welcome to my first mysql database api!' });
            //res.end(); // end request when done
        }
    });
});

app.get('/api/:params', function(req, res) {
    var sql = 'SELECT peakBrightness, totalRadEngyJ, velocityKMS FROM fireballCSV LIMIT 25';
    var data = [req.body];

    console.log(data);  // bodyParser helps here 
    let brighness = data[0].date_time_peak_brightness_ut;
    let velocity = data[0].total_radiated_energy_j;
    let dateTime = data[0].velocity_km_s;

    connection.query(sql, data, function(error, rows, fields) {  
        if (error) {
            console.log(error);
        } else {
            res.statusCode = 500;
            return res.json({
            errors: ['Failed to upload data']
      })
            res.redirect('/api/params');
    };
  });
});


// =============================================================
app.listen(PORT, function() {
  console.log("Magic is happening while our server is listening http://localhost:" + PORT);
});
