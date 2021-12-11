var express = require('express');
var router = express.Router();
const wholeController = require('../controller/wholeController');

// mbti 데이터를 가져올 때
router.get("/wholeBoard", wholeController.wholeBoard)

router.get("/wholedetail/:post_id", wholeController.wholeDetail)

// 게시글 생성
router.get("/wholeboard/register", wholeController.getwholeBoardRegister)

router.post("/wholeboard/register/:post_id", wholeController.wholeBoardRegister)

// // 글 수정

// router.post("/update/wholeboard", wholeController.wholeBoardUpdate)

// router.get("/update/wholeboard/:post_id", wholeController.wholeBoardUpdatePage);

// // 글 삭제
// router.post("/delete/wholeboard/:post_id", wholeController.wholeBoardDelete)

module.exports = router;