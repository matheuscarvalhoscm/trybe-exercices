USE sakila;
DELIMITER $$

CREATE FUNCTION TotalPayments(id INT)
RETURNS INT READS SQL DATA
	BEGIN
		DECLARE total INT;
		SELECT COUNT(*)
        FROM payment
        WHERE customer_id = id
        INTO total ;
        RETURN total;
	END $$
    
DELIMITER ;

SELECT TotalPayments(50);