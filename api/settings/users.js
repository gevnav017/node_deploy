const express = require('express')
const router = express.Router()
const db = require('../../db/connect')

router.get("/settings/users", (req, res) => {
    try {
        const sql = "SELECT * FROM users";
        db.query(sql, (err, result) => {
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

router.post("/settings/users", (req, res) => {
    try {
        const { newUser } = req.body
        const { firstName } = newUser
        const { lastName } = newUser
        const { email } = newUser
        const { role } = newUser
        const sql = "INSERT INTO users (firstName, lastName, email, role) VALUES (?, ?, ?, ?)";
        db.query(sql, [firstName, lastName, email, role], (err, result) => {
            if (err) {
                res.json(err) 
                return
            }
            res.json(result)
        })
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router