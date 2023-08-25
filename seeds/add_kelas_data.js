/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kelas').del()
  await knex('kelas').insert([
    { id: "653a8801-88a8-430d-a37d-284a57e714e5", kelas: 'Kelas A' },
    { id: "6766b511-f401-4b1c-ad27-2846523fe15f", kelas: 'Kelas B' },
  ]);
};
