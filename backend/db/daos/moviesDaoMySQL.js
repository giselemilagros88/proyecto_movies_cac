import { connection } from "../connections/mySQLConnection.js";

const createMovie = async (movie) => {
  const query = `INSERT INTO Movies (image, title, date, duration, overview, trailer, facebook, twitter, instagram, web, status, originalLenguage, budget, revenue) VALUES ("${movie.image}", "${movie.title}", "${movie.date}", "${movie.duration}", "${movie.overview}", "${movie.trailer}", "${movie.facebook}", "${movie.twitter}", "${movie.instagram}", "${movie.web}", "${movie.status}", "${movie.originalLanguage}", ${movie.budget}, ${movie.revenue})`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMovies = async () => {
  const query = `SELECT * FROM Movies`;
  const [result] = await connection.promise().query(query);
  return result;
};

const readMovie = async (id) => {
  const query = `SELECT * FROM Movies WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const updateMovie = async (movie) => {
 let fields = [];
  for (let key in movie) {
    if (key !== 'id') {
      fields.push(`${key} = "${movie[key]}"`);
    }
  }
  const query = `UPDATE Movies SET ${fields.join(', ')} WHERE id = ${movie.id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

const deleteMovie = async (id) => {
  const query = `DELETE FROM Movies WHERE id = ${id}`;
  const [result] = await connection.promise().query(query);
  return result;
};

export { createMovie, readMovies, readMovie, updateMovie, deleteMovie };
