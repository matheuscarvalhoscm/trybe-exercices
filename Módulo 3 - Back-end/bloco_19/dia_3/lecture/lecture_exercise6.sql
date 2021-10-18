USE sakila;
SELECT * FROM film
WHERE rating = 'R'
AND rental_duration = 3
ORDER BY title ASC LIMIT 50; 