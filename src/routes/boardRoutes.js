var express = require('express')
var router = express.Router();
const boardController = require('../controller/boardController')

// 게시판 목록
router.get('/list', boardController.boardList);

// 게시글 작성
router.post('/insert', boardController.boardInsert);

// 게시글 작성 페이지
router.get('/insert', boardController.boardInsertPage);

// 게시글 수정
router.patch('/patch/:board_num', boardController.boardUpdate);

// 게시글 수정 페이지
router.get('/patch/:board_num', boardController.boardUpdatePage);

// 게시글 삭제
router.delete('/delete/:board_num', boardController.boardDelete);

// 게시글 상세보기
router.get('/read/:board_num', boardController.boardRead);


module.exports = router;