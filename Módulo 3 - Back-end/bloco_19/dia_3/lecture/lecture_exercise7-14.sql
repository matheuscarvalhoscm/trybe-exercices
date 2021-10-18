USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%'; 

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%'
AND title LIKE '%lord%'
LIMIT 2;

SELECT * FROM film
WHERE title LIKE '___%gon%'
LIMIT 2;

SELECT * FROM  film
WHERE title LIKE '___%gon%'
AND description LIKE '%Documentary%'
LIMIT 1;

SELECT * FROM film 
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM film 
WHERE description LIKE '%monkey%'
OR description LIKE '%sumo%'
LIMIT 6;
