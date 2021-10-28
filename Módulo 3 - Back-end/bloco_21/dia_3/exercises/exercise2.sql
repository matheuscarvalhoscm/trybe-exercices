USE sakila;

-- CREATE VIEW film_info AS
SELECT 
  FA.actor_id,
  CONCAT(A.first_name, ' ', A.last_name) AS actor,
  F.title
FROM 
  actor AS A
  INNER JOIN film_actor AS FA ON FA.actor_id = A.actor_id
  INNER JOIN film AS F ON F.film_id = FA.film_id
ORDER BY
  `actor`;