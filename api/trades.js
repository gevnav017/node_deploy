const express = require('express')
const router = express.Router()
const db = require('../db/connect')

router.get("/trades", async (req, res) => {
    try {
        const sql = "SELECT * FROM trades";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router