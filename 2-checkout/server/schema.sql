CREATE DATABASE checkout;

USE checkout;

CREATE TABLE formOne (,
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(36),
  email VARCHAR(60),
  password VARCHAR(33),
  PRIMARY KEY(id)
);

CREATE TABLE formTwo (
  id INT NOT NULL AUTO_INCREMENT,
  addressLineOne VARCHAR(60),
  addressLineTwo VARCHAR(60),
  city VARCHAR(60),
  state VARCHAR(2),
  zip INT,
  phone VARCHAR(11),
  PRIMARY KEY(id)
);

CREATE TABLE formThree (
  id INT NOT NULL AUTO_INCREMENT,
  card INT,
  expiry DATE,
  cvv INT,
  billingZip INT,
  formOne INT NOT NULL,
  formTwo INT NOT NULL,
  FOREIGN KEY(form2) REFERENCES formOne(id),
  FOREIGN KEY(form3) REFERENCES formTwo(id)
);

insert into formOne values ('Mitchell Wintrow', 'mitchwintrow@iamwintrow.com', '123abc');

insert into formThree (card, expiry, cvv, billingZip) values (123456789, '2024-01-27', 998, 81416);