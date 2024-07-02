import { connection } from "../connections/mySQLConnection.js";

const createMovieWritter = async (movieWritter) => {
  const query = `INSERT INTO movies_writters (id_movies, id_writters) VALUES (${movieWritter.id_movies}, ${movieWritter.id_writters})`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMoviesWritters = async () => {
  const query = `SELECT * FROM movies_writters`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMovieWritter = async (id_movies, id_writters) => {
  const query = `SELECT * FROM movies_writters WHERE id_movies = ${id_movies} AND id_writters = ${id_writters}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteMovieWritter = async (id_movies, id_writters) => {
  const query = `DELETE FROM movies_writters WHERE id_movies = ${id_movies} AND id_writters = ${id_writters}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createMovieWritter, readMoviesWritters, readMovieWritter, deleteMovieWritter };
