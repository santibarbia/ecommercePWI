const express = require('express');
const router = express.Router();
const modelCategoria = require('../../models/categorias');


const getCategoria = async(req, res)=>{
    const categoria = await modelCategoria.getAllCategorias();
    res.render('adminCategoria',{categoria});
}
const showCreate =(req, res)=>{
    res.render('createCategoria');
}

const create = async(req, res)=>{
    const body = req.body;
    const categoria = await modelCategoria.create(body);
    console.log(categoria);
    res.redirect('/admin/categoria');
}

const showUpdate= async(req, res)=>{
    const {id} = req.params;
    const [categoria] = await modelCategoria.getSingleCat(id);
    res.render('updateCategoria',{categoria});
}

const update = async(req, res)=>{
    const {id} = req.params;
    const categoria = req.body;
    const actualizar = await modelCategoria.update(categoria,id);
    res.redirect('/admin/categoria');
}

const del = async(req, res)=>{
    const {id} = req.params;
    const categoria = await modelCategoria.delCategoria(id);
    res.redirect('/admin/categoria');
}

router.get('/',getCategoria);
router.get('/create',showCreate);
router.post('/create',create);
router.get('/update/:id',showUpdate);
router.post('/update/:id',update);
router.get('/delete/:id',del);

module.exports = router;