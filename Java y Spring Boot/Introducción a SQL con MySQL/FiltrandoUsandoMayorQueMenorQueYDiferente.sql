USE jugos;

SELECT * FROM tbcliente;

SELECT * FROM tbcliente WHERE edad <> 26;

SELECT * FROM tbcliente WHERE nombre < 'Erica Carvajo';
SELECT * FROM tbcliente WHERE nombre > 'Erica Carvajo';
SELECT * FROM tbcliente WHERE nombre <= 'Erica Carvajo';

SELECT * FROM tbproducto;

SELECT * FROM tbproducto WHERE precio_lista = 28.51;

SELECT * FROM tbproducto WHERE precio_lista < 28.51;

SELECT * FROM tbproducto WHERE precio_lista BETWEEN 28.49 AND 28.52;