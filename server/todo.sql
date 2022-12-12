show databases;
use kdt;
CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  done TINYINT(1) NOT NULL DEFAULT 0
);

DESC todo;

INSERT INTO todo VALUES (null, 'my todo1', 0);
INSERT INTO todo VALUES (null, 'my todo2', 1);
INSERT INTO todo VALUES (null, 'my todo3', 1);
INSERT INTO todo VALUES (null, 'my todo4', 0);
INSERT INTO todo VALUES (null, 'my todo5', 1);
INSERT INTO todo VALUES (null, 'my todo6', 0);

SELECT * FROM todo;