/*var mysql = require("mysql");

var connection = mysql.createConnection({
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

// var routes = require('/routes');
// var server = require('/server.js'); // our database connection file

// use middleware
// app.use(router); // using our router express()
// app.use('/'); 
// configure app // jade is express default view engine aka part of MVC 
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// use middleware
app.use(router); // using our router express()
app.use('/'); // using our express routes.js file in path

app.use(express.static(path.join(__dirname, 'main')));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

// export modules for router, app and database
module.exports = router;
module.exports = app;
// module.exports = server;


/*req.open("GET", url, true) 
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (!error && response.statusCode == 200) {
      res.send(body);   
      res.json(body);
      alert('Retrieved ' + body.length + ' records from the dataset!');
      console.log(JSON.stringify(body, null, ' '));
      // res.end(); // end request when done*/

// });

