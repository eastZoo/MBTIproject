exports.boardDetail = 'select * from post where post_num=? and post_board_num = ?';
exports.boardList = 'select * from post';
exports.boardInsert = 'insert into post(post_name =?, post_type=?, post_content=?) values(?, ?, ?)';
exports.boardUpdate = 'update post set post_name =?, post_type=?, post_content=? where post_num=?';
exports.boardDelete = 'delete from post where post_num=?';