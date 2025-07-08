const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    OS: { type: String, required: true },
    price: { type: Number, required: true }
})

const Mobile = mongoose.model("mobile", mobileSchema);

module.exports = Mobile