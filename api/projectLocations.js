const express = require('express')
const router = express.Router()
const db = require('../db/connect')

router.get("/project-locations", (req, res) => {
    try {
        const sql = "SELECT * FROM projectLocations";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router