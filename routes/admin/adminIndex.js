const express = require('express');
const router = express.Router();


const getAdmin = (req, res)=>{
    res.render('adminIndex');
}

router.get('/',getAdmin);

module.exports = router;