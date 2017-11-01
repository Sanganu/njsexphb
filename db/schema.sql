create database restaurant;
use  restaurant;

create table MENU(
 id int auto_increment,
 item_name varchar(40),
 devoured boolean,
 time_created timestamp DEFAULT current_timestamp,
 primary key(id));
 
 
 
 select * from MENU;
 
 