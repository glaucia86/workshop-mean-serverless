/**
 * Arquivo: models/palestrante.model.js
 * Descrição: arquivo responsável pelo modelo da classe 'Palestrante'
 * Data: 01/08/2019
 * Author Glaucia Lemos
 */

/**
 * === Classe: Palestrante ===
 *  id: (number - guid gerado pelo MongoDb)
 *  nomePalestrante: String
 *  tituloPalestra: String
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const palestranteSchema = new Schema({
  nomePalestrante: { type: String, required: true, max: 80 },
  tituloPalestra: { type: String, required: true, max: 80 },
}, {
  timestamps: true,
  collection: 'palestrante',
});

module.exports = mongoose.model('Palestrante', palestranteSchema);
