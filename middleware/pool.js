const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:'192.168.0.59',
    user: 'cocoball',
    password: '1234',
    port: 3306,
    database: 'mbti'
})

module.exports = pool;

//db 생성