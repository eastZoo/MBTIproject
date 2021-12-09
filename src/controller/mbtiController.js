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
    let {post_id} = req.params;
    try{
        console.log("pass");
        console.log(post_id);
        let mbtiDetail = await mbtiServices.mbtiDetail(post_id);
        a = mbtiDetail[0]
        console.log("pass");
        console.log(mbtiDetail[0].post_content);
        return res.render('mbtiBoardDetail', {mbtiDetail:mbtiDetail[0]})
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