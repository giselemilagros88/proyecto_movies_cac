const mysql = require('mysql2');
require('dotenv').config();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.getConnection((error, connection) => {
  if (error) {
  console.error('Hubo un error de conexión: ', error);
  } else {
  console.log('Conexión a la base de datos fue exitosa');
  connection.release();
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database.');

  connection.query('CREATE DATABASE IF NOT EXISTS movie_db', (err, results) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database ensured.');

    connection.changeUser({ database: 'movie_db' }, (err) => {
      if (err) {
        console.error('Error switching to movie_db:', err);
        return;
      }
      console.log('User changed');

      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS movie (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL, 
        director VARCHAR(255) NOT NULL, 
        year INT NOT NULL
      );
      `;

      connection.query(createTableuery, (err, results) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
        console.log('Table ensured.');
      });
    });
  });
});

connection.connect();
module.exports = connection;







module.exports = {
  conn: pool.promise()
};