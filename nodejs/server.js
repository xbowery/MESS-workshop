const express = require("express");
const mongoose = require("mongoose");
const employees = require("./model");
const router = express.Router();

const app = express();
app.use("/", router);

const port = 4000;

var uri = "mongodb://localhost:27017/helloworld"

// Connecting to database
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB connection successful")
})

// Sanity check purposes
app.listen(port, function() {
    console.log("Server is running on Port: " + port)
})

// Creating an endpoint to post data
router.route("/insertdata").post(function(req, res) {
    employees.insertMany(data, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Initialising the data
var data = [
    {
        name: "John",
        id: 1,
        age: 20,
        location: "Singapore"
    },
    {
        name: "Lisa",
        id: 2
    }
]
