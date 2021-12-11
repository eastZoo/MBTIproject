var express = require('express')
var router = express.Router();
const boardController = require('../controller/boardController')

// MBTI 게시판 목록
router.get('/list/:mbti_id', boardController.mbtiBoardList);

router.get('/mypage/:user_id', boardController.mypage);

router.post('/mypage/update', boardController.updateMypage);

router.get('/mypage/update/:user_id', boardController.updateMypageCom);


module.exports = router;