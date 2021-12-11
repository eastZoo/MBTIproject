const { compile } = require('ejs');
const mbtiServices = require('../services/mbtiServices');

exports.mbtiPage = async(req, res) => {
    try{
        console.log("mbti_id");
        console.log(req.params.mbti_id);
        var mbti_id = req.params.mbti_id
        // let list = await boardServiece.boardList();
        return res.render('mbtiBoardList', {mbti_id : mbti_id})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoard = async(req, res) => {
    try{
        console.log("mbti_id");
        var mbti_id = req.params.mbti_id
        console.log(mbti_id);
        let mbtiBoard = await mbtiServices.mbtiBoard(mbti_id);
        return res.render('mbtiBoardMain', {mbtiBoard:mbtiBoard, mbti_id : mbti_id})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiDetail = async(req, res) => {
    let {post_id, user_id} = req.params;
    try{
        mbti_id = req.params.mbti_id
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
        console.log("mbti_id TEST");
        console.log(req.params.mbti_id);
        mbti_id = req.params.mbti_id
        let aa= await mbtiServices.mbtiBoardUpdate([post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, post_id])
        return res.redirect('/mbti/detail/' + mbti_id + '' + '/' + post_id)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.mbtiBoardUpdatePage = async(req, res) => {
    const {post_id} = req.params;
    try{
        console.log("TEST");
        console.log(req.params.mbti_id)
        let session = req.session.user_id;
        let user = await mbtiServices.mbtiDetail(post_id);
        return res.render('mbtiBoardUpdate', {session:session, user:user, mbti_id:mbti_id})
        
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.getboardRegister = async(req, res) => {
    try{
        console.log(req.params.mbti_id);
        mbti_id = req.params.mbti_id
        return res.render('registerMBTIBoard', {mbti_id : mbti_id})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.boardRegister = async(req, res) => {
    const {post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, board_board_id} = req.body;
    try{
        mbti_id = req.params.mbti_id
        console.log("Pass");
        console.log(mbti_id);
        let date = new Date();
        var user_id = req.session.user_id
        mbtiServices.insertMBTIBoard([post_title, date, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_id, board_board_id]);
        res.redirect('/mbti/mbtiBoard/' + mbti_id)
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardDelete = async(req, res) => {
    const {post_id} = req.params;
    const {mbti_id} = req.params;
    try{
        console.log("Pass");
        console.log(req.params.mbti_id);
        console.log(req.session.mbti_id);
        console.log(req.body.mbti_id);
        mbtiServices.mbtiBoardDelete(post_id)
        return res.redirect('/mbti/mbtiBoard/' + mbti_id)
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}