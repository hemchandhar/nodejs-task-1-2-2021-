require("dotenv").config();

module.exports = {
  PORT: process.env.APP_PORT,
  DBPASSWORD: process.env.APP_DB_PASSWORD,
};
