exports.mbtiBoard = 'select * from post'
exports.mbtiDetail = 'select * from post where post_id = ?'

exports.registerMBTIBoard = 'insert into post(user_id, user_pw, user_name, user_recom) values(?,?,?)'