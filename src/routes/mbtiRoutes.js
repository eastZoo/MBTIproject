var express = require('express');
var router = express.Router();
const mbtiController = require('../controller/mbtiController');

// mbti 특정 버튼을 클릭할 시
router.get("/mbtiPage", mbtiController.mbtiPage)

// mbti 게시글 가져오기
router.get("/mbtiBoard", mbtiController.mbtiBoard)

// mbti 상세 게시글 가져오기
router.get("/detail/:post_id", mbtiController.mbtiDetail)

// 게시글 생성
router.get("/board/register", mbtiController.getboardRegister)

router.post("/board/register/:post_id", mbtiController.boardRegister)


module.exports = router;