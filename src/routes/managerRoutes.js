var express = require('express')
var router = express.Router();
const managerController = require('../controller/managerController')

// MBTI 게시판 목록
router.get('/managerBoard', managerController.managerBoard);

module.exports = router;