USE sakila;

DELIMITER $$

CREATE PROCEDURE ShowIfCostumerIsActive(IN customerEmail VARCHAR(300), OUT is_active INT)
BEGIN
	SELECT
		`active` INTO is_active
	FROM customer
    WHERE customerEmail = email;
END $$

DELIMITER ;