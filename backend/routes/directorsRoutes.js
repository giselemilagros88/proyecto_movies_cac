import { Router } from "express";
import {
  getDirectors,
  getDirector,
  postDirector,
  putDirector,
  deletDirector,
} from "../controllers/directorsControllers.js";

export const router = Router();

router
  .get("/", getDirectors)
  .get("/:id", getDirector)
  .post("/", postDirector)
  .put("/:id", putDirector)
  .delete("/:id", deletDirector);
