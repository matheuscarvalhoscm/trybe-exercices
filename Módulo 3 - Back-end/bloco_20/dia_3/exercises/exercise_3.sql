USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER deleteCar
AFTER DELETE ON carros
	FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END $$
DELIMITER ;

INSERT INTO carros(preco)
VALUE(40000);

SELECT * FROM carros;

DELETE FROM carros 
WHERE id_carro = 1;

SELECT * FROM log_operacoes;
