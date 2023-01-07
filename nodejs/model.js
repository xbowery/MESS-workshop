// Model file
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating schema -> visit https://mongoosejs.com/docs/guide.html#schemas
let employee = new Schema(
    {
        name: {type: String, required: true},
        id: {type: Number, required: true},
        age: {type: Number},
        location: {type: String}
    },
    { collection: "Employees" }
);

module.exports = mongoose.model("employees", employee);