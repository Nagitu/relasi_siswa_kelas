const express = require('express');
const app = express();
const siswaRoute = require('../routes/siswa.route');
const kelasRoute = require('../routes/kelas.route')
app.use(express.json());

// Middleware untuk mengurai data url-encoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api/v1/siswa', siswaRoute);
app.use('/api/v1/kelas', kelasRoute);


app.listen(4000, () => {
  console.log(`server running on http://localhost:4000`);
});