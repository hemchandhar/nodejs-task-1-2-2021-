const db = require("../../models/db");
const { v4: uuidv4 } = require("uuid");

//CREATE Operation
module.exports.postAttendance = (req, res) => {
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
        res.render("toast", {
          message: "Error in Recording your Response! Please try again",
          buttonName: "Back",
          link: "/",
        });
      } else {
        res.render("toast", {
          message: "Your Response is Recorded",
          buttonName: "Back",
          link: "/",
        });
      }
    }
  );
};

//READ Operation
module.exports.getAdmin = (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.render("admin", { userData: data });
  });
};

module.exports.getUsers = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM user WHERE id=?";
  db.query(sql, [id], function (err, data) {
    if (err) throw err;
    res.render("editUsers", { userData: data });
  });
};

//UPDATE Operation
module.exports.postUsers = (req, res) => {
  const { name, date, attendance } = req.body;
  const id = req.params.id;
  const sql = "UPDATE user SET name=?,date=?,attendance=? WHERE id=?";
  console.log(id);
  db.query(sql, [name, date, attendance, id], function (err, data) {
    if (err) {
      console.log(err);
      res.render("toast", {
        message: "Error in Updating your Response! Please try again",
        buttonName: "Back to Admin",
        link: "/admin",
      });
    } else {
      console.log("Values Successfully Updated");
      res.render("toast", {
        message: "Your Response is Recorded",
        buttonName: "Back to Admin",
        link: "/admin",
      });
    }
  });
};
