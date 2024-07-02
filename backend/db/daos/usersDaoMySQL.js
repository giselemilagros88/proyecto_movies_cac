import { connection } from "../connections/mySQLConnection.js";

const createUser = async (user) => {
  const query = `INSERT INTO Users (name, last_name, email, password, birthday, country, isAdmin) VALUES ("${user.name}", "${user.last_name}", "${user.email}", "${user.password}", "${user.birthday}", "${user.country}", ${user.isAdmin})`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readUsers = async () => {
  const query = `SELECT * FROM Users`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readUser = async (id) => {
  const query = `SELECT * FROM Users WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readUserByEmail = async (email) => {
  const query = `SELECT * FROM Users WHERE email = "${email}"`;
  const [result] = await connection.promise().query(query);
  return result;
};

const updateUser = async (user) => {
  const query = `UPDATE Users SET name = "${user.name}", last_name = "${user.last_name}", email = "${user.email}", password = "${user.password}", birthday = "${user.birthday}", country = "${user.country}", isAdmin = ${user.isAdmin} WHERE id = ${user.id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteUser = async (id) => {
  const query = `DELETE FROM Users WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export {
  createUser,
  readUsers,
  readUser,
  readUserByEmail,
  updateUser,
  deleteUser,
};
