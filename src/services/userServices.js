var pool = require('../../middleware/pool');
var userQuery = require('../query/userQuery');

exports.signUp = async(user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel) =>{
    try{
        console.log('aa');
        let signup = await pool.query(userQuery.signUp, [user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel]);
        return signup[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
} 

exports.signIn = async(user_id, user_password) => {
    try{
        let user = await pool.query(userQuery.signIn, [user_id, user_password]) 
        return user[0]
    }catch(err){
        throw Error(err);
    }
}

<<<<<<< HEAD
exports.mainPage = async(user_id) => {
    try{
        let user = await pool.query(userQuery.mainPage, user_id)
=======
exports.mainPage = async(user_name, user_id, mbti_mbti_id) => {
    try{
        let user = await pool.query(userQuery.mainPage, [user_name, user_id, mbti_mbti_id])
>>>>>>> 824ed27497077aec73de35e06d4889dfe37fe000
        return user[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}