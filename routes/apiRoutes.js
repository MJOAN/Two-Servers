// secret token: 2maFEvROHauMTFVKD9GWQhghZ_cu3V5SryHR
const Twitter = require('twitter');
const request = require("request");
const path = require("path");
const express = require("express");
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


module.exports = function(app) {

    app.get("/api", function(req, res) {
        request("https://ssd-api.jpl.nasa.gov/fireball.api", function(error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.send(response);
            };
        });
    });

    app.get('/api/mysql', function(req, res) {
        connection.query('SELECT * FROM fireballCSV LIMIT 25', function(error, results) {
            if (error) {
                console.log(error);
            } else {
                res.json(results);
            }
        });
    });

    
    app.post("/api/mysql/email", function(req, res) {

        console.log(req.body.email);
        var email = req.body.email;

    connection.query("INSERT INTO emails (email) VALUES (?)", [req.body.email], function(error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            console.log("Email submitted and updated: " + result.affectedRows + " affectedRows");
            res.render("Your email: " + email + "has been successfully added to database!");
            };
        });
     });

    app.get("/api/twitter", function(req, res) {

        var Twitter = require('twitter');
        const client = new Twitter({
            consumer_key: 'qALburluBDwac42PXtE0oqwfC',
            consumer_secret: 'gTwvY4XfTRpwr5gf4M2aND4aJ4W5s5hAWLnHJwJC6sNo0S0YYJ',
            access_token_key: '919642726987001856-ZJPpygAuEQ0XmG7K2KG3lvfUmagbBIP',
            access_token_secret: 'cJDrDE8QtWS9DHAJxSK9FT86d7JgYzvXuhrvk4OSO1I9G'
        });

        var params = {
            screen_name: 'NASA',
            count: 15
        };

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.error('Twitter response/request error: ', error.message);
                return;

            } else {
                res.json(tweets)
            }
        });
    });  // end 

}; // end app
