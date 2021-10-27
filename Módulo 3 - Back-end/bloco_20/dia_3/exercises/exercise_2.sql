USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER updateCars1
BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros
SET preco = 40000
WHERE id_carro = 1;

SELECT * FROM carros;
