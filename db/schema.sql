CREATE SCHEMA `burgers_db` DEFAULT CHARACTER SET utf8;
USE burgers_db;

CREATE TABLE `burgers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(100) NULL,
	`devoured` TINYINT(1) NULL,
	`date` TIMESTAMP NULL,
	PRIMARY KEY(`id`)
);