// @ts-nocheck
/**
 * Arquivo: src/routes/palestrante.routes.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 01/08/2019
 * Author Glaucia Lemos
 */

const router = require('express-promise-router')();
const palestranteController = require('../controllers/palestrante.controller');

// ==> Rota Criar Novo 'Palestrante': (POST): localhost:8000/api/palestrantes/
router.post('/palestrantes', palestranteController.create);

// ==> Rota Selecionar Todos 'Palestrantes': (GET): localhost:8000/api/palestrantes/
router.get('/palestrantes', palestranteController.findAll);

// ==> Rota Selecionar 'Palestrante' pelo 'Id': (GET): localhost:8000/api/palestrantes/:id
router.get('/palestrantes/:id', palestranteController.findById);

// ==> Rota Atualizar 'Palestrante' pelo 'Id': (UPDATE): localhost:8000/api/palestrantes/:id
router.put('/palestrantes/:id', palestranteController.update);

// ==> Rota Deletar 'Palestrante' pelo 'Id': (DELETE): localhost:8000/api/palestrantes/:id
router.delete('/palestrantes/:id', palestranteController.delete);

module.exports = router;
