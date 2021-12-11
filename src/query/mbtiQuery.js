exports.mbtiBoard = 'select * from post'
exports.mbtiDetail = 'select * from post where post_id = ?'

exports.insertMBTIBoard = 'insert into post(post_title, post_writingTime, post_content, post_travelPlace, post_travelStartDate, post_travelEndDate, post_rooms, post_transport, post_review, user_user_id, board_board_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'