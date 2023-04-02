USE jugos;
UPDATE tbvendedores SET nombre = 'Joan Geraldo de la Fonseca Junior', porcentaje_comision = 0.10
WHERE matricula = '00233';
UPDATE tbvendedores SET nombre = 'Clauida Moral', porcentaje_comision = 0.11
WHERE matricula = '00236';

SELECT * FROM tbvendedores;