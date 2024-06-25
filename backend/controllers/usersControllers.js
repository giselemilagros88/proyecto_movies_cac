import {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} from "../db/daos/usersDaoMySQL.js";

const getUsers = async (_, res) => {
  const result = await readUsers();
  res.json(result);
};

const getUser = (req, res) => {
  res.send(`<h1>User ${req.params.id}</h1>`);
};

const postUser = (_, res) => {
  res.send("<h1>User created</h1>");
};

const putUser = (req, res) => {
  res.send(`<h1>User ${req.params.id} updated</h1>`);
};

const deletUser = (req, res) => {
  res.send(`<h1>User ${req.params.id} deleted</h1>`);
};

export { getUsers, getUser, postUser, putUser, deletUser };
