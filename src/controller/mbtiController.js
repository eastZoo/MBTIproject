const { compile } = require('ejs');
const mbtiServices = require('../services/mbtiServices');

exports.mbtiPage = async(req, res) => {
    try{
        // let list = await boardServiece.boardList();
        return res.render('mbtiBoardList')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoard = async(req, res) => {
    try{
        let mbtiBoard = await mbtiServices.mbtiBoard();
        return res.render('mbtiBoardMain', {mbtiBoard:mbtiBoard})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiDetail = async(req, res) => {
    let {post_id, user_id} = req.params;
    try{
        let session = req.session.user_id;
        let mbtiDetail = await mbtiServices.mbtiDetail(post_id, user_id);
        a = mbtiDetail[0]
        return res.render('mbtiBoardDetail', {mbtiDetail:mbtiDetail[0], session:session})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

// exports.boardRegister = async(req, res) => {
//     let {post_id} = req.params;
//     try{
//         console.log("pass");
//         console.log(post_id);
//         let mbtiDetail = await mbtiServices.mbtiDetail(post_id);
//         a = mbtiDetail[0]
//         console.log("pass");
//         console.log(mbtiDetail[0].post_content);
//         return res.render('mbtiBoardDetail', {mbtiDetail:mbtiDetail[0]})
//     }catch(err){
//         console.log(err)
//         return res.status(500).json(err);
//     }
// }

exports.mbtiBoardUpdate = async(req, res) => {
    const {post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review} = req.body
    const {post_id} = req.body;
    try{
        let aa= await mbtiServices.mbtiBoardUpdate([post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, post_id])
        return res.redirect('/mbti/detail/' + post_id)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.mbtiBoardUpdatePage = async(req, res) => {
    const {post_id} = req.params;
    try{
        let session = req.session.user_id;
        let user = await mbtiServices.mbtiDetail(post_id);
        return res.render('mbtiBoardUpdate', {session:session, user:user})
        
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.getboardRegister = async(req, res) => {
    try{
        return res.render('registerMBTIBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardRegister = async(req, res) => {
    const {post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, board_board_id} = req.body;
    try{
        let date = new Date();
        var user_id = req.session.user_id
        mbtiServices.insertMBTIBoard([post_title, date, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_id, board_board_id]);
        res.redirect('/mbti/mbtiBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}