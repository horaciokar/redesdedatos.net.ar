const mysql = require('mysql');
//require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env

const dbConfig = {
  host: "localhost",
  user: "admin",
  password: "1234567890",
  database: "redesdedatos"
};

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
