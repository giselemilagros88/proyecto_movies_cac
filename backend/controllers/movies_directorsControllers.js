import {
    createMovieDirector,
    readMoviesDirectors,
    readMovieDirector,
    deleteMovieDirector,
  } from "../db/daos/movies_directorsDaoMySQL.js";
  import { parseMovieDirector } from "../helpers/movies_directorsHelper.js";
  
  const getMoviesDirectors = async (_, res) => {
    const result = await readMoviesDirectors();
    res.json(result);
  };
  
  const getMovieDirector = async (req, res) => {
    const result = await readMovieDirector(req.params.id_movies, req.params.id_directors);
    res.json(result);
  };
  
  const postMovieDirector = async (req, res) => {
    const movieDirector = parseMovieDirector(req.query);
    const result = await createMovieDirector(movieDirector);
    res.json(result);
  };
  
  const deletMovieDirector = async (req, res) => {
    const result = await deleteMovieDirector(req.params.id_movies, req.params.id_directors);
    res.json(result);
  };
  
  export { getMoviesDirectors, getMovieDirector, postMovieDirector, deletMovieDirector };
  