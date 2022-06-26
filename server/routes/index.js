const express = require('express');
const router = express.Router();

router.post('/progresso/create', require('../controllers/createProgress'));
router.get('/progresso/:id', require('../controllers/getProgress'));
router.put('/progresso/:id', require('../controllers/updateProgress'));
router.post('/progresso/:id', require('../controllers/resetValue'));

// create endpointi olacak ve POST isteği atılacak ve yeni bir Progresso oluşturulacak ve id'si frontEnd'e dönecek.
// POST /progresso/create
// sonra oluştur butonuna basınca backende istek atıacak ve yeni bir progress oluşturacak ,sonra adres çubuğu şu şekilde olacak. progresso/{mongoId} GET isteği oalcak.
// bu dönen id ile /progresso/{id} olacak frontEnd ve GET isteği atılacak backend'e
// POST isteği atılırsa /progresso/{id} update yapılır. sonra update butonuna basınca backende istek atıcak progresso/{mongoId} POSt -body { value:newValue}


module.exports = router;
