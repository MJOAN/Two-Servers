// secret token: 2maFEvROHauMTFVKD9GWQhghZ_cu3V5SryHR
const Twitter = require('twitter');
const request = require("request");
const path = require("path");
const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "expressAPIfireball"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



module.exports = function(app) {

    app.get("/api", function(req, res) {
        request("https://ssd-api.jpl.nasa.gov/fireball.api", function(error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.send(response);
                //console.log(JSON.stringify(res, null, ' '));
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
            res.send("Your email: " + email + "has been successfully added to database!");
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
