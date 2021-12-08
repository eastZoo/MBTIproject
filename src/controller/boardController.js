var boardServiece = require('../services/boardService');

exports.mbtiMain = async(req, res) => {
    try{
        let mainList = await boardServiece.mbtiMain();
        return res.render('boardList', {mainList:mainList})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardList = async(req, res) =>{
    const {mbti_mbti_id} = req.params;
    try{
        let mbtiLsit = await boardServiece.mbtiBoardList(mbti_mbti_id)
        return res.render('boardList', {mbtiLsit:mbtiLsit})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiTravel = async(req, res) =>{
    try{
        return res.render('insertBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoard = async(req, res) =>{
    let {post_name, post_type, post_content, member_member_id} = req.body
    let {post_num} = req.params
    try{
        await boardServiece.boardUpdate(post_name, post_num, post_type, post_content, member_member_id)
        return res.render('insertBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mypage = async(req, res) =>{
    let {board_num} = req.params;
    try{
        let update = await boardServiece.boardRead(board_num)
        return res.render('boardUpdate', {update:update})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.question = async(req, res) =>{
    let {board_num} = req.params;
    try{
        await boardServiece.boardDelete(board_num)
        return res.redirect('/board/list')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}