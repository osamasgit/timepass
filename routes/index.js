const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validaHora');

router.get('/', horaMiddleware, (req, res) => {
    const message = req.query.message || '';
    const currentHour = req.hour;
    const currentMinutes = req.minutes;

    res.send(`
        <h1>Bienvenido</h1>
        <h2>Hora actual: ${currentHour}:${currentMinutes}</h2>
        ${message ? `<p style="color:red;">${message}</p>` : ''}
        <form action="/endroute" method="GET">
            <button type="submit">Accede a la página</button>
        </form>
    `);
});

module.exports = router;