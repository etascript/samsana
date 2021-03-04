var express = require('express');
var router = express.Router();
var controller = require('../src/components/usuarios/controller');


router.get('/', (req, res) => {
    res.send('Get Usuarios');
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    controller.getOneUser(id)
    .then(respuesta =>{
        res.send(respuesta)
    })
    .catch(err =>{
        res.send(err);
    })
});

router.post('/registro', (req, res)=>{
    const data = req.body;
    controller.saveUser(data)
    .then(respuesta =>{
        res.send(respuesta)
    })
    .catch(err =>{
        res.send(err);
    })
});

module.exports = router;