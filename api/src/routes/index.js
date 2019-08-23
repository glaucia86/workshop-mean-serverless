/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 08/06/2019
 * Author Glaucia Lemos
 */


const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'API de Palestrantes - BrazilJs Conf 2019',
    version: '1.0.0',
  });
});

module.exports = router;
