import {
  createMovie,
  readMovies,
  readMovie,
  updateMovie,
  deleteMovie,
} from "../db/daos/moviesDaoMySQL.js";

const getMovies = async (_, res) => {
  const result = await readMovies();
  res.json(result);
};

const getMovie = (req, res) => {
  res.send(`<h1>Movie ${req.params.id}</h1>`);
};

const postMovie = (_, res) => {
  res.send("<h1>Movie created</h1>");
};

const putMovie = (req, res) => {
  res.send(`<h1>Movie ${req.params.id} updated</h1>`);
};

const deletMovie = (req, res) => {
  res.send(`<h1>Movie ${req.params.id} deleted</h1>`);
};

export { getMovies, getMovie, postMovie, putMovie, deletMovie };
