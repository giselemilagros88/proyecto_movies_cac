import { Router } from "express";
import {
  getMovies,
  getMovie,
  postMovie,
  putMovie,
  deletMovie,
} from "../controllers/moviesControllers.js";

export const router = Router();

router
  .get("/", getMovies)

  .get("/:id", getMovie)

  .post("/", postMovie)

  .put("/:id", putMovie)

  .delete("/:id", deletMovie);
