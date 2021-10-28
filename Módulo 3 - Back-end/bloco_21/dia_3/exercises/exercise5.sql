USE sakila;

CREATE FULLTEXT INDEX name_index ON category(name);

SELECT * FROM category
WHERE MATCH(name) AGAINST('action');

DROP INDEX name_index ON category;

SELECT * FROM category
WHERE name LIKE ('%action%');