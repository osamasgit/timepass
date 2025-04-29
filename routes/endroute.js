const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validaHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
    res.send(`
        <h1>Ruta final</h1>
        <h2>¡Bienvenido a la ruta final</h2>
    `);
});

module.exports = router;