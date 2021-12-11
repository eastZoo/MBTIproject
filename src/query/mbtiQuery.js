<<<<<<< HEAD
exports.mbtiBoard = 'select p.* from post p, user u where u.user_id = p.user_user_id and u.mbti_mbti_id = ?'
exports.mbtiDetail = 'select * from post where post_id = ?'

exports.registerMBTIBoard = 'insert into post(user_id, user_pw, user_name, user_recom) values(?,?,?)'

exports.mbtiBoardUpdate = 'update post set post_title = ?, post_content = ?, post_travelPlace = ?, post_travelStartDate = ?, post_travelEndDate = ?, post_rooms = ?, post_transport = ?, post_review = ? where post_id = ?'

exports.insertMBTIBoard = 'insert into post(post_title, post_writingTime, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_user_id, board_board_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

exports.mbtiBoardDelete = 'delete from post where post_id = ?'
=======
exports.mbtiBoard = 'select * from post'
exports.mbtiDetail = 'select * from post where post_id = ?'

exports.registerMBTIBoard = 'insert into post(user_id, user_pw, user_name, user_recom) values(?,?,?)'

exports.mbtiBoardUpdate = 'update post set post_title = ?, post_content = ?, post_travelPlace = ?, post_travelStartDate = ?, post_travelEndDate = ?, post_rooms = ?, post_transport = ?, post_review = ? where post_id = ?'

exports.insertMBTIBoard = 'insert into post(post_title, post_writingTime, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_user_id, board_board_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
>>>>>>> 824ed27497077aec73de35e06d4889dfe37fe000
