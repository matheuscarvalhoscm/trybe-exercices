USE sakila;

SELECT * FROM film;
SELECT film_id, title,
	IF(title LIKE 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
    AS `conheço o filme?` FROM film;
    
SELECT title, rating,
	CASE
		WHEN rating LIKE 'G' THEN 'Livre para todos'
        WHEN rating LIKE 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating LIKE 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating LIKE 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS `público-alvo`
    FROM film;