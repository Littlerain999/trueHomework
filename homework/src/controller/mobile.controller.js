const Mobile = require("../model/mobile.model");

const dataAdd = async (req, res, next) => {
    try {

        const data = req.body;
        const mobile = Mobile.create(data);
        console.log("Data entered successdully", mobile);

    } catch(err) {
        console.error("ERROR in file 'mobile.controller.js':", err);
    }
}



module.exports = {
    dataAdd
}