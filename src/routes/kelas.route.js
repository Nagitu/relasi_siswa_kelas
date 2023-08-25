const express = require('express');
const router = express.Router();
const kelas = require ('../controllers/kelas.controller')


const Kelas = new kelas()
router.get('/all', Kelas.semuaKelas);
router.get('/:id', Kelas.ambilKelasId)
router.delete('/delete/:id', Kelas.deletekelas)
router.post('/add', Kelas.tambahKelas )
router.patch('/edit/:id', Kelas.editKelas)


module.exports = router;