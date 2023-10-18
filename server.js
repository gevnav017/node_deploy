const express = require('express')
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.send("works")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Listening on " + PORT)
})