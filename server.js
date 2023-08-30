require('dotenv').config();
const express = require("express");

const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const path = require("path");
const mongoose = require('mongoose');
const request = require('request');
const defaultData = require("./homes");

const Bschema =  require('./schema/bookingSchema.js');

const app = express();
// const bcrypt = require('bcrypt');
// const { Hash } = require("crypto");
// const { encode } = require("punycode");
// const saltRounds = 3;



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'roompage/build')));


//will send default homes data when requested at route /airbnb/data
var homes = defaultData;
app.get("/airbnb/data", function (req, res) {
    res.json(homes);
})
// app.get("/", function (req, res){
//     res.redirect("/airbnb");
// });
//route for airbnb is set at http://localhost:3000/airbnb
app.route("/airbnb","/").get(function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})
    .post(async function (req, res) {
        var cityName = req.body.cityName;
        var checkin = req.body.checkin;
        var checkout = req.body.checkout;


        // console.log(req.body);
        const pathapi = '/search-location?location=' + encodeURIComponent(cityName) + '&checkin=' + encodeURIComponent(checkin) + '&checkout=' + encodeURIComponent(checkout) + '&adults=1&children=0&infants=0&pets=0&page=1&currency=INR';
        // console.log(pathapi);
        // console.log(encodeURIComponent(pathapi));
        const options = {
            method: 'GET',
            hostname: 'airbnb13.p.rapidapi.com',
            port: null,
            path: pathapi,
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
                'X-RapidAPI-Host': process.env.RAPIDAPIHOST
            }
        };


        const request = await https.request(options, function (response) {
            const chunks = [];
            response.on('data', function (chunk) {
                chunks.push(chunk);
            });
            response.on('end', function () {
                const body = Buffer.concat(chunks);
                const data = JSON.parse(body);
                homes = data.results;
                
                // console.log(body);
                // console.log(data);
                // console.log(data.results[0].images[2]);
                // console.log(homes);
                // res.send(body);
            });
        });

        request.end();
        res.redirect("/airbnb");



        // console.log("printing homes")
        // console.log(homes);
        // console.log({ cityName, checkin, checkout });
    });

// app.get("/homepage/", function (req, res) {
//     console.log(chunks[0]);
//     res.render("homepage", { result: chunks[0] });

// });
var id = homes[0].id;
app.route("/rooms/:roomId").get(function (req, res) {
    id = req.params.roomId;
    res.sendFile(path.join(__dirname, 'roompage/build/index.html'));

}).post(function (req, res) {
    console.log("got some data");
});
app.get("/room/data", function (req, res) {
    const item = homes.filter((item) => {
        return (item.id == id)
    })
    res.json(item[0]); //item is array so sending only object of array of length 1 [{obj}]
});
app.route("/bookingdata").post(async function (req, res) {
    try {
        await mongoose.connect('mongodb+srv://'+ encodeURIComponent(process.env.MONGOSSEADMIN) +':'+ encodeURIComponent(process.env.MONGOSSEPASSWORD) +'@cluster0.uwpvb2c.mongodb.net/airbnbbookingdata', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        const Bookdata =  Bschema;

        const booking = new Bookdata({
            numberOfGuests: req.body.guest,
            checkin: req.body.checkin,
            checkout: req.body.checkout,
            guestName: 'krishna',
            guestEmail: 'krishna@rama.com',
            bookingStatus: 'pending',
            hostid: id,
            hostname: 'Ramakrishnan',
            totalAmount: 500, // Assuming the total booking cost is $500
            paymentMethod: 'credit card',
            specialRequests: 'Late check-in required'
            // createdAt: new Date('2023-07-24T12:00:00Z'),
            // updatedAt: new Date('2023-07-24T15:30:00Z')
        });
        await booking.save();
        // console.log(req);
        console.log("Data saved successfully");
        // console.log(req.body.guest);
        res.send("done");
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("An error occurred while saving the data.");
    }



    // console.log("getting data");
    // console.log(req.body.guest);
    // res.send("done");
    // res.redirect("/airbnb");
});
app.listen(3000, () => console.log("listening at port 3000"));