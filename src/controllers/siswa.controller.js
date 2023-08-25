const siswamodel = require('../models/siswa.model')
const express = require('express');
const { v4: uuidv4 } = require('uuid');

class siswa {
    async getAllsiswa(_, res) {
        try {
            const datasiswa = await siswamodel.getAllSiswa()
            res.status(400).json({ data: datasiswa })
        }
        catch (error) {
            res.json({ message: error })
        }
    }
    async getSiswaKelas(_, res) {
        try {
            const datasiswa = await siswamodel.getSiswaKelas()
            res.status(400).json({ data: datasiswa })
        }
        catch (error) {
            res.json({ message: error })
        }
    }

    async getSiswaById(req, res) {
        try {
            const id = req.params['id']
            const dataSiswa = await siswamodel.getSiswaById(id)
            if (dataSiswa == 0) {
                return res.json({ message: "data tidak ada" })
            }
            res.status(400).json({ data: dataSiswa })
        }
        catch (error) {
            res.json({ data: error })
        }
    }

    async deleteSiswa(req, res) {
        try {
            const id = req.params['id'];
            const dataLink = await siswamodel.getSiswaById(id)

            if (dataLink == 0) {
                return res.json({ message: 'Link yang dimaksud tidak ada' });
            }

            const deletedID = await siswamodel.deleteByID(id)

            if (deletedID === 0) {
                return res.status(400).json({ message: "Tidak ada data pengguna yang berhasil dihapus", data: deletedID });
            }

            res.status(200).json({ message: "Data pengguna berhasil dihapus" });
        } catch (error) {
            res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data', data: error });
        }
    }


    async addSiswa(req, res) {
        try {
            const {full_name,alamat,id_kelas } = req.body
            const id = uuidv4()
            const dataLink = await siswamodel.addSiswa(id, full_name, alamat,id_kelas)
            res.json({ message: 'data berhasil ditambah', data: dataLink })
        }
        catch (error) {
            res.json({ message: error })
        }
    }

    async editSiswa(req, res) {
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

module.exports = siswa