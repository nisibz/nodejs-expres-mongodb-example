const express = require("express");
const { getAllTest } = require("../controller/Test.controller");
const router = express.Router();

router.route("/test").get(getAllTest);

module.exports = {
  Test: router,
};
