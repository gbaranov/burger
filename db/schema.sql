DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured TINYINT(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (id)
    );