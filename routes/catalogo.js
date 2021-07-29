const express = require('express');
const modelProducto = require('../models/productos');
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


router.get('/',getCatalogo);
router.get('/single/:id',getSingle);
router.post('/',buscador)
module.exports = router;