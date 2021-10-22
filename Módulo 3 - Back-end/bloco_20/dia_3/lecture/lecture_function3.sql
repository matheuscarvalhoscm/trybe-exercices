USE sakila;
DELIMITER $$

CREATE FUNCTION TotalOfMovies(category VARCHAR(300))
RETURNS INT READS SQL DATA
	BEGIN
		DECLARE total INT;
		SELECT 
			COUNT(F.title)
		FROM film AS F
        INNER JOIN film_category AS FC
        ON F.film_id = FC.film_id
        INNER JOIN category AS C
        ON FC.category_id = C.category_id
        AND C.name = category
        INTO total;
        RETURN total;
	END $$
    
DELIMITER ;

SELECT TotalOfMovies('Horror');
SELECT * FROM category;
SELECT COUNT(*) FROM film_category WHERE category_id = 11;