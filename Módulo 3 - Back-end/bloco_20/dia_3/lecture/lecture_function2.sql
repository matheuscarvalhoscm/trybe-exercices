USE sakila;
DELIMITER $$

CREATE FUNCTION ShowMovieName(id INT)
RETURNS VARCHAR(300) READS SQL DATA
	BEGIN
		DECLARE movieName VARCHAR(300);
		SELECT 
			F.title
		FROM film AS F
        INNER JOIN inventory AS I
        ON I.inventory_id = id
        AND F.film_id = I.film_id
        LIMIT 1
        INTO movieName ;
        RETURN movieName;
END $$

DELIMITER ;

SELECT ShowMovieName(30);
SELECT * FROM inventory;
SELECT title FROM film WHERE film_id = 6;