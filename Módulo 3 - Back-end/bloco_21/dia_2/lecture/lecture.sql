CREATE DATABASE normalization;
USE normalization;

CREATE TABLE setores (
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  setor VARCHAR(300) NOT NULL
);

CREATE TABLE funcionarios(
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(300) NOT NULL,
  sobrenome VARCHAR(300) NOT NULL,
  email VARCHAR(300),
  telefone VARCHAR(300) NOT NULL,
  data_cadastro DATETIME NOT NULL,
  setor_id INT NOT NULL,
  squad VARCHAR(300),
  FOREIGN KEY (setor_id) REFERENCES setores (setor_id)
);

INSERT INTO setores (setor) 
  VALUES ('Administração'),
         ('Operacional'),
         ('Estratégico'),
         ('Marketing');
         
INSERT INTO funcionarios (nome, sobrenome, email, telefone, data_cadastro, setor_id, squad)
VALUES ('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25',	1,	'Vendas'),
       ('André', 'Freeman', 'andre1990@gmail.com', '(47)999522-4996', '2020-05-05 08:50:25',	2, NULL),
       ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)999855-4669', '2020-05-05 10:55:35',	3, 'Vendas'),
       ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)999200-1556','2020-05-05 11:45:40', 4, NULL);