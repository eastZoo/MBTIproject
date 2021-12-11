const wholeQuery = require('../query/wholeQuery');
var pool = require('../../middleware/pool');

exports.wholeBoard = async(req, res) => {
    try{
        let wholeBoard = await pool.query(wholeQuery.wholeBoard)
        console.log(wholeBoard[0]);
        var a = wholeBoard[0]
        

        return wholeBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.wholeDetail = async(req) => {
    try{
        let wholeDetail = await pool.query(wholeQuery.wholeDetail, req)
        return wholeDetail[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.insertwholeBoard = async(req, res) => {
    try{
        let insertwholeBoard = await pool.query(wholeQuery.insertwholeBoard, req)
        console.log("pass");
        return insertwholeBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardUpdate = async(req) => {
    try{
        console.log("service");
        console.log(req);
        let update = await pool.query(wholeQuery.mbtiBoardUpdate, req);
        return update[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.mbtiBoardDelete = async(req, res) => {
    try{
        pool.query(wholeQuery.mbtiBoardDelete, req)
        return
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}