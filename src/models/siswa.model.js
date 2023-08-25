const express = require('express');
const knex = require('knex');
const knexfile = require('../../knexfile')
const db = knex(knexfile["development"]);


class siswamodel {
    async getAllSiswa() {
        const dataSiswa = await db.select('*').table('siswa')
        return dataSiswa
    }

    async getSiswaKelas() {
        const allData= await db.select('*').table('siswa').join('kelas', 'siswa.id_kelas', '=', 'kelas.id')
        return allData
    }
    
    async getSiswaById(id){
        const dataSiswa = await db.select('*').table('siswa').where('id',id)
        return dataSiswa
    }

    async deleteByID(id) {
        const deleted = await db('siswa').where('id', id).del()
        return deleted
    }

    async addSiswa(id,nama, alamat,kelas) {
        const data = { id:id ,full_name: nama, alamat: alamat ,id_kelas:kelas }
        const addData = await db('siswa').insert(data)
        return data;
    }

    async editSiswa(id,nama, alamat,kelas){
        const data = { id:id ,full_name: nama, alamat: alamat ,id_kelas:kelas }
        const editData = await db('siswa').update(data).where('id',id)
        return data
    }
}

module.exports =  new siswamodel()

