const express = require ('express');
const router = express.Router();
//routes
router.get('/', (req,res)=>{
    res.render('index.html');
});

router.get('/contacto', (req,res)=>{
    res.render('contacto.html');
});

router.get('/acercaDe', (req,res)=>{
    res.render('acerca_de.html');
});

router.get('/login', (req,res)=>{
    res.render('login.html');
});


module.exports = router;