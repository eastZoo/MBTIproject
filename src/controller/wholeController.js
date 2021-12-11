const wholeServices = require('../services/wholeServices');

exports.wholeBoard = async(req, res) => {
    try{
        console.log("test");
        console.log(req.body.user_user_id);
        let wholeBoard = await wholeServices.wholeBoard();
        console.log("user_user_id");
        console.log(wholeBoard[3].user_user_id);
        // let mbtiInfo = await wholeServices.mbtiInfo();
        return res.render('wholeBoardMain', {wholeBoard:wholeBoard})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.wholeDetail = async(req, res) => {
    let {post_id, user_id} = req.params;
    try{
        let session = req.session.user_id;
        let wholeDetail = await wholeServices.wholeDetail(post_id, user_id);
        a = wholeDetail[0]
        return res.render('wholeBoardDetail', {wholeDetail:wholeDetail[0], session:session})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.getwholeBoardRegister = async(req, res) => {
    try{
        return res.render('registerwholeBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.wholeBoardRegister = async(req, res) => {
    const {post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, board_board_id} = req.body;
    try{
        let date = new Date();
        var user_id = req.session.user_id
        wholeServices.insertwholeBoard([post_title, date, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_id, board_board_id]);
        res.redirect('/whole/wholeBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.wholeBoardUpdate = async(req, res) => {
    const {post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review} = req.body
    const {post_id} = req.body;
    try{
        let aa= await wholeServices.mbtiBoardUpdate([post_title, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, post_id])
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
        let user = await wholeServices.mbtiDetail(post_id);
        return res.render('mbtiBoardUpdate', {session:session, user:user})
        
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardDelete = async(req, res) => {
    const {post_id} = req.params;
    try{
        wholeServices.mbtiBoardDelete(post_id)
        return res.redirect('/mbti/mbtiBoard')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}