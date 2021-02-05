var createError = require("http-errors");

//Express
var express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");

var app = express();

const mySql = require("mysql");
const { success, error } = require("consola");

//Database connection creation
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "users",
});

db.connect((err) => {
  if (err) {
    error({ message: `UNABLE TO CONNECT TO DATABASE ${err}`, badge: true });
  } else {
    success({ message: `MYSQL DATABASE CONNECTED`, badge: true });
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
