const db = require("../../models/db");

module.exports.createAttendance = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.date);
  const sql = "INSERT INTO user (name, date) VALUES (?,?)";
  db.query(sql, [req.body.name, req.body.date], function (err, data) {
    if (err) {
      console.log(err);
      res.render("toast", {
        message: "Error in Recording your Response! Please try again",
      });
    } else {
      console.log("Successfully Created");
      res.render("toast", { message: "Your Response is Recorded" });
    }
  });
};

module.exports.getAdmin = (req, res) => {
  var sql = "SELECT * FROM user";
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.render("admin", { userData: data });
  });
};
