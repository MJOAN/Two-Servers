var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
  	console.log("this root route works!")
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("*", function(req, res) {
  	console.log("this catch all route * works!")
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });


};
