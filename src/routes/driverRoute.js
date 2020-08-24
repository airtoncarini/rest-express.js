const express = require('express');
const router  = express.Router();
const driverCtrl = require('../controllers/driverController');

router.post('/', driverCtrl.post);
router.put('/:id', driverCtrl.put);
router.delete('/:id', driverCtrl.delete);
router.get('/', driverCtrl.get);

module.exports = router;