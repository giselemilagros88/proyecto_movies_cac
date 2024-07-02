import { Router } from "express";
import {
  getMoviesGenders,
  getMovieGender,
  postMovieGender,
  deletMovieGender,
} from "../controllers/movies_gendersControllers.js";

export const router = Router();

router
  .get("/", getMoviesGenders)
  .get("/:id_movies/:id_genders", getMovieGender)
  .post("/", postMovieGender)
  .delete("/:id_movies/:id_genders", deletMovieGender);
