import express from "express";
import { router as usersRoutes } from "./routes/usersRoutes.js";
import { router as moviesRoutes } from "./routes/moviesRoutes.js";
import { connection } from "./db/connections/mySQLConnection.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
  console.clear();
  console.log(`Listen at http://localhost:${PORT}`);
  connection.connect((err) =>
    err
      ? console.log("Conexion con la DB CaC_Movies fallida")
      : console.log("Conexion con la DB CaC_Movies exitosa")
  );
});
