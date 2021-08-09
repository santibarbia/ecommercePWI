const express = require('express');
const modelProducto = require('../models/productos');
const modelCarrito = require('../models/carrito');
const router = express.Router();

const getCatalogo = async(req, res) => {
    const productos = await modelProducto.getAllProd();
    console.log(productos);
    res.render('catalogo', {productos});
}

const getSingle = async (req, res) => {
    const {id} = req.params;
    const [producto] = await modelProducto.getSingleProd(id);
    console.log(producto);
    res.render('single', {producto});
}

const buscador = async (req, res) => {
    let {buscar} = req.body;
    buscar = '%'+buscar+'%';
    console.log(buscar);
    const productos = await modelProducto.buscar(buscar);
    console.log(productos);
    res.render('catalogo', {productos});

}

const insertCarrito = async (req, res) =>{
    const {id : id_producto} = req.params;
    const id_usuario = req.session.user;
    const obj = {
        id_producto,
        id_usuario
    }
    const {insertId} = await modelCarrito.agregar(obj);
    console.log(insertId);
    res.redirect('/catalogo');
}



router.get('/',getCatalogo);
router.get('/single/:id',getSingle);
router.post('/',buscador);
router.get('/buy/:id',insertCarrito);
module.exports = router;