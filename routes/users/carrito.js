const express = require('express');
const router = express.Router();


const getCarrito = (req, res)=>{
    res.render('carrito');
}

router.get('/',getCarrito);

module.exports = router;