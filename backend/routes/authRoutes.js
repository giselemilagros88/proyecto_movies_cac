import { Router } from "express";
import { login, register } from "../controllers/authControllers.js";

export const router = Router();

router
  .post("/register", register)

  .post("/login", login);
