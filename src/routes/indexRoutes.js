const express = require("express");
const router = express.Router();

router.get("/index_fijo", (req, res) => {
  res.send(__dirname + "./public/index_fijo.html");
});

router.get("/index", (req, res) => {
  res.send(__dirname + "./public/index.html");
});

router.post("/index", (req, res) => {
  console.log("Ruta para crear un item");
});
router.put("/index", (req, res) => {
  console.log("Ruta para modificar un item");
});
router.delete("/index", (req, res) => {
  console.log("Ruta para borrar un item");
});

module.exports = router;
