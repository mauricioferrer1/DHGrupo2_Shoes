CREATE DATABASE  IF NOT EXISTS `shoesDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `shoesDB`;


DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`description` VARCHAR(500) NOT NULL,
	`image` VARCHAR(40) NOT NULL,
	`image1` VARCHAR(40) NOT NULL,
	`image2` VARCHAR(40) NOT NULL,
	`image3` VARCHAR(40) NOT NULL,
	`category_id` INT(6) NOT NULL,
	PRIMARY KEY (`id`)
 
);

CREATE TABLE `sizes` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`size` INT(2) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`color` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `inventory` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`product_id` INT(6) NOT NULL,
	`color_id` INT(6) NOT NULL,
	`size_id` INT(6) NOT NULL,
	`stock` INT NOT NULL,
	`price` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`category` TEXT(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(20) NOT NULL,
	`last_name` VARCHAR(20) NOT NULL,
	`email` VARCHAR(30) NOT NULL UNIQUE,
	`password` VARCHAR(100) NOT NULL,
	`user_category_id` int(6) NOT NULL,
	`avatar_img` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_category` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`user_category` TEXT(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `shopping_cart` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`user_id` INT(6) NOT NULL,
	`purchased_item_id` INT(6) NOT NULL,
	`quantity` INT NOT NULL,
	`purchase_date` DATE NOT NULL,
	PRIMARY KEY (`id`)
);



ALTER TABLE `inventory` ADD CONSTRAINT `inventory_fk0` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);

ALTER TABLE `inventory` ADD CONSTRAINT `inventory_fk1` FOREIGN KEY (`color_id`) REFERENCES `colors`(`id`);

ALTER TABLE `inventory` ADD CONSTRAINT `inventory_fk2` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`);

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`user_category_id`) REFERENCES `user_category`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_fk0` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `shopping_cart_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `shopping_cart_fk1` FOREIGN KEY (`purchased_item_id`) REFERENCES `inventory`(`id`);






LOCK TABLES `sizes` WRITE;

INSERT INTO `sizes` VALUES (1,8),(2,9),(3,10),(4,11),(5,12),(6,13),(7,14);
UNLOCK TABLES;


LOCK TABLES `colors` WRITE;

INSERT INTO `colors` VALUES (1,'Azul'),(2,'Rojo'),(3,'Blanco'),(4,'Negro'),(5,'Gris');
UNLOCK TABLES;


LOCK TABLES `categories` WRITE;

INSERT INTO `categories` VALUES (1,'Niño'),(2,'Hombre'),(3,'Mujer');
UNLOCK TABLES;


LOCK TABLES `user_category` WRITE;

INSERT INTO `user_category` VALUES (1,'User'),(2,'Admin');
UNLOCK TABLES;

LOCK TABLES `products` WRITE;

INSERT INTO `products` VALUES (1,'Nike Comics Sun', 'Nike Comics Sun, a true work of art in which the shoe is like a white canvas, entirely hand painted, as if it were a real Kandinsky, directly at your feet. ', 'zapato 1.png', 'nikeComic1.jfif', 'nikeComic2.jfif', 'nikeComic3.jfif',1),(2,'Adidas RUN 60S 2.0', 'El legado deportivo de adidas estar a flor de piel en estos tenis inspirados en el running. Fusionando lo mejor de las siluetas de las pistas de atletismo y la moda urbana moderna, lucen una estética atemporal que combina a la perfección con tu día a día. ', 'zapato 2.png', 'AdidasRun1.jpg', 'AdidasRun2.jpg', 'AdidasRun3.jpg',2),(3,'Puma Suede red', ' The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation and it’s stayed classic through it all. This year, we relaunch the Suede with fresh colorways and subtle design updates. Classic as ever, for all-time.', 'suede classic rojo.png', 'Suede Classic rojo atras.png', 'suede classic rojo arriba.png', 'suede classic rojo abajo y arriba.png',3), (4,'Adidas donovan issue ', ' Detailing Donovan Mitchells path from the playground to stardom, Spidas newest signature sneakers from adidas Basketball are all about the journey.', 'zapato 3.png', 'donovanTop.jpg', 'donovanBack.jpg', 'donovanAlt.jpg',2),(5,'Adidas donovan issue ', ' "Prototipo tras prototipo. Innovación tras innovación. Prueba tras prueba. Únete a nosotros en la busqueda constante de maximizar y armonizar el peso, la comodidad y en rendimiento', 'zapato 4.png', 'AdidasBoost1.jpg', 'AdidasBoost2.jpg', 'AdidasBoost3.jpg',2);
UNLOCK TABLES;


LOCK TABLES `inventory` WRITE;

INSERT INTO `inventory` VALUES (1,1,1,1,100,120),(2,2,2,2,100,140),(3,2,2,2,100,220),(4,2,1,2,100,320),(5,1,1,3,100,120),(6,1,1,4,100,120),(7,1,1,1,100,120);
UNLOCK TABLES;




