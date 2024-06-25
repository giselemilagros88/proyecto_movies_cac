import { Router } from "express";
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deletUser,
} from "../controllers/usersControllers.js";

export const router = Router();

router
  .get("/", getUsers)

  .get("/:id", getUser)

  .post("/", postUser)

  .put("/:id", putUser)

  .delete("/:id", deletUser);
