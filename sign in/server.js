import mysql from 'mysql2';

const lables = document.querySelectorAll('.form-control label')

lables.forEach(lable =>{
     lable.innerHTML = lable.innerText
     .split('')
     .map((letter, idx) =>`<span style="tarnsition-delay:${idx * 50 }ms">${letter}</span>`)
     .join('')
});

const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: "G@urav",
     database: "Anime_Web_App",
     port: 3306
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

function isValidUser(){
     const username = document.getElementById('username').value
     const password = document.getElementById('password').value
     // connect to mysql database
}