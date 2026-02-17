
CREATE Table Skills (
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
name Varchar(150),
number_hours int,
themes_id int
);

CREATE Table Themes (
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
name Varchar(150)
) ;

CREATE Table Students (
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
first_name varchar(50),
last_name varchar(50),
age int,
address varchar(150),
city varchar(50)
);

CREATE Table Students_Skills (
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
Students_id int,
Skills_id int,
quantity int
);


INSERT INTO Students (first_name, last_name, age, address, city)
VALUES
 ('Dubois', 'Barbara', 18, 'rue A', 'Lyon'),
 ('Stéphanie', 'Rolland', 21, 'rue B', 'Caluire'),
 ('Richard', 'Dupont', 22, 'rue C', 'Oullins'),
 ('Georges', 'Dupuis', 19, 'rue D', 'Moins')
 ('Franck', 'Debac', 20, 'rue E', 'Saint-Genis-Laval');

INSERT INTO Skills (‘name’, ‘number_hours’)
VALUES
(‘Créer son CV’, 15),
(‘Se préparer à un entretien’, 20),
(‘Mettre en avant ses savoir-faire’, 10),
(‘Analyse du marché du travail’, 7) ;

INSERT INTO Themes (‘name’)
VALUES
(‘Recherche d’emploi’),
(‘Comptabilité’),
(‘Economie’) ;


mysql> SELECT * FROM Students;
+----+------------+-----------+------+---------+-------------------+
| id | first_name | last_name | age  | address | city              |
+----+------------+-----------+------+---------+-------------------+
|  1 | Dubois     | Barbara   |   18 | rue A   | Lyon              |
|  2 | Stéphanie  | Rolland   |   21 | rue B   | Caluire           |
|  3 | Richard    | Dupont    |   22 | rue C   | Oullins           |
|  4 | Georges    | Dupuis    |   19 | rue D   | Moins             |
|  5 | Franck     | Debac     |   20 | rue E   | Saint-Genis-Laval |
+----+------------+-----------+------+---------+-------------------+
5 rows in set (0.00 sec)

mysql> SELECT first_name, last_name FROM Students;
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Dubois     | Barbara   |
| Stéphanie  | Rolland   |
| Richard    | Dupont    |
| Georges    | Dupuis    |
| Franck     | Debac     |
+------------+-----------+

mysql> SELECT * FROM Students WHERE city='Oullins';
+----+------------+-----------+------+---------+---------+
| id | first_name | last_name | age  | address | city    |
+----+------------+-----------+------+---------+---------+
|  3 | Richard    | Dupont    |   22 | rue C   | Oullins |
+----+------------+-----------+------+---------+---------+

 SELECT Students.id, Students.first_name
    -> FROM Students
    -> INNER JOIN Students_Skills
    ->     ON Students.id = Students_Skills.Students_id;
+----+------------+
| id | first_name |
+----+------------+
|  1 | Dubois     |
+----+------------+


