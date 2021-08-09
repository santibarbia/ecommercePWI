const verifyUser = (req, res, next)=>{
    if (req.session.user){
        next();
    }else{
        res.render('login',{message:'Necesitas logearte para continuar'})
    }
}

const verifyAdmin = (req, res, next)=>{
    if (req.session.admin == 1){
        next();
    }else{
        res.render('unauthorize');
    }
}

module.exports = {verifyUser,verifyAdmin};