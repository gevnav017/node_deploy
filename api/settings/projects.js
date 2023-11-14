const express = require('express')
const router = express.Router()
const db = require('../../db/connect')

router.get("/settings/projects", (req, res) => {
    try {
        const sql = "SELECT * FROM projects";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router