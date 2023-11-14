const express = require('express')
const router = express.Router()
const db = require('../db/connect')

router.post("/trade-labor", (req, res) => {
    try {
        const tradeId = req.body.tradeId
        const sql = "SELECT * FROM tradeFields WHERE tradesId = ? AND type = ?";
        db.query(sql, [tradeId, "Labor"], (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

router.post("/trade-material", (req, res) => {
    try {
        const tradeId = req.body.tradeId
        const sql = "SELECT * FROM tradeFields WHERE tradesId = ? AND type = ?";
        db.query(sql, [tradeId, "Material"], (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router