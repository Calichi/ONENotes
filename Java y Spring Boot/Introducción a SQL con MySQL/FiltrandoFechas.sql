USE jugos;

SELECT * FROM tbcliente;

SELECT * FROM tbcliente WHERE fecha_nacimiento = '1995-01-13';

SELECT * FROM tbcliente WHERE fecha_nacimiento < '1995-01-13';

SELECT * FROM tbcliente WHERE fecha_nacimiento >= '1995-01-13';

SELECT * FROM tbcliente WHERE YEAR(fecha_nacimiento) = 1995;

SELECT * FROM tbcliente WHERE DAY(fecha_nacimiento) = 20;