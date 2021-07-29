const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = {dest:'./public/tmp'};
const upload = multer(config);
const modelProducto = require('./../../models/productos');
const modelCategoria = require('./../../models/categorias');
const productoService = require('./../../services/productoService');


const getProductos = async (req, res)=>{
    const producto = await modelProducto.getAllProd();
    console.log(producto)
    
    res.render('adminProducto',{producto});
}

const showCreate =async (req, res)=>{
    const categorias = await modelCategoria.getAllCategorias();
    res.render('createProducto',{categorias});
}

const createProducto = async(req, res)=>{
    const producto = req.body;
    const file = req.file;
    const idImg = await productoService.crearProducto(producto,file);
    console.log(idImg);
    res.redirect('/admin/producto');
}
const showUpdate = async(req, res)=>{
    const {id} = req.params;
    const [single] = await modelProducto.getSingleProd(id);
    const categorias = await modelCategoria.getAllCategorias();
    console.log(categorias);
    console.log(single);

    res.render('updateProducto',{single, categorias});
}

const updateProducto = async(req, res)=>{
    const producto = req.body;
    const {id: idProducto} = req.params;
    const file = req.file;
    console.log(file);
    const idImg = await productoService.updateProducto(idProducto,producto,file);
    
    res.redirect('/admin/producto');
}
const del= async (req, res)=>{
    const {id} = req.params;
    console.log("Observar aca",id);
    const msgProducto = await modelProducto.delProducto(id);
    const msgImg = await modelProducto.deleteImg(id);
    res.redirect('/admin/producto');
}

router.get('/',getProductos);
router.get('/create',showCreate);
router.post('/create',upload.single("imagen"),createProducto);
router.get('/update/:id',showUpdate);
router.post('/update/:id',upload.single("imagen"),updateProducto);
router.get('/delete/:id',del);

module.exports = router;