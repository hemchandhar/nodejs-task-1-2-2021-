const express = require("express");
const router = express.Router();

const crudController = require("./controllers/crud");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/", crudController.postAttendance);

router.get("/admin", crudController.getAdmin);

router.get("/users/edit/:id", crudController.getUsers);

router.post("/user/update/:id", crudController.postUsers);

module.exports = router;
