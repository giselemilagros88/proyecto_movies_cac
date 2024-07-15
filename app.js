const express = require('express');
const app = express();
require('dotenv').config();

/* Puerto de la aplicación */
const PORT = process.env.PORT;

/* Import de las rutas */
const indexRoutes = require("./src/routes/indexRoutes.js");
const pagesRoutes = require("./src/routes/pagesRoutes.js");
const movieRoutes = require("./src/routes/movieRoutes.js");

app.get('/ping', (req, res) => res.send('pong'));


/* Define carpeta de archivos estaticos */
app.use(express.static('public'));


/* Parsea los datos recibidos por POST */
app.use(express.urlencoded());
app.use(express.json());


/* Validar login */
const auth = () => {
  if (login) {
  next();
  } else {
  res.status(401).redirect('/public/pages/iniciosesion.html');
  }
}


/* Middleware a las Rutas */
app.use("/", indexRoutes);
app.use("/", pagesRoutes);
app.use("/movies", movieRoutes);


app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/pages/404.html");
});


/* Método para correr el server, indicando donde lo tiene que escuchar */
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));