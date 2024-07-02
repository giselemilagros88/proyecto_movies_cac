import {
    createMovieWritter,
    readMoviesWritters,
    readMovieWritter,
    deleteMovieWritter,
  } from "../db/daos/movies_writtersDaoMySQL.js";
  import { parseMovieWritter } from "../helpers/movies_writtersHelper.js";
  
  const getMoviesWritters = async (_, res) => {
    const result = await readMoviesWritters();
    res.json(result);
  };
  
  const getMovieWritter = async (req, res) => {
    const result = await readMovieWritter(req.params.id_movies, req.params.id_writters);
    res.json(result);
  };
  
  const postMovieWritter = async (req, res) => {
    const movieWritter = parseMovieWritter(req.query);
    const result = await createMovieWritter(movieWritter);
    res.json(result);
  };
  
  const deletMovieWritter = async (req, res) => {
    const result = await deleteMovieWritter(req.params.id_movies, req.params.id_writters);
    res.json(result);
  };
  
  export { getMoviesWritters, getMovieWritter, postMovieWritter, deletMovieWritter };
  