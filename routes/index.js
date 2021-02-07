const express = require("express");
const router = express.Router();

const crudController = require("./controllers/crud");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/", crudController.createAttendance);

module.exports = router;
