const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const path = require("path");
const mongoose = require('mongoose');


const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'roompage/build')));


var chunks = [];

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
    const homeSchema = new mongoose.Schema({
        id: Number,
        url: String,
        deeplink: String,
        position: Number,
        name: String,
        bathrooms: Number,
        bedrooms: Number,
        beds: Number,
        city: String,
        neighborhood: String,
        images: [String],
        hostThumbnail: String,
        isSuperhost: Boolean,
        rareFind: Boolean,
        lat: Number,
        lng: Number,
        persons: Number,
        reviewsCount: Number,
        rating: Number,
        type: String,
        userId: Number,
        address: String,
        amenityIds: [Number],
        previewAmenities: [String],
        cancelPolicy: String,
        price: {
            rate: Number,
            currency: String,
            total: Number,
            priceItems: [{
                title: String,
                amount: Number
            }]
        }

    });
    const Home = mongoose.model('home', homeSchema);
    Home.find()
        .then((homes) => {
            chunks = homes;
        })
        .catch((error) => {
            console.error('Error retrieving homes', error);
        });
    Home.deleteMany();
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// var chunks = [];
// const options = {
//     method: 'GET',
//     hostname: 'airbnb13.p.rapidapi.com',
//     port: null,
//     path: '/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
//     headers: {
//         'X-RapidAPI-Key': 'c256ca2210msh945cf0642396574p1cdd29jsnad9d1a23d45c',
//         'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//     }
// };


// const req = https.request(options, function (res) {
//     res.on('data', function (chunk) {
//         chunks.push(chunk);
//     });

//     res.on('end', function () {
//         const body = Buffer.concat(chunks);
//         const data = JSON.parse(body);
//         // console.log(data.results[0].images[2]);
//         chunks = data.results;

//         // res.send(body);
//     });
// });

// req.end();

//send data at http://localhost:3000
app.get("/airbnb/data", function (req, res) {
    res.json(chunks);
})

//route for airbnb is set at http://localhost:3000/airbnb
app.route("/airbnb").get(function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// app.get("/homepage/", function (req, res) {
//     console.log(chunks[0]);
//     res.render("homepage", { result: chunks[0] });

// });
var id = 688884912481539032;
app.route("/rooms/:roomId").get(function (req, res) {
    id = req.params.roomId;
    res.sendFile(path.join(__dirname, 'roompage/build/index.html'));

}).post(function (req, res) {
    console.log("got some data");
});
app.get("/room/data", function (req, res) {
    const item = chunks.filter((item) => {
        return (item.id == id)
    })
    res.json(item[0]);
});
app.listen(3000, () => console.log("listening at port 3000"));