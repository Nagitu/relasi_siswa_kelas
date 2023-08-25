const express = require('express');
const knex = require('knex');
const knexfile = require('../../knexfile')
const db = knex(knexfile["development"]);


class kelasmodel {
    async getSemuaKelas() {
        const datakelas = await db.select('*').table('kelas')
        return datakelas
    }
    
    async getKelasById(id){
        const datakelas = await db.select('*').table('kelas').where('id',id)
        return datakelas
    }

    async deleteByID(id) {
        const deleted = await db('siswa').where('id', id).del()
        return deleted
    }

    async addKelas(id,kelas) {
        const data = { id:id ,kelas:kelas }
        const addData = await db('kelas').insert(data)
        return data;
    }

    async editSiswa(id,nama, alamat,kelas){
        const data = { id:id ,kelas:kelas }
        const editData = await db('kelas').update(data).where('id',id)
        return data
    }
}

module.exports =  new kelasmodel()

