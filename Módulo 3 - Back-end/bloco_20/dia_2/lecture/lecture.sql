SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.film_id;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.customer_id = a.address_id
ORDER BY c.first_name DESC LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district LIKE 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address) `Total`
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS `Média`
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(s.last_update) = '2006'
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
INNER JOIN sakila.film AS f
ON f.film_id = fa.film_id;
