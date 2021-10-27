USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER updateCars
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
		NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO carros(preco) VALUE(30000);
SELECT * FROM carros;
