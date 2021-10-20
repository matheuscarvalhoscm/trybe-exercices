USE sakila;

SELECT
	`active`, 
    COUNT(`active`) AS `total` 
FROM customer
GROUP BY `active`;

SELECT
	store_id,
    `active`,
    COUNT(`active`)
FROM customer
GROUP BY store_id, `active`;

SELECT
	AVG(`length`) AS `Média`,
    rating
FROM film
GROUP BY rating ORDER BY `Média`;

SELECT 
	district,
    COUNT(*) AS `Total`
FROM address
GROUP BY district ORDER BY `Total`, district;

