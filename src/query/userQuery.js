// 회원가입 쿼리문
exports.signUp = 'insert into user (user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel) values(?, ?, ?, ?, ?, ?, ?, ?, ?)'

// 로그인 쿼리문
exports.signIn = 'select * from user where user_id=? and user_password=?'

// 로그인한 유저에게 보이는 메인 페이지
<<<<<<< HEAD
exports.mainPage = 'SELECT u.* FROM user u, mbti m WHERE u.mbti_mbti_id = m.mbti_id and u.user_id = ?'
=======
exports.mainPage = 'SELECT u.*, m.* FROM user u, mbti m WHERE u.mbti_mbti_id = m.mbti_id'
>>>>>>> 824ed27497077aec73de35e06d4889dfe37fe000
