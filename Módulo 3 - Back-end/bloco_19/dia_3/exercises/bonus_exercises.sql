USE Scientists;

SELECT * FROM Scientists
WHERE name LIKE '%E%';

SELECT name FROM Projects
WHERE name LIKE '%A%'
ORDER BY name;

SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name;

SELECT * FROM AssignedTo
WHERE project IN('AeH3', 'Ast3', 'Che1');

SELECT * FROM Projects 
WHERE Hours > 500;

SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;

SELECT * FROM Projects 
WHERE name NOT LIKE 'A%';

SELECT name FROM Projects 
WHERE code LIKE '%H%';