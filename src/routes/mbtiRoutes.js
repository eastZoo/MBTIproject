var express = require('express');
var router = express.Router();
const mbtiController = require('../controller/mbtiController');

// mbti 특정 버튼을 클릭할 시
router.get("/mbtiPage", mbtiController.mbtiPage)

// mbti 데이터를 가져올 때
router.get("/mbtiBoard", mbtiController.mbtiBoard)

router.get("/detail/:post_id", mbtiController.mbtiDetail)

module.exports = router;