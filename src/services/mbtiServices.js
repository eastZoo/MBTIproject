const mbtiQuery = require('../query/mbtiQuery');
var pool = require('../../middleware/pool');    

exports.mbtiBoard = async(req, res) => {
    try{
        let mbtiBoard = await pool.query(mbtiQuery.mbtiBoard)
        return mbtiBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiDetail = async(req, res) => {
    try{
        console.log("mbtiDetail");
        console.log(req);
        let mbtiDetail = await pool.query(mbtiQuery.mbtiDetail, req)
        console.log("pass");
        return mbtiDetail[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}