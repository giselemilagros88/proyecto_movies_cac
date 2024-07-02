import jwt from "jsonwebtoken";
import { config } from "../auth/config/authJWTConfig.js";

const authJWT = (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) return res.status(403).send("You need authorization");

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) return res.status(500).send("The token has expired");

    console.log(decoded);

    next();
  });
};

export { authJWT };
