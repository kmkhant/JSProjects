const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const bodyParser = require("body-parser");

// express app
const app = express();

// intentially added db credentials bcuz it's not important
// connect to MongoDB
const dbURI =
  "mongodb+srv://nodetuts:5nVsDS8RbYa0sLTx@nodetuts.mzbce.mongodb.net/node-tuts?retryWrites=true&w=majority";
// MongoDB connection
// mongodb+srv://<username>:<password>@nodetuts.mzbce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// MongoDB(nodetuts, 5nVsDS8RbYa0sLTx)
// register view engine

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("Started Server at 3000");
    });
  })
  .catch((err) => console.log(err));

// Set Template Engine
app.set("view engine", "ejs");

// set folder for view engine
// app.set("views", "myViews");

// middleware & static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// blog routes
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});
