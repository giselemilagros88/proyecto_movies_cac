import { connection } from "../connections/mySQLConnection.js";
import { parseStringsToArrays } from "../../helpers/moviesHelper.js";

const createMovie = () => {};

const readMovies = async () => {
  const query = `SELECT m.*, 
    GROUP_CONCAT(DISTINCT CONCAT(d.id, ",", d.name, ",", d.last_name)) directors, 
    GROUP_CONCAT(DISTINCT CONCAT(w.id, ",", w.name, ",", w.last_name)) writters, 
    GROUP_CONCAT(DISTINCT g.gender) genders 
    FROM Movies m 
    INNER JOIN Movies_Directors md ON m.id = md.id_movies 
    INNER JOIN Directors d ON d.id = md.id_directors 
    INNER JOIN Movies_Genders mg ON m.id = mg.id_movies 
    INNER JOIN Genders g ON g.id = mg.id_genders 
    INNER JOIN Movies_Writters mw ON m.id = mw.id_movies 
    INNER JOIN Writters w ON w.id = mw.id_writters`;
  const [result] = await connection.promise().query(query);
  const response = result.map((result) => {
    const directors = parseStringsToArrays(result.directors);
    const writters = parseStringsToArrays(result.writters);
    return {
      ...result,
      directors,
      writters,
      genders: result.genders.split(","),
    };
  });
  return response;
};

const readMovie = (id) => {};

const updateMovie = (id) => {};

const deleteMovie = (id) => {};

export { createMovie, readMovies, readMovie, updateMovie, deleteMovie };
