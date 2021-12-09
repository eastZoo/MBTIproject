var boardServiece = require('../services/boardService');

exports.mbtiBoardList = async(req, res) =>{
    const {mbti_id, user_id} = req.params;
    console.log(mbti_id)
    try{
        var session = req.session.user_id;
        console.log(session)
        let mbtiList = await boardServiece.mbtiBoardList(mbti_id)
        return res.render('mbtiBoardList', {mbtiList: mbtiList})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mypage = async(req, res) => {
    try{
        let session = req.session.user_id;
        let user = await boardServiece.mypage(session);
        return res.render('mypage', {session:session, user:user});
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.updateMypage = async(req, res) => {
    const {user_name, user_tel, user_address, user_travel, mbti_mbti_id} = req.body
    const {user_id} = req.params
    try{
        let session = req.session.user_id
        console.log(session)
        let update = await boardServiece.updateMypage([user_name, user_address, user_tel, user_travel, mbti_mbti_id, session])
        console.log(update);
        return res.redirect('/board/mypage/update')
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.updateMypageCom = async(req, res) => {
    const {user_id} = req.params
    try{
        let session = req.session.user_id;
        let user = await boardServiece.mypage(user_id)
        return res.render('mypageUpdate', {session:session, user:user})
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}