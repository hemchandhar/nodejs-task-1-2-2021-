const db = require("../../models/db");
const { v4: uuidv4 } = require("uuid");

//CREATE operation
module.exports.postAttendance = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.date);
  console.log(req.body.customRadio1);
  console.log(req.body.customRadio2);
  // if (req.body.customRadio1 == "on") {
  //   const attendance = "Present";
  // } else {
  //   const attendance = "Absent";
  // }
  const sql = "INSERT INTO user (id,name, date,attendance) VALUES (?,?,?,?)";
  db.query(
    sql,
    [
      uuidv4(),
      req.body.name,
      req.body.date,
      req.body.customRadio1 == "on" ? "Present" : "Absent",
    ],
    function (err, data) {
      if (err) {
        console.log(err);
        res.render("toast", {
          message: "Error in Recording your Response! Please try again",
        });
      } else {
        console.log("Successfully Created");
        res.render("toast", { message: "Your Response is Recorded" });
      }
    }
  );
};

module.exports.getAdmin = (req, res) => {
  var sql = "SELECT * FROM user";
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.render("admin", { userData: data });
  });
};
