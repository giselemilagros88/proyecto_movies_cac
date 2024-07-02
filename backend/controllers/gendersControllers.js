import {
    createGender,
    readGenders,
    readGender,
    updateGender,
    deleteGender,
  } from "../db/daos/gendersDaoMySQL.js";
  import { parseGender, parsePartialGender } from "../helpers/gendersHelper.js";
  
  const getGenders = async (_, res) => {
    const result = await readGenders();
    res.json(result);
  };
  
  const getGender = async (req, res) => {
    const result = await readGender(req.params.id);
    res.json(result);
  };
  
  const postGender = async (req, res) => {
    const gender = parseGender(req.query);
    const result = await createGender(gender);
    res.json(result);
  };
  
  const putGender = async (req, res) => {
    const gender = parsePartialGender(req.query);
    gender.id = req.params.id;
    const result = await updateGender(gender);
    res.json(result);
  };
  
  const deletGender = async (req, res) => {
    const result = await deleteGender(req.params.id);
    res.json(result);
  };
  
  export { getGenders, getGender, postGender, putGender, deletGender };
  