import {
    createMovie,
    readMovies,
    readMovie,
    updateMovie,
    deleteMovie,
  } from "../db/daos/moviesDaoMySQL.js";
  import { parseMovie, parsePartialMovie } from "../helpers/moviesHelper.js";
  
  const getMovies = async (_, res) => {
    const result = await readMovies();
    res.json(result);
  };
  
  const getMovie = async (req, res) => {
    const result = await readMovie(req.params.id);
    res.json(result);
  };
  
  const postMovie = async (req, res) => {
    const movie = parseMovie(req.query);
    const result = await createMovie(movie);
    res.json(result);
  };
  
  const putMovie = async (req, res) => {
    const movie = parsePartialMovie(req.query);
    movie.id = req.params.id;
    const result = await updateMovie(movie);
    res.json(result);
  };
  
  const deletMovie = async (req, res) => {
    const result = await deleteMovie(req.params.id);
    res.json(result);
  };
  
  export { getMovies, getMovie, postMovie, putMovie, deletMovie };
  