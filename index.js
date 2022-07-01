const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});




exports.helloWorld = functions.https.onRequest((app) );
