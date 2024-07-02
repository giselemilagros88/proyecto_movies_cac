import {
    createWritter,
    readWritters,
    readWritter,
    updateWritter,
    deleteWritter,
  } from "../db/daos/writtersDaoMySQL.js";
  import { parseWritter, parsePartialWritter } from "../helpers/writtersHelper.js";
  
  const getWritters = async (_, res) => {
    const result = await readWritters();
    res.json(result);
  };
  
  const getWritter = async (req, res) => {
    const result = await readWritter(req.params.id);
    res.json(result);
  };
  
  const postWritter = async (req, res) => {
    const writter = parseWritter(req.query);
    const result = await createWritter(writter);
    res.json(result);
  };
  
  const putWritter = async (req, res) => {
    const writter = parsePartialWritter(req.query);
    writter.id = req.params.id;
    const result = await updateWritter(writter);
    res.json(result);
  };
  
  const deletWritter = async (req, res) => {
    const result = await deleteWritter(req.params.id);
    res.json(result);
  };
  
  export { getWritters, getWritter, postWritter, putWritter, deletWritter };
  