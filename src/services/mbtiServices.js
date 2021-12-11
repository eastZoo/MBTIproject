<<<<<<< HEAD
const mbtiQuery = require('../query/mbtiQuery');
var pool = require('../../middleware/pool');    

exports.mbtiBoard = async(mbti_id, res) => {
    try{
        let mbtiBoard = await pool.query(mbtiQuery.mbtiBoard, mbti_id)
        return mbtiBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiDetail = async(req) => {
    try{
        let mbtiDetail = await pool.query(mbtiQuery.mbtiDetail, req)
        return mbtiDetail[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardUpdate = async(req) => {
    try{
        console.log("service");
        console.log(req);
        let update = await pool.query(mbtiQuery.mbtiBoardUpdate, req);
        return update[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.insertMBTIBoard = async(req, res) => {
    try{
        let insertMBTIBoard = await pool.query(mbtiQuery.insertMBTIBoard, req)
        console.log("pass");
        return insertMBTIBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardDelete = async(req, res) => {
    try{
        pool.query(mbtiQuery.mbtiBoardDelete, req)
        return
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
=======
const mbtiQuery = require('../query/mbtiQuery');
var pool = require('../../middleware/pool');    

exports.mbtiBoard = async(req, res) => {
    try{
        let mbtiBoard = await pool.query(mbtiQuery.mbtiBoard, req)
        return mbtiBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiDetail = async(req) => {
    try{
        let mbtiDetail = await pool.query(mbtiQuery.mbtiDetail, req)
        return mbtiDetail[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.mbtiBoardUpdate = async(req) => {
    try{
        console.log("service");
        console.log(req);
        let update = await pool.query(mbtiQuery.mbtiBoardUpdate, req);
        return update[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.insertMBTIBoard = async(req, res) => {
    try{
        let insertMBTIBoard = await pool.query(mbtiQuery.insertMBTIBoard, req)
        console.log("pass");
        return insertMBTIBoard[0]
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
>>>>>>> 824ed27497077aec73de35e06d4889dfe37fe000
}