// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const Twitter = require("twitter");
const connection = require("./connection");

const app = express();

const PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

