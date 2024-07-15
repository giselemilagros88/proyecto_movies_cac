const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController.js');

router.get('/', movieController.getAllMovies);

/* router.get("/pages/detalle", (req, res) => {
  res.send(__dirname + "./public/pages/detalle.html");
}); */

router.get('/:id', movieController.getMoviesById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;