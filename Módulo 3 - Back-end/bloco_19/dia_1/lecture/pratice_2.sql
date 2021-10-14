USE sakila;
SELECT * FROM actor;
SELECT DISTINCT(last_name) FROM actor;
SELECT first_name, last_name FROM actor
ORDER BY first_name DESC, last_name ASC;