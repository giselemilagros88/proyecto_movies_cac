import { Router } from "express";
import {
  getWritters,
  getWritter,
  postWritter,
  putWritter,
  deletWritter,
} from "../controllers/writtersControllers.js";

export const router = Router();

router
  .get("/", getWritters)
  .get("/:id", getWritter)
  .post("/", postWritter)
  .put("/:id", putWritter)
  .delete("/:id", deletWritter);
