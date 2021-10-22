USE sakila;

DELIMITER $$

CREATE PROCEDURE ShowMovieInfo(IN categoryName VARCHAR(200))
BEGIN 
	SELECT 
		F.film_id,
        F.title,
        FC.category_id,
        C.`name`
	FROM film AS F
    INNER JOIN film_category AS FC ON FC.film_id = F.film_id
    INNER JOIN category AS C ON C.category_id = FC.category_id
    WHERE categoryName = C.`name`;
END $$

DELIMITER ;
        