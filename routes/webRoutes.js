const express = require("express");

const router = express.Router();
const webController = require("../controllers/webController");

router.route("/").get(webController.defaultResponse);

module.exports = router;
