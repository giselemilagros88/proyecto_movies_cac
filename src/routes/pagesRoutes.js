const express = require("express");
const router = express.Router();

router.get("/pages/detalle", (req, res) => {
  res.send(__dirname + "./public/pages/detalle.html");
});

router.post("/pages/iniciosesion", (req, res) => {
  res.send(__dirname + "./public/pages/iniciosesion.html");
});

router.post("/pages/registrarse", (req, res) => {
  res.send(__dirname + "./public/pages/registrarse.html");
});

router.post("/pages", (req, res) => {
  console.log("Ruta para crear un pages");
});
router.put("/pages", (req, res) => {
  console.log("Ruta para modificar un pages");
});
router.delete("/pages", (req, res) => {
  console.log("Ruta para borrar un pages");
});

module.exports = router;
