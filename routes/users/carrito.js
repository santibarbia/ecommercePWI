const express = require('express');
const router = express.Router();
const modelCarrito = require('../../models/carrito');


const getCarrito = async(req, res)=>{
    let precioFinal = 0;
    const carrito = await modelCarrito.getAll(req.session.user);
    carrito.forEach( item => {
        precioFinal += item.precio;
    })
    console.log(carrito);
    res.render('carrito',{carrito, precioFinal});
}

const eliminar = async (req, res) => {
    const {id} = req.params;
    const eliminar = await modelCarrito.eliminarUno(id);
    console.log(eliminar);
    res.redirect('/users/carrito');
}

const compra = async (req, res) => {
    const id = req.session.user;
    const msgElim = await modelCarrito.delCarrito(id);
    console.log(msgElim);
    res.redirect('/');
}

router.get('/',getCarrito);
router.get('/compra',compra);
router.get('/:id',eliminar);

module.exports = router;