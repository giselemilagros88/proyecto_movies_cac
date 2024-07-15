const { conn } = require('../db/db.js');

const getAll = () => {

  const [rows] = conn.query('SELECT * FROM account;');

  return rows;
};

/* module.exports = {
  getAll account
} */