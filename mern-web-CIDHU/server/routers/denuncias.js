const express = require('express');
const DenunciasController = require('../controllers/denuncias');
const md_auth = require('../middlewares/authenticated');
const { createDenunciaValidations } = require('../controllers/denuncias');
const api = express.Router();

api.get('/denuncia/:id', [md_auth.asureAuth], DenunciasController.getDenuncia);
api.get('/denuncias',[md_auth.asureAuth] ,DenunciasController.getDenuncias);
api.post('/denuncia',[md_auth.asureAuth], createDenunciaValidations , DenunciasController.createDenuncia);
api.patch('/denuncia/:id',[md_auth.asureAuth], createDenunciaValidations ,DenunciasController.updateDenuncia);
api.delete('/denuncia/:id',[md_auth.asureAuth] ,DenunciasController.deleteDenuncia);

module.exports = api;