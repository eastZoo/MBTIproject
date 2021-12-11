<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const mbtiController = require('../controller/mbtiController');

// mbti 특정 버튼을 클릭할 시
router.get("/mbtiPage/:mbti_id", mbtiController.mbtiPage)

// mbti 데이터를 가져올 때
router.get("/mbtiBoard/:mbti_id", mbtiController.mbtiBoard)

router.get("/detail/:mbti_id/:post_id", mbtiController.mbtiDetail)

// router.get("/board/register", mbtiController.boardRegister)

// 게시글 생성
router.get("/board/register/:mbti_id", mbtiController.getboardRegister)

router.post("/board/register/:mbti_id/:post_id", mbtiController.boardRegister)

// 글 수정

router.post("/update/board/:mbti_id/:post_id", mbtiController.mbtiBoardUpdate)

router.get("/update/board/:mbti_id/:post_id", mbtiController.mbtiBoardUpdatePage);

// 글 삭제
router.post("/delete/board/:mbti_id/:post_id", mbtiController.mbtiBoardDelete)

=======
var express = require('express');
var router = express.Router();
const mbtiController = require('../controller/mbtiController');

// mbti 특정 버튼을 클릭할 시
router.get("/mbtiPage", mbtiController.mbtiPage)

// mbti 데이터를 가져올 때
router.get("/mbtiBoard", mbtiController.mbtiBoard)

router.get("/detail/:post_id", mbtiController.mbtiDetail)

// router.get("/board/register", mbtiController.boardRegister)

// 게시글 생성
router.get("/board/register", mbtiController.getboardRegister)

router.post("/board/register/:post_id", mbtiController.boardRegister)

// 글 수정

router.post("/update/board", mbtiController.mbtiBoardUpdate)

router.get("/update/board/:post_id", mbtiController.mbtiBoardUpdatePage);


// 글 삭제

>>>>>>> 824ed27497077aec73de35e06d4889dfe37fe000
module.exports = router;