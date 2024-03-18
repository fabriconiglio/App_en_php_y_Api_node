const express = require('express');
const router = express.Router();
const intervalsController = require('../controllers/intervalsController');

router.get('/', intervalsController.listar);
router.post('/', intervalsController.agregar);
router.delete('/:id', intervalsController.borrar);
router.put('/:id', intervalsController.modificar);
router.get('/by-series/:tv_series_id', intervalsController.listarPorSerie);

module.exports = router;
