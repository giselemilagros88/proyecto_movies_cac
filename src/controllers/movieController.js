const db = require('../db/db.js');

const getAllMovies = (req, res) => {
  const sql = 'SELECT * FROM movie';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};


const getMovieByid = (req, res) => {
  const {id} = req.params;
  const sql = 'SELECT * FROM movies WHERE id = ?';
  db.query(sql,[id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


const createMovie = (req, res) => {
  const { title, director, year } = req.body;
  const sql = 'INSERT INTO movie (title, director, year) VALUES (?,?,?)';
  db.uery(sql, [title, director, year], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Movie created', movieId: result.insertId});
  });
};


const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, director, year } = req.body;
  const sql = 'UPDATE movie SET title = ?, director = ?, year = ? WHERE id = ?';
  db.query(sql, [title, director, year, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Movie updated' });  
  });
};


const deleteMovie = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM movie WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Movie deleted' });
  });
};

module.exports = {
  getAllMovies,
  getMovieByid,
  createMovie,
  updateMovie,
  deleteMovie
};