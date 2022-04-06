const express = require("express");

const router = express.Router();
const apiController = require("./../controllers/apiController");

router
  .route("/")
  .get(apiController.defaultResponse)
  .post(apiController.defaultResponse)
  .delete(apiController.defaultResponse)
  .patch(apiController.defaultResponse);

router
  .route("/pubsubTopic/:id?/:x?/:y?")
  .get(apiController.defaultResponse)
  .delete(apiController.defaultResponse)
  .patch(apiController.defaultResponse);

module.exports = router;
