var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const appInsights = require("applicationinsights");
const { Console } = require("console");

var app = express();

appInsights
  .setup(
    "InstrumentationKey=1125c731-afc2-4649-a41b-5ed52cde87b7;IngestionEndpoint=https://centralus-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/"
  )
  .start();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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

app.set("port", process.env.PORT || 3000);

exports.listen = function () {
  server = app.listen(app.get("port"), function () {
    debug("Express server listening on port " + server.address().port);
  });
};

exports.close = function () {
  server.close(() => {
    debug("Server stopped.");
  });
};
console.log("Running");
this.listen();
