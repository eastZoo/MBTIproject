// 회원가입 쿼리문
exports.signUp = 'insert into user (user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel) values(?, ?, ?, ?, ?, ?, ?, ?, ?)'

// 로그인 쿼리문
exports.signIn = 'select * from user where user_id=? and user_password=?'

// 로그인한 유저에게 보이는 메인 페이지
exports.mainPage = 'select * from board'