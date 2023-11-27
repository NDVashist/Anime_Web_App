create database Anime_Web_App;

use Anime_Web_App;

create table users(
username varchar(50) primary key,
email varchar(50) unique not null,
password varchar(50) not null);

show tables;

insert into users values ("GK","gk@gmail.com","123");

insert into users values ("Nikhil","nk@gmail.com","123");

select * from users;