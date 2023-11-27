import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// set values from .env file
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306
});

// if connection is successful
connection.connect((err) => {
    if (err) {
        console.error('Connection to database failed: ');
        process.exit(1);
    } else {
        console.log('Successfully connected to database!');
    }
});

app.get('/userdata/:username', (req, res) => {
    const username = req.params.username;
    connection.query(`SELECT password FROM users WHERE username='${username}'`, (err, result) => {
        if (err) {
            // console.error('Error while fetching user data: ', err);
            res.status(500).send('Internal Server Error');
        } else {
            // console.log('User data fetched successfully!');
            // console.log(result);
            res.status(200).send(result);
        }
    });
});

app.post('/saveuser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(`username: ${username}, password: ${password}, email: ${email}`);
    connection.query(`INSERT INTO users VALUES ('${username}', '${email}', '${password}')`, (err, result) => {
        if (err) {
            // console.error('Error while saving user data: ', err);
            res.status(500).send(err);
        } else {
            // console.log('User data saved successfully!');
            // console.log(result);
            res.status(200).send(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});