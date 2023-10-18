const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 8080
const db = require('./db/connect')
db.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("connected to db")
})

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/app/dist'))

app.get("/movies", (req, res) => {
    try {
        const sql = "SELECT * FROM movies";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

app.post("/movies", (req, res) => {
    try {
        const newMovie = req.body.newMovie
        const sql = "INSERT INTO movies (movie) VALUES (?)"
        db.query(sql, newMovie, (err, result) => {
            result.movie = newMovie
            res.send(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Listening on " + PORT)
})