const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.listar);
router.post('/', seriesController.agregar);
router.delete('/:id', seriesController.borrar);
router.put('/:id', seriesController.modificar);

module.exports = router;

