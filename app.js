const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/airbnb", function (req, res) {
    res.send("hello");
})
app.listen(3000);