const express = require('express');
const router = express.Router();
const {auth} = require('../models/usuarios');
const sha1 = require('sha1');
const { validateLogin } = require('../middlewares/usuario');



const getLogin=(req, res)=>{
    res.render('login');
}

const login = async (req, res)=>{
    const {username,pass} = req.body;
    console.log(username,pass);
    const passCrypt= sha1(pass);
    const verify = await auth(username,passCrypt);
    if (verify.length === 0){
        res.render('login',{message: 'Usuario y/o password incorrectos'})
    }else{
        const [{id,admin}] = verify;
        req.session.user = id;
        req.session.admin = admin;
        if (req.session.admin === 1) {
            res.redirect('/admin');
            
        }else{
            res.redirect('/users')
        }
    }
    console.log(req.session);

}


router.get('/',getLogin);
router.post('/',validateLogin,login);

module.exports = router;