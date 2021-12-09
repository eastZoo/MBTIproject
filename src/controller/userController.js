var userServices = require('../services/userServices');

exports.signUp = async(req, res) => {
    const {user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel} = req.body
    try{
        let signup = await userServices.signUp(user_id, user_password, user_name, user_gender, user_address, user_age, mbti_mbti_id, user_travel, user_tel);
        if(signup == 1062){
            return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디 입니다."); 
                location.href='/user/signup';
                </script>`);
        }
        return res.redirect('/user/main');
    }catch(error){
        // 중복된 아이디가 있을 경우
        return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디 입니다."); 
                location.href='/user/signup';
                </script>`);
    }
}

exports.signUpPage = async(req, res) => {
    try{
        // 회원가입 시 입력한 정보를 세션에 저장
        let user = req.session.user_id;
        return res.render('signup', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signIn = async(req, res) => {
    // 로그인 시 필요한 정보를 입력하는 부분
    const {user_id, user_password} = req.body;
    try{
        console.log(user_id, user_password)
        let user = await userServices.signIn(user_id, user_password);
        req.session.user_id = user[0].user_id;
        if (user[0].user_id == user_id && user[0].user_password == user_password){
            // 로그인 성공
            return res.send('<script type="text/javascript">alert("환영합니다!"); location.href="/user/main";</script> session:${req.session}');
        }
        req.session.save(function(){
        res.redirect('/board/list');
        })
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/user/signin";</script>');
        return res.status(500).json(err);
    }
}

exports.signInPage = async(req, res) =>{
    try{
        // 로그인 한 유저의 정보를 세션에 저장
        user = req.session.user_id;
        return res.render('signin', {user:req.session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signOut = async(req, res) =>{
    // 로그아웃 시 로그인 한 회원의 세션을 파괴
    if(req.session){
        console.log('로그아웃 처리');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/user/main');
            }
        );
    }else{
        console.log('로그인 안 되어 있음');
        res.redirect('/user/signin');
    }
}

exports.mainPage = async(req, res) => {
    // 로그인한 회원의 이름을 가져오는 부분
    let {user_name, user_id, mbti_mbti_id} = req.params;
    try{
        let user = await userServices.mainPage(user_name, user_id, mbti_mbti_id);
        console.log(user[0].mbti_mbti_id)
        var session = req.session.user_id;
        var users = req.session;
        return res.render('mbtiBoard', {user:user, session:session, users:users});
    }catch(err){
        return res.status(500).json(err);
    }
}