var boardQuery = require('../query/boardQuery')
var pool = require('../../middleware/pool');


exports.mbtiBoardList = async(mbti_id) => {
    try{
        console.log(mbti_id);
        let insert = await pool.query(boardQuery.mbtiBoardList, [mbti_id])
        console.log("test");
        return insert[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.mypage = async(user_id) => {
    try{
        let user = await pool.query(boardQuery.mypage, [user_id])
        return user[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.updateMypage = async(req) => {
    try{
        console.log("pass");
        let mypage = await pool.query(boardQuery.updateMypage, req)
        console.log(mypage[0]);
        return mypage[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}