
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "expressAPIfireball"
});


/*const connection = mysql.createConnection({
  host: "localhost" || "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "root" || "o5dll7sz3c8u8p43",
  password: "" || "mk9we0ov4eol9d77",
  database: "expressAPIfireball" || "kem691jk4ty7omy4"
});
*/
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});




module.exports = connection;



