const authJWT = (req, res, next) => {
  console.log(req.cookies);

  next();
};

export { authJWT };
