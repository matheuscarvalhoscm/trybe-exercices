USE Pixar;

-- Exercício 4
SELECT * FROM Movies;
UPDATE Movies
SET title = 'Ratatouille', year = '2007'
WHERE id = 3;