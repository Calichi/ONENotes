USE jugos;

SELECT * FROM tbproducto;

SELECT * FROM tbproducto WHERE sabor = 'Maracuyá';

SELECT * FROM tbproducto WHERE envase = 'Botella de Vidrio';

UPDATE tbproducto SET sabor = 'Citrico' WHERE sabor = 'Limón';

SELECT * FROM tbproducto WHERE sabor = 'Citrico';