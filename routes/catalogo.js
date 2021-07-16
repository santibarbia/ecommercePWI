const express = require('express');
const { getAllProd } = require('../models/productos');
const router = express.Router();

const getCatalogo = async(req, res) => {
    const productos = await getAllProd;
    console.log(productos);
    res.render('catalogo', {productos});
}


router.get('/',getCatalogo);
module.exports = router;