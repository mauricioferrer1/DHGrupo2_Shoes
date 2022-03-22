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
	`price` INT NOT NULL,
	`category_id` INT(6) NOT NULL,
	`season_id` INT(6) NOT NULL,
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

INSERT INTO `products` VALUES (1,'Nike Comics Sun', 'Nike Comics Sun, a true work of art in which the shoe is like a white canvas, entirely hand painted, as if it were a real Kandinsky, directly at your feet. ', 'zapato 1.png', 'nikeComic1.jfif', 'nikeComic2.jfif', 'nikeComic3.jfif',120,1,1),(2,'Adidas RUN 60S 2.0', 'El legado deportivo de adidas estar a flor de piel en estos tenis inspirados en el running. Fusionando lo mejor de las siluetas de las pistas de atletismo y la moda urbana moderna, lucen una estética atemporal que combina a la perfección con tu día a día. ', 'zapato 2.png', 'AdidasRun1.jpg', 'AdidasRun2.jpg', 'AdidasRun3.jpg',200,2,1),(3,'Puma Suede red', ' The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation and it’s stayed classic through it all. This year, we relaunch the Suede with fresh colorways and subtle design updates. Classic as ever, for all-time.', 'suede classic rojo.png', 'Suede Classic rojo atras.png', 'suede classic rojo arriba.png', 'suede classic rojo abajo y arriba.png',250,3,2), (4,'Adidas donovan issue ', ' Detailing Donovan Mitchells path from the playground to stardom, Spidas newest signature sneakers from adidas Basketball are all about the journey.', 'zapato 3.png', 'donovanTop.jpg', 'donovanBack.jpg', 'donovanAlt.jpg',300,2,2),(5,'Adidas donovan issue ', ' "Prototipo tras prototipo. Innovación tras innovación. Prueba tras prueba. Únete a nosotros en la busqueda constante de maximizar y armonizar el peso, la comodidad y en rendimiento', 'zapato 4.png', 'AdidasBoost1.jpg', 'AdidasBoost2.jpg', 'AdidasBoost3.jpg',150,2,1),(6,'Disney Princess', ' A tu bebé a veces le cuesta elegir cuál es su princesa favorita. Por suerte, con estas zapatillas adidas no tendrá que hacerlo. Presentan un exterior de cuero sintético muy resistente al desgaste y un cierre con tiras ajustables de cierre por contacto que le ofrece un ajuste seguro. Los estampados celebran la diversidad de las princesas Disney.', 'DisneyPrincess.jpg', 'DisneyPrincess1.jpg', 'DisneyPrincess2.jpg', 'DisneyPrincess3.jpg',150,1,1),(7,'Super Star Lego', ' Para los jóvenes que dan sus primeros pasos, esta silueta es divertida, práctica y seguramente será nominada a los mejores premios de calzado en la guardería o en casa.', 'superstar360lego.jpg', 'superstar360lego1.jpg', 'superstar360lego2.jpg', 'superstar360lego3.jpg',150,1,1),(8,'Tensaur', ' Incluso los miembros más jóvenes de la familia pueden lucir un clásico estilo adidas con estas zapatillas en sus pies. Incorporan tiras ajustables de cierre por contacto para ponerlas y quitarlas con facilidad y el exterior resistente brinda sujeción para que se puedan mover con comodidad en interiores y exteriores.', 'tensaur.jpg', 'tensaur1.jpg', 'tensaur2.jpg', 'tensaur3.jpg',150,1,2),(9,'Lion King', 'Si a tu bebé la fascina el rey de la selva, estas zapatillas adidas de inspiración tenística le encantarán. El exterior presenta un estampado de la película de Disney El Rey León e incluye la cara de Simba en la lengüeta. El cierre con tiras ajustables de cierre por contacto te permite ponerlos fácilmente y ofrece una gran sujeción.', 'disneylionking.jpg', 'disneylionking1.jpg', 'disneylionking2.jpg', 'disneylionking3.jpg',150,1,1),(10,'Adizero Tenis', 'La velocidad compra tiempo. El tiempo gana puntos. Por eso estas zapatillas de tenis adidas Adizero Club para niños fueron creadas para llevarte a la pelota más rápido. Su cómodo exterior de malla incluye un acolchado en el talón que sujeta tu pie en los movimientos rápidos. La mediasuela de EVA amortigua los impactos y la suela de gran agarre Adiwear te permite moverte con rapidez en todo tipo de superficies.', 'adizerotenis.jpg', 'adizerotenis1.jpg', 'adizerotenis2.jpg', 'adizerotenis3.jpg',150,1,2),(11,'PostMove MID', 'estas zapatillas son la combinación perfecta entre deporte y estilo. Sus revestimientos icónicos les imprimen una estética tipo vintage a este modelo actualizado. Incorporan un panel Cloudfoam que ofrece una comodidad duradera y un diseño Geofit alrededor del tobillo que proporciona un ajuste ideal.', 'postmovemid.jpg', 'postmovemid1.jpg', 'postmovemid2.jpg', 'postmovemid3.jpg',150,2,2),(12,'Run Falcon', 'Su exterior de malla ofrece transpirabilidad que mantiene tus pies frescos de la mañana a la noche. La suela tipo cupsole de caucho brinda la estabilidad necesaria para enfrentarte a todo lo que te depare el día.', 'RunFalcon.jpg', 'RunFalcon1.jpg', 'RunFalcon2.jpg', 'RunFalcon3.jpg',150,2,2),(13,'Duramo', 'El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos.Hechas con una serie de materiales reciclados, su exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.', 'duramo.jpg', 'duramo1.jpg', 'duramo2.jpg', 'duramo3.jpg',150,2,1),(14,'Boost', 'La ZXiencia expande el universo ZX con brillo. Ponete las ZX 2K Boost 2.0 para experimentar la comodidad y amortiguación de la mediasuela Boost, y disfrutar el brillo del diseño luminoso y audaz del exterior. Atraé miradas. Disfrutá de todo.', 'boost.jpg', 'boost1.jpg', 'boost2.jpg', 'boost3.jpg',150,3,2),(15,'Boujirun', 'Actualizá tu look adidas retro con estas zapatillas inspiradas en el running. Los toques de color le imprimen estilo a tu look. El exterior de cuero suave y la mediasuela robusta llevan tu calzado a otro nivel.', 'boujirun.jpg', 'boujirun1.jpg', 'boujirun2.jpg', 'boujirun3.jpg',150,3,1),(16,'Galaxy', 'Estas zapatillas adidas amortiguan cada impulso y aterrizaje para pasos cómodos, sin importar la distancia. Más velocidad. Más comodidad. Más kilómetros. ¡No vas a querer parar!', 'Galaxy.jpg', 'Galaxy1.jpg', 'Galaxy2.jpg', 'Galaxy3.jpg',150,3,1);
UNLOCK TABLES;


LOCK TABLES `inventory` WRITE;

INSERT INTO `inventory` VALUES (1,1,1,1,100),(2,2,2,2,100),(3,3,2,2,100),(4,4,1,2,100),(5,5,1,3,100),(6,6,1,4,100),(7,7,1,1,100),(8,8,1,1,100),(9,9,2,2,100),(10,10,2,2,100),(11,11,1,2,100),(12,12,1,3,100),(13,13,1,4,100),(14,14,1,1,100),(15,15,2,2,100),(16,16,1,2,100);
UNLOCK TABLES;




