import { Router } from "express";
import {
  getMoviesDirectors,
  getMovieDirector,
  postMovieDirector,
  deletMovieDirector,
} from "../controllers/movies_directorsControllers.js";

export const router = Router();

router
  .get("/", getMoviesDirectors)
  .get("/:id_movies/:id_directors", getMovieDirector)
  .post("/", postMovieDirector)
  .delete("/:id_movies/:id_directors", deletMovieDirector);
