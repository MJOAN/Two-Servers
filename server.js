const express = require("express");
const bodyParser = require("body-parser");
const Twitter = require("twitter");
const connection = require("./connection");

const app = express();
const PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

console.log("this server.js runs");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

