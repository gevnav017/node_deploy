const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static(__dirname + '/app/dist'))

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Listening on " + PORT)
})