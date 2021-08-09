const express = require('express');
const router = express.Router();
const modelProducto = require('../models/productos');




/* GET home page. */
router.get('/', async function (req, res, next) {
  const producto = await modelProducto.getTresProd();
  console.log(producto);
  res.render('index', { producto });
});




module.exports = router;
