
const mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "expressAPIfireball"
  },

  // jawsDB
  jawsDB: {
    port: 3306,
    host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o5dll7sz3c8u8p43",
    password: "mk9we0ov4eol9d77",
    database: "kem691jk4ty7omy4"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
