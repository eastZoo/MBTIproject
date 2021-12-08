const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '980905',
    port: 3306,
    database: 'mbti'
})

module.exports = pool;

//db 생성