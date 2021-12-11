exports.managerBoard = async(req, res) => {
    try{
        return res.render('managerBoard')
    } catch(err){
        return res.status(500).json(err);
    }
}