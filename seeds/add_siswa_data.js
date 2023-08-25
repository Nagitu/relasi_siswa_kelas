/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const { v4: uuidv4 } = require('uuid');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('siswa').del()
  await knex('siswa').insert([
    { id: "5f0a9a1e-7d74-461d-a71f-8f1f8f1d1cab", full_name: 'deni' ,alamat : 'indonesia',id_kelas:"6766b511-f401-4b1c-ad27-2846523fe15f"},
    { id: "e4a1ea4a-aa9f-4b72-b89f-2077aaa56f78", full_name: 'avan' ,alamat : 'indonesia',id_kelas:"6766b511-f401-4b1c-ad27-2846523fe15f",},
  ]);
};
