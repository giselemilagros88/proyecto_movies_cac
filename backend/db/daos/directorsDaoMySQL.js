import { connection } from "../connections/mySQLConnection.js";

const createDirector = async (director) => {
  const query = `INSERT INTO directors (name, last_name) VALUES ("${director.name}", "${director.last_name}")`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readDirectors = async () => {
  const query = `SELECT * FROM directors`;
  console.log('query: ', query);
  const [result] = await connection.promise().query(query);
  return result;
};

const readDirector = async (id) => {
  const query = `SELECT * FROM directors WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const updateDirector = async (director) => {
  let fields = [];
  for (let key in director) {
    if (key !== 'id') {
      fields.push(`${key} = "${director[key]}"`);
    }
  }
  const query = `UPDATE directors SET ${fields.join(', ')} WHERE id = ${director.id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteDirector = async (id) => {
  const query = `DELETE FROM directors WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createDirector, readDirectors, readDirector, updateDirector, deleteDirector };
