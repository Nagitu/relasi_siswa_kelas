const express = require('express');
const router = express.Router();
const Siswa = require ('../controllers/siswa.controller')


const siswa = new Siswa()
router.get('/all', siswa.getAllsiswa);
router.get('/featkelas', siswa.getSiswaKelas)
router.get('/:id', siswa.getSiswaById)
router.delete('/delete/:id', siswa.deleteSiswa)
router.post('/add', siswa.addSiswa )
router.patch('/edit/:id', siswa.editSiswa)


module.exports = router;