DROP TABLE Products;
DROP TABLE Driver;
DROP TABLE Client;
DROP TABLE Orders;

CREATE TABLE Client(
    clientID SERIAL,
    name  VARCHAR(50) NOT NULL,
    lastname  VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    address VARCHAR(50) NOT NULL,
    phone bigint NOT NULL,
	PRIMARY KEY (clientID)   	
);

TRUNCATE TABLE Client CASCADE;

ALTER SEQUENCE Client_clientID_seq RESTART WITH 1;

INSERT INTO Client (name,lastname,email,address,phone) 
VALUES ('jeisson','romero','example@email.com','kr 17 cl 45',3004624680),
('leidy','paz','example@email.com','kr 13 cl 75',3208193001),
('jhonatan','caipa','example@email.com','ak 45 cl 93',3186953187),
('alejandro','jimenez','example@email.com','kr 15c cl 17b',3004645456),
('maria','urrego',null,'av caracas cl 60',3012333445);

CREATE TABLE Products(
    productID SERIAL,        
    quantity int NOT NULL,    
    name VARCHAR(200) NOT NULL,    
	PRIMARY KEY (productID)	
);

TRUNCATE TABLE Products CASCADE;

ALTER SEQUENCE Products_productID_seq RESTART WITH 1;

INSERT INTO Products (name,quantity) 
VALUES ('televisor',1),
('computador',3),
('teclado',10),
('telefono',5),
('mouse',10);

CREATE TABLE Orders(
    orderID SERIAL,    
    clientID SERIAL,
    productID SERIAL,
    driverID SERIAL,
    deliverAddress VARCHAR(200) NOT NULL,    
    deliverdate DATE NOT NULL,
	delivertime TIME NOT NULL,	
	PRIMARY KEY (orderID),
	FOREIGN KEY (clientID) REFERENCES Client (clientID),
	FOREIGN KEY (productID) REFERENCES Products (productID),
    FOREIGN KEY (driverID) REFERENCES Driver (driverID)
);

ALTER SEQUENCE Orders_orderID_seq RESTART WITH 1;

CREATE TABLE Driver(
    driverID SERIAL,        
    name VARCHAR(200) NOT NULL,        
	PRIMARY KEY (driverID)
);

INSERT INTO Driver (name) 
VALUES ('primario'),
('secundario'),
('terciario'),
('cuaternario'),
('quinario');

SELECT * FROM Client;
SELECT * FROM Products;
SELECT * FROM Orders;