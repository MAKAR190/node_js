const express = require("express");
// const path = require("path");

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname + "/public")));

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/about.html"));
// });

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
app.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});
