var boardServiece = require('../services/boardService');

exports.boardList = async(req, res) => {
    try{
        let list = await boardServiece.boardList();
        return res.render('boardList', {list: list})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardInsert = async(req, res) =>{
    let{post_name, post_type, post_content} = req.body;
    try{
        await boardServiece.boardInsert(post_name, post_type, post_content)
        return res.redirect('/board/list');
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardInsertPage = async(req, res) =>{
    try{
        return res.render('insertBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardUpdate = async(req, res) =>{
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

exports.boardUpdatePage = async(req, res) =>{
    let {board_num} = req.params;
    try{
        let update = await boardServiece.boardRead(board_num)
        return res.render('boardUpdate', {update:update})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardDelete = async(req, res) =>{
    let {board_num} = req.params;
    try{
        await boardServiece.boardDelete(board_num)
        return res.redirect('/board/list')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardRead = async(req, res) =>{
    let {board_num} = req.params;
    try{
        let update = await boardServiece.boardRead(board_num)
        return res.render('boardDetail', {update:update})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}