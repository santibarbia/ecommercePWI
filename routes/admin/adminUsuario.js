const express = require('express');
const router = express.Router();
const {v4 : uuid} = require('uuid');
const {
    getAll,
    del,
    getSingle,
    update,
    create
} = require('./../../models/usuarios');
const sha1 = require('sha1');
const {send} =require('../../services/mail')


const getUsuario = async (req, res) => {
    const usuarios = await getAll();
    console.log(usuarios);
    res.render('adminUsuario', {
        usuarios
    });
}

const borrar = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const borrar = await del(userId);
    res.redirect('/admin/usuario');
}

const showCreate = (req, res) => {
   
    res.render('createUsuario')
}

const createPost = async (req, res) => {
    const user = req.body;
    console.log(user);
    const uid = uuid();
    console.log(uid);

    const usuario = {
        nombre: user.nombre,
        username: user.username,
        pass: sha1(user.pass),
        telefono: user.telefono,
        mail: user.email,
        admin:user.admin,
        confirmacionCorreo: uid
    }
    console.log("Observar aca",usuario);
    const crearUsuario = await create(usuario);
    send({
        mail: usuario.mail,
        asunto: "Confirmacion de registro",
        cuerpo: `<h1> Activación de cuenta de ${usuario.nombre}</h1>
    <a href=${process.env.URL}:${process.env.PORT}/registro/verify/${uid}>${usuario.nombre} activa tu cuenta</a>`
    })
    res.redirect('/admin/usuario');
}

const showActualizar = async (req, res) => {
    const userId = req.params.id;
    const [single] = await getSingle(userId);
    const usuario = {
        nombre:single.nombre,
        username:single.username,
        mail:single.mail,
        pass:single.pass,
        telefono:single.telefono,      
    }

    console.log(usuario);
    res.render('updateUsuario', {usuario});
}

const actualizar = async (req, res) => {
    const user = req.body;
    const {id} = req.params;
    console.log(user);
    const usuario = {
        nombre:user.nombre,
        username:user.username,
        pass:sha1(user.pass),
        telefono:user.telefono,
        mail:user.mail,
    }
    const {insertId} = await update(id,usuario);
    console.log(usuario);
    res.redirect('/admin/usuario');
}


router.get('/', getUsuario);
router.get('/create', showCreate);
router.post('/create', createPost);
router.get('/delete/:id', borrar);
router.get('/update/:id', showActualizar);
router.post('/update/:id', actualizar)

module.exports = router;