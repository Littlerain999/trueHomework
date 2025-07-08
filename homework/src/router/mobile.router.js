const router = (require("express")).Router();

const {
    dataAdd
} = require("../controller/mobile.controller");

router.post("/set-up-data", dataAdd);



module.exports=router;