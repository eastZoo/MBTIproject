var express = require('express')
var router = express.Router();
const boardController = require('../controller/boardController')

// 메인(MBTI 고르는 화면)
router.get('/list', boardController.mbtiMain);

// MBTI 게시판 목록
router.get('/list/:mbti_mbti_id', boardController.mbtiBoardList);

// MBTI 추천 여행지
router.get('/list/:travel_id/:mbti_mbti_id', boardController.mbtiTravel);

// 매니저 추천 여행지
// router.get('/list/:', boardController.boardInsertPage);

// 전체 게시판
router.get('/list/:board_id/:mbti_mbti_id', boardController.mbtiBoard);

// 마이페이지
router.get('/mypage/:user_user_id', boardController.mypage);

// 문의사항
router.get('/question/:mbti_mbti_id', boardController.question);



module.exports = router;