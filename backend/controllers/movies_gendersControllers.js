import {
    createMovieGender,
    readMoviesGenders,
    readMovieGender,
    deleteMovieGender,
  } from "../db/daos/movies_gendersDaoMySQL.js";
  import { parseMovieGender } from "../helpers/movies_gendersHelper.js";
  
  const getMoviesGenders = async (_, res) => {
    const result = await readMoviesGenders();
    res.json(result);
  };
  
  const getMovieGender = async (req, res) => {
    const result = await readMovieGender(req.params.id_movies, req.params.id_genders);
    res.json(result);
  };
  
  const postMovieGender = async (req, res) => {
    const movieGender = parseMovieGender(req.query);
    const result = await createMovieGender(movieGender);
    res.json(result);
  };
  
  const deletMovieGender = async (req, res) => {
    const result = await deleteMovieGender(req.params.id_movies, req.params.id_genders);
    res.json(result);
  };
  
  export { getMoviesGenders, getMovieGender, postMovieGender, deletMovieGender };
  