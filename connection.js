
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost" || "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "root" || "o5dll7sz3c8u8p43",
  password: "" || "mk9we0ov4eol9d77",
  database: "expressAPIfireball" || "kem691jk4ty7omy4"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful using id: " + connection.threadId);
});

module.exports = connection;



