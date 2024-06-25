import { connection } from "../connections/mySQLConnection.js";

const createUser = () => {};

const readUsers = async () => {
  const query = "SELECT * FROM Users";
  const [result] = await connection.promise().query(query);
  return result;
};

const readUser = (id) => {};

const updateUser = (id) => {};

const deleteUser = (id) => {};

export { createUser, readUsers, readUser, updateUser, deleteUser };
