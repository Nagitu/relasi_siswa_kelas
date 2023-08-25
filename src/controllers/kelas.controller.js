const kelasmodel = require('../models/kelas.model')
const express = require('express');
const { v4: uuidv4 } = require('uuid');

class kelas {
    async semuaKelas(_, res) {
        try {
            const datakelas = await kelasmodel.getSemuaKelas()
            res.status(400).json({ data: datakelas })
        }
        catch (error) {
            res.json({ message: error })
        }
    }
    async ambilKelasId(req, res) {
        try {
            const id = req.params['id']
            const datakelas = await kelasmodel.getKelasById(id)
            if (datakelas == 0) {
                return res.json({ message: "data tidak ada" })
            }
            res.status(400).json({ data: datakelas })
            console.log(id);
        }
        catch (error) {
            res.json({ data: error })
        }
    }

    async deletekelas(req, res) {
        try {
            const id = req.params['id'];
            const datakelas= await kelasmodel.deleteByID(id)

            if (datakelas == 0) {
                return res.json({ message: 'Link yang dimaksud tidak ada' });
            }

            const deletedID = await siswamodel.deleteByID(id)

            if (deletedID === 0) {
                return res.status(400).json({ message: "Tidak ada data kelas yang berhasil dihapus", data: deletedID });
            }

            res.status(200).json({ message: "Data pengguna berhasil dihapus" });
        } catch (error) {
            res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data', data: error });
        }
    }


    async tambahKelas(req, res) {
        try {
            const {kelas } = req.body
            const id = uuidv4()
            const datakelas = await kelasmodel.addKelas(id, kelas)
            res.json({ message: 'data berhasil ditambah', data: datakelas })
        }
        catch (error) {
            res.json({ message: error })
        }
    }

    async editKelas(req, res) {
        try {
            const id = req.params.id
            const datasiswa= await siswamodel.getSiswaById(id)
            if (datasiswa== 0) {
                return res.json({ message: 'Link yang dimaksud tidak ada' });
            }
            const { name, alamat,kelas } = req.body || datasiswa
            const editData = await siswamodel.editSiswa(id,name, alamat, kelas)
            if (editData === 0) {
                return res.status(400).json({ message: "Tidak ada data siswa yang berhasil diubah", data: editData });
            }
            res.status(200).json({ message: "Data siswa berhasil diubah", data: editData });

        }
        catch (error) {
            res.status(500).json({ message: 'Terjadi kesalahan saat mengubah data', data: error });
        }
    }
}

module.exports = kelas