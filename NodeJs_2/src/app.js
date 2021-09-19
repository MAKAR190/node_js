const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const articlesRoute = require("./routes/articles");
require("dotenv").config();
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(volleyball);
app.use(express.static(path.join(__dirname + "../public")));
app.use("/articles", articlesRoute);
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  expressSession({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
  })
);
app.get("/cookie", (req, res) => {
  console.log(req.cookies.message);
  console.log(req.signedCookies.secret);
  res.render("cookie");
});

app.get("/set-cookies", (req, res) => {
  res.cookie("message", "Hello, World!");
  res.cookie("secret", "hi", { signed: true });
  res.redirect("/cookie");
});
app.get("/clear-cookies", (req, res) => {
  res.clearCookie("message");
  res.clearCookie("secret");
  res.redirect("/cookie");
});

app.get("/views", (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.render("views", { views: req.session.views });
});
module.exports = app;
