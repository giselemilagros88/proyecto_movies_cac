import { Router } from "express";
import {
  getUsers,
  getUser,
  putUser,
  deletUser,
} from "../controllers/usersControllers.js";
import { authJWT } from "../middlewares/authMiddleware.js";

export const router = Router();

router
  .get("/", authJWT, getUsers)

  .get("/:id", getUser)

  .put("/", putUser)

  .delete("/:id", deletUser);
