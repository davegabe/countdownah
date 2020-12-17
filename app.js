var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var countdownRouter = require("./routes/countdown");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/bulma", express.static(__dirname + "/node_modules/bulma/css"));
app.use(
  "/bulma",
  express.static(__dirname + "/node_modules/bulma-calendar/dist/css")
);
app.use(
  "/bulma",
  express.static(__dirname + "/node_modules/bulma-calendar/dist/js")
);
app.use(
  "/webfonts",
  express.static(
    __dirname + "/node_modules/@fortawesome/fontawesome-free/webfonts"
  )
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/c", countdownRouter);

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
