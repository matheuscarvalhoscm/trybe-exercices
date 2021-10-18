USE Pixar;

-- Exercício 7:
SELECT id FROM Movies
WHERE director = 'Andrew Staton';
DELETE FROM BoxOffice
WHERE movie_id IN(1, 2, 5, 6, 9);
DELETE FROM Movies 
WHERE director = 'Andrew Staton';
SELECT * FROM Movies;