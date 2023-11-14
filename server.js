const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = 8080;
const db = require("./db/connect");
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected to db");
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/dist'))

// api routes - settings/projects
app.use("/api", require("./api/settings/projects"));

// api routes - settings/trades
app.use("/api", require("./api/settings/trades"));

// api routes - settings/users
app.use("/api", require("./api/settings/users"));

// api routes - trades
app.use("/api", require("./api/trades"));

// api routes - trades sections
app.use("/api", require("./api/tradeSections"));

// api routes -project locations
app.use("/api", require("./api/projectLocations"));

// api routes - project sizes
app.use("/api", require("./api/projectSizes"));

app.get("/movies", (req, res) => {
  try {
    const sql = "SELECT * FROM movies";
    db.query(sql, (err, result) => {
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/movies", (req, res) => {
  try {
    const newMovie = req.body.newMovie;
    const sql = "INSERT INTO movies (movie) VALUES (?)";
    db.query(sql, newMovie, (err, result) => {
      result.movie = newMovie;
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/app/dist/index.html');
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening on " + PORT);
});
