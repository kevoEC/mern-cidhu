const express = require('express');
const FechasController = require('../controllers/fechas');
const md_auth = require('../middlewares/authenticated');
const { createFechaValidations } = require('../controllers/fechas');
const api = express.Router();

api.get('/fecha/:id', [md_auth.asureAuth], FechasController.getCita);
api.get('/fechas',[md_auth.asureAuth] ,FechasController.getCitas);
api.post('/fecha',[md_auth.asureAuth], createFechaValidations , FechasController.createCita);
api.patch('/fecha/:id',[md_auth.asureAuth], createFechaValidations ,FechasController.updateCita);
api.delete('/fecha/:id',[md_auth.asureAuth] ,FechasController.deleteCita);

module.exports = api;