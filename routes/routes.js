const router = require("express").Router();
const { book } = require("../controller/appController.js");

router.post("/user/book", book);


module.exports = router