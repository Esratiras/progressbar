const express = require('express');
const router = express.Router();

router.post('/', require('../controllers/progressCreate'));
router.get('/progresso/:id', require('../controllers/getProgress'));
router.post('/progresso/:id', require('../controllers/updateProgress'));

module.exports = router;
