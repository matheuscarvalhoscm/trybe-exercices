SELECT t1.replacement_cost, t2.film_id
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

SELECT t1.title, t2.length
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;
