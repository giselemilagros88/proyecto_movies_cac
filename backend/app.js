import express from "express";
import { router as usersRoutes } from "./routes/usersRoutes.js";
import { router as moviesRoutes } from "./routes/moviesRoutes.js";
import { router as authRoutes } from "./routes/authRoutes.js";
import { connection } from "./db/connections/mySQLConnection.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.static("frontend"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: `http://localhost:${PORT}`, credentials: true }));
app.use(cookieParser());

app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.clear();
  console.log(`Listen at http://localhost:${PORT}`);
  connection.connect((err) =>
    err
      ? console.log("Conexion con la DB CaC_Movies fallida")
      : console.log("Conexion con la DB CaC_Movies exitosa")
  );
});
