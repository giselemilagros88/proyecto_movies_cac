import {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} from "../db/daos/usersDaoMySQL.js";
import { parseUser } from "../helpers/usersHelper.js";

const getUsers = async (_, res) => {
  const result = await readUsers();
  res.json(result);
};

const getUser = async (req, res) => {
  const result = await readUser(req.params.id);
  res.json(result);
};

const postUser = async (req, res) => {
  const user = parseUser(req.body);
  const result = await createUser(user);
  res.json(result);
};

const putUser = async (req, res) => {
  const user = parseUser(req.body);
  const result = await updateUser(user);
  res.json(result);
};

const deletUser = async (req, res) => {
  const result = await deleteUser(req.params.id);
  res.json(result);
};

export { getUsers, getUser, postUser, putUser, deletUser };
