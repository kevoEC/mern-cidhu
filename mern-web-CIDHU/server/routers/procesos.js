const express = require('express');
const ProcesosController = require('../controllers/procesos');
const md_auth = require('../middlewares/authenticated');
const { createProcesoValidations } = require('../controllers/procesos');
const api = express.Router();

api.get('/proceso/:id', [md_auth.asureAuth], ProcesosController.getProceso);
api.get('/procesos',[md_auth.asureAuth] ,ProcesosController.getProcesos);
api.post('/proceso',[md_auth.asureAuth], createProcesoValidations , ProcesosController.createProceso);
api.patch('/proceso/:id',[md_auth.asureAuth], createProcesoValidations ,ProcesosController.updateProceso);
api.delete('/proceso/:id',[md_auth.asureAuth] ,ProcesosController.deleteProceso);

module.exports = api;