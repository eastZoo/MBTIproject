exports.mbtiBoardList = 'SELECT * FROM mbti where mbti_id = ?'
exports.mypage = 'select * from user where user_id = ?'
exports.updateMypage = 'update user set user_name =?, user_address=?, user_tel=?, user_travel=?, mbti_mbti_id = ?  where user_id=?';