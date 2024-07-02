import {
    createDirector,
    readDirectors,
    readDirector,
    updateDirector,
    deleteDirector,
  } from "../db/daos/directorsDaoMySQL.js";
  import { parseDirector, parsePartialDirector } from "../helpers/directorsHelper.js";
  
  const getDirectors = async (_, res) => {
    console.log("1111111111111111111111");
    const result = await readDirectors();
    res.json(result);
  };
  
  const getDirector = async (req, res) => {
    const result = await readDirector(req.params.id);
    res.json(result);
  };
  
  const postDirector = async (req, res) => {
    const director = parseDirector(req.query);
    const result = await createDirector(director);
    res.json(result);
  };
  
  const putDirector = async (req, res) => {
    const director = parsePartialDirector(req.query);
    director.id = req.params.id;
    const result = await updateDirector(director);
    res.json(result);
  };
  
  const deletDirector = async (req, res) => {
    const result = await deleteDirector(req.params.id);
    res.json(result);
  };
  
  export { getDirectors, getDirector, postDirector, putDirector, deletDirector };
  