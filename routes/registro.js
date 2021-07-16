const express = require('express');
const router = express.Router();
const {create,habilitar} = require('../models/usuarios');
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const {send} = require('../services/mail');
const { validateRegistro } = require('../middlewares/usuario');

const getRegistro = (req, res)=>{
    res.render('registro');
}

const registrate = async (req, res)=>{
    const user = req.body;
    console.log(user);
    const uid = uuid();
    console.log(uid);

    const usuario = {
        nombre:user.nombre,
        username:user.username,
        pass:sha1(user.pass),
        telefono:user.telefono,
        mail:user.mail,
        confirmacionCorreo:uid
    }
    console.log(usuario);
    const crearUsuario = await create(usuario);
    send({mail:usuario.mail,asunto:"Confirmacion de registro", cuerpo:
     `<h1> Activación de cuenta de ${usuario.nombre}</h1>
    <a href=${process.env.URL}:${process.env.PORT}/registro/verify/${uid}>${usuario.nombre} activa tu cuenta</a>`
})
    res.redirect('/');
}

const verify = async (req, res)=>{
    const {uid} = req.params;
    const verificar = await habilitar(uid);
    console.log(verificar);
    res.redirect('/login');
}


router.get('/',getRegistro);
router.post('/create',validateRegistro, registrate)
router.get('/verify/:uid',verify);

module.exports = router;