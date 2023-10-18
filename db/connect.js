const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'ls-75adeffd5d0c21ef46d636991be193e27e5b1fe3.ctke02zwjdms.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'root1234',
    database: 'dbcrud'
})

module.exports = db