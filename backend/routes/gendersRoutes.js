import { Router } from "express";
import {
  getGenders,
  getGender,
  postGender,
  putGender,
  deletGender,
} from "../controllers/gendersControllers.js";

export const router = Router();

router
  .get("/", getGenders)
  .get("/:id", getGender)
  .post("/", postGender)
  .put("/:id", putGender)
  .delete("/:id", deletGender);
