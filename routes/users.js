const express = require('express');
const router = express.Router();




const showUser = (req, res) => {
  res.render('users');
}


router.get('/',showUser);
module.exports = router;
