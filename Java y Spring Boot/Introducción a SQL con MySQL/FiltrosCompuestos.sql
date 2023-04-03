USE jugos;

SELECT * FROM tbproducto;

SELECT * FROM tbproducto WHERE precio_lista BETWEEN 28.49 AND 28.52;
SELECT * FROM tbproducto WHERE precio_lista >= 28.49 AND precio_lista <= 28.52;

SELECT * FROM tbproducto WHERE envase = 'Lata' OR envase = 'Botella PET';

SELECT * FROM tbproducto WHERE precio_lista >= 15 AND precio_lista <= 25;

SELECT * FROM tbproducto WHERE (precio_lista >= 15 AND precio_lista <= 25) OR
(envase = 'Lata' OR envase = 'Botella PET');

SELECT * FROM tbproducto WHERE (tamano = '1 Litro' AND precio_lista <= 25) OR
(envase = 'Lata' OR envase = 'Botella PET');