import { connection } from "../connections/mySQLConnection.js";

const createMovieDirector = async (movieDirector) => {
  const query = `INSERT INTO movies_directors (id_movies, id_directors) VALUES (${movieDirector.id_movies}, ${movieDirector.id_directors})`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMoviesDirectors = async () => {
  const query = `SELECT * FROM movies_directors`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMovieDirector = async (id_movies, id_directors) => {
  const query = `SELECT * FROM movies_directors WHERE id_movies = ${id_movies} AND id_directors = ${id_directors}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteMovieDirector = async (id_movies, id_directors) => {
  const query = `DELETE FROM movies_directors WHERE id_movies = ${id_movies} AND id_directors = ${id_directors}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createMovieDirector, readMoviesDirectors, readMovieDirector, deleteMovieDirector };
