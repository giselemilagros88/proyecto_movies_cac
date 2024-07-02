import { connection } from "../connections/mySQLConnection.js";

const createMovieGender = async (movieGender) => {
  const query = `INSERT INTO movies_genders (id_movies, id_genders) VALUES (${movieGender.id_movies}, ${movieGender.id_genders})`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMoviesGenders = async () => {
  const query = `SELECT * FROM movies_genders`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMovieGender = async (id_movies, id_genders) => {
  const query = `SELECT * FROM movies_genders WHERE id_movies = ${id_movies} AND id_genders = ${id_genders}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteMovieGender = async (id_movies, id_genders) => {
  const query = `DELETE FROM movies_genders WHERE id_movies = ${id_movies} AND id_genders = ${id_genders}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createMovieGender, readMoviesGenders, readMovieGender, deleteMovieGender };
