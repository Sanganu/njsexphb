create database restaurant;
use  restaurant;
create table menu(
 id int auto_increment,
 item_name varchar(40),
 devoured boolean,
 time_created timestamp DEFAULT current_timestamp,
 primary key(id));
 
 alter table restaurant.menu add lastupdate_time timestamp DEFAULT CURRENT_TIMESTAMP;
 
 
 