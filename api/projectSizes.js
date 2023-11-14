const express = require('express')
const router = express.Router()
const db = require('../db/connect')

router.get("/project-sizes", (req, res) => {
    try {
        const sql = "SELECT * FROM projectSizes";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router