/* eslint-disable prefer-arrow-callback */
/**
 * Arquivo: src/controllers/palestrante.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe: 'Palestrante'
 * Data: 01/08/2019
 * Author Glaucia Lemos
 */

const Palestrante = require('../models/palestrante.model');

// Async & Await:

// ==> Método responsável por criar um novo 'Palestrante':
exports.create = async (req, res) => {
  const novoPalestrante = new Palestrante(req.body);
  const palestrante = await novoPalestrante.save();
  res.status(200).send({ message: 'Palestrante criado(a) com sucesso!', palestrante });
};

// ==> Método responsável por selecionar todos os 'Palestrantes':
exports.findAll = async (req, res) => {
  const palestrantes = await Palestrante.find({});
  res.status(200).send(palestrantes);
};

// ==> Método responsável por selecionar 'Palestrante' pelo 'Id':
exports.findById = async (req, res) => {
  const palestranteId = await Palestrante.findById(req.params.id);
  res.status(200).send(palestranteId);
};

// ==> Método responsável por atualizar 'Palestrante' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  if (!req.body.nomePalestrante || !req.body.tituloPalestra) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  }

  const palestrante = await Palestrante.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: 'Palestrante atualizado(a) com sucesso!', palestrante });
};

// Método responsável por deletar 'Palestrante pelo 'Id':
exports.delete = async (req, res) => {
  const palestrante = await Palestrante.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Palestrante excluído com sucesso!', palestrante });
};
