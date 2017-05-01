CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE `burgers` (
	
  -- TABLE CODE TO GO HERE
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
	devoured BOOLEAN,
    date TIMESTAMP,
	PRIMARY KEY (id)
);