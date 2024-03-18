const mysql = require('mysql2');

// Crear una conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'nueva_contraseña',
    database: 'InnoDB'
});

module.exports = pool.promise();
