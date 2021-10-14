USE Scientists;

SELECT * FROM Scientists;

SELECT Name AS `Nome do Projeto`, Hours AS `Tempo de Trabalho` FROM Projects;

SELECT Name FROM Scientists
ORDER BY  Name ASC;

SELECT Name FROM Projects
ORDER BY Name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' para ser concluído ') AS `Duração do projeto` FROM Projects;

SELECT name, hours FROM Projects 
ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT name FROM Projects
ORDER BY hours DESC LIMIT 1;

SELECT name FROM Projects
ORDER BY hours DESC LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') FROM Scientists;
