//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index1.html")
})
app.post("/", function (req, res) {
    var weight = req.body.weight;
    var height = req.body.height;
    var bmi=weight/(height*height);

bmi=parseFloat(bmi).toFixed(2);
    res.send("Your BMI is "+bmi);
})
app.listen(3000, function () {
    console.log("server started on port 3000");
});