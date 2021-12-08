var boardQuery = require('../query/boardQuery')
var pool = require('../../middleware/pool');

exports.boardList = async(req, res) => {
    try{
        let list = await pool.query(boardQuery.boardList);
        return list[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.boardInsert = async(post_name, post_type, post_content) => {
    try{
        let insert = await pool.query(boardQuery.boardInsert[post_name, post_type, post_content])
        return insert[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.boardUpdate = async(post_name, post_type, post_content) => {
    try{
        let update = await pool.query(boardQuery.boardUpdate[post_name, post_type, post_content])
        return update[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.boardDelete = async(post_num) => {
    try{
        let del =  await pool.query(boardQuery.boardDelete[post_num])
        return del[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.boardDetail = async(post_num) => {
    try{
        let detail = await pool.query(boardQuery.boardUpdate[post_num])
        return detail[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}