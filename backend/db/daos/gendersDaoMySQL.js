import { connection } from "../connections/mySQLConnection.js";

const createGender = async (gender) => {
  const query = `INSERT INTO genders (gender) VALUES ("${gender.gender}")`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readGenders = async () => {
  const query = `SELECT * FROM genders`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readGender = async (id) => {
  const query = `SELECT * FROM genders WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const updateGender = async (gender) => {
  let fields = [];
  for (let key in gender) {
    if (key !== 'id') {
      fields.push(`${key} = "${gender[key]}"`);
    }
  }
  const query = `UPDATE genders SET ${fields.join(', ')} WHERE id = ${gender.id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteGender = async (id) => {
  const query = `DELETE FROM genders WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createGender, readGenders, readGender, updateGender, deleteGender };
