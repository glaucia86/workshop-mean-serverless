/**
 * Arquivo: models/funcionario.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Funcionario'
 * Data: 01/08/2019
 * Author Glaucia Lemos
 */

/**
 * === Classe: Funcionario ===
 *
 * id: (Number - guid gerado pelo MongoDb)
 * nomeFuncionario: String
 * cargo: String
 * numeroIdentificador: Number
 *
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
  nomeFuncionario: { type: String, required: true, maxlength: 50 },
  cargo: { type: String, required: true, maxlength: 30 },
  numeroIdentificador: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'funcionarios',
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
