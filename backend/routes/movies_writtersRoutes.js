import { Router } from "express";
import {
  getMoviesWritters,
  getMovieWritter,
  postMovieWritter,
  deletMovieWritter,
} from "../controllers/movies_writtersControllers.js";

export const router = Router();

router
  .get("/", getMoviesWritters)
  .get("/:id_movies/:id_writters", getMovieWritter)
  .post("/", postMovieWritter)
  .delete("/:id_movies/:id_writters", deletMovieWritter);
