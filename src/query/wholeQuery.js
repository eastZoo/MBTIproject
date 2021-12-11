exports.wholeBoard = 'select * from post'
exports.mbtiInfo = 'select user_mbti from user where user_id = ?'
exports.wholeDetail = 'select * from post where post_id = ?'

exports.registerMBTIBoard = 'insert into post(user_id, user_pw, user_name, user_recom) values(?,?,?)'

exports.insertMBTIBoard = 'insert into post(post_title, post_writingTime, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_user_id, board_board_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

exports.mbtiBoardUpdate = 'update post set post_title = ?, post_content = ?, post_travelPlace = ?, post_travelStartDate = ?, post_travelEndDate = ?, post_rooms = ?, post_transport = ?, post_review = ? where post_id = ?'

exports.mbtiBoardDelete = 'delete from post where post_id = ?'