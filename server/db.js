<<<<<<< HEAD
import mysql from "mysql"
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
=======
import mysql from "mysql"
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
>>>>>>> a106aadeb1154f1c05a5de2d76d443b0d1876e3a
