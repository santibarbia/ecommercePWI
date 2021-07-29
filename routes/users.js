const express = require('express');
const router = express.Router();




const showCarrito = (req, res) => {
  res.render('carrito');
}


router.get('/',showCarrito);
module.exports = router;
