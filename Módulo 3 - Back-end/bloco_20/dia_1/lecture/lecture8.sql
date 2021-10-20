USE sakila;

SELECT 
	rating, 
	AVG(`length`) AS `Média`
FROM film
GROUP BY rating
HAVING `Média` BETWEEN 115.0 AND 121.50;

SELECT 
	rating,
    SUM(replacement_cost) AS `Total`
FROM film
GROUP BY rating
HAVING `Total` > 3950.50 ORDER BY `Total`;