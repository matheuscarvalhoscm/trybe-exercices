USE sakila;

CREATE VIEW film_with_categories AS 
SELECT 
  F.title,
  FC.category_id,
  C.name
FROM 
  film AS F
  INNER JOIN film_category AS FC ON FC.film_id = F.film_id
  INNER JOIN category AS C ON C.category_id = FC.category_id
ORDER BY
  title;