import { connection } from "../connections/mySQLConnection.js";

const createWritter = async (writter) => {
  const query = `INSERT INTO writters (name, last_name) VALUES ("${writter.name}", "${writter.last_name}")`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readWritters = async () => {
  const query = `SELECT * FROM writters`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readWritter = async (id) => {
  const query = `SELECT * FROM writters WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const updateWritter = async (writter) => {
  let fields = [];
  for (let key in writter) {
    if (key !== 'id') {
      fields.push(`${key} = "${writter[key]}"`);
    }
  }
  const query = `UPDATE writters SET ${fields.join(', ')} WHERE id = ${writter.id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteWritter = async (id) => {
  const query = `DELETE FROM writters WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createWritter, readWritters, readWritter, updateWritter, deleteWritter };
