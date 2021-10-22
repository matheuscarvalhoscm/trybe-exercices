USE sakila;

DELIMITER $$

CREATE PROCEDURE ShowTenMostPopularActs()
BEGIN 
	SELECT 
		actor_id,
        COUNT(film_id) AS `Total de Filmes`
	FROM film_actor
    GROUP BY actor_id
    ORDER BY `Total de Filmes` DESC LIMIT 10;
END $$

DELIMITER ;