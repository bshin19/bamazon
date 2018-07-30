DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE bamazon(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  cost FLOAT default 0,
  stock INT default 0,
  PRIMARY KEY (id)
);
INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Pizza", "Food", 6.95, 8), ("Shell Hair Pin", "Apparel", 2.05, 112), ("Bean Dip", "Food", 2.75, 44),
("Veggie Burger", "Food", 9.95, 11), ("Taco Platter", "Food", 7.50, 6), ("Karate Belt", "Apparel", 16.95, 4);

/* This inserts the long way. Above is shorthand form,
separated by commas.
INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Pizza", "Food", 6.95, 8);

INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Bean Dip", "Food", 2.75, 44);

INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Veggie Burger", "Food", 9.95, 11);

INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Taco Platter", "Food", 7.50, 6);

INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Karate Belt", "Apparel", 16.95, 4);

INSERT INTO bamazon (product_name, department, cost, stock)
VALUES ("Shell Hair Pin", "Apparel", 2.05, 112);
*/