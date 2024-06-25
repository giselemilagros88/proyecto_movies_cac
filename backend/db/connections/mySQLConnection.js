import mysql from "mysql2";
import { config } from "../config/mySQLConfig.js";

export const connection = mysql.createConnection(config);
