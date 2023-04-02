USE jugos;

DROP TABLE tbvendedores;

CREATE TABLE tbvendedores(
matricula VARCHAR(5),
nombre VARCHAR(100),
porcentaje_comision FLOAT,
fecha_admision DATE,
de_vacaciones BIT(1));

ALTER TABLE tbvendedores ADD PRIMARY KEY(MATRICULA);

INSERT INTO tbvendedores(
matricula,nombre,porcentaje_comision,fecha_admision,de_vacaciones)
VALUES('00235', 'Márcio Almeida Silva', 0.08, '2014-08-15', 0);

INSERT INTO tbvendedores(
matricula,nombre,porcentaje_comision,fecha_admision,de_vacaciones)
VALUES('00236', 'Cláudia Morais', 0.08, '2013-09-17', 1);

INSERT INTO tbvendedores(
matricula,nombre,porcentaje_comision,fecha_admision,de_vacaciones)
VALUES('00237', 'Roberta Martins', 0.11, '2017-03-18', 1);

INSERT INTO tbvendedores(
matricula,nombre,porcentaje_comision,fecha_admision,de_vacaciones)
VALUES('00238', 'Péricles Alves', 0.11, '2016-08-21', 0);

SELECT * FROM tbvendedores;