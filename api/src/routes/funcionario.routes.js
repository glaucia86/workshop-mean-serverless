// @ts-nocheck
/**
 * Arquivo: src/routes/funcionario.routes.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 01/08/2019
 * Author Glaucia Lemos
 */

const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Rota Criar Novo 'Funcionario': (POST): localhost:8000/api/funcionario/
router.post('/funcionario', funcionarioController.create);

// ==> Rota Selecionar Todos 'Palestrantes': (GET): localhost:8000/api/funcionarios/
router.get('/funcionarios', funcionarioController.findAll);

// ==> Rota Selecionar 'Palestrante' pelo 'Id': (GET): localhost:8000/api/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findById);

// ==> Rota Atualizar 'Palestrante' pelo 'Id': (UPDATE): localhost:8000/api/funcionario/:id
router.put('/funcionario/:id', funcionarioController.update);

// ==> Rota Deletar 'Palestrante' pelo 'Id': (DELETE): localhost:8000/api/funcionario/:id
router.delete('/funcionario/:id', funcionarioController.delete);

module.exports = router;
