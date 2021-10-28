USE sakila;

CREATE INDEX postal_code_index ON address(postal_code);

SELECT * FROM address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;
-- mais performatico com o index; 