const mySql = require("mysql2");
const { success, error } = require("consola");
const { DBPASSWORD } = require("../config/dotenv");

//Database connection creation
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: DBPASSWORD,
  database: "users",
});

try {
  db.connect((err) => {
    if (err) {
      throw err;
    } else {
      success({ message: `MYSQL DATABASE CONNECTED`, badge: true });
    }
  });
} catch (err) {
  error({ message: `UNABLE TO CONNECT TO DATABASE ${err}`, badge: true });
}

module.exports = db;
