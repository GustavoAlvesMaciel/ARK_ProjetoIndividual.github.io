CREATE DATABASE IF NOT EXISTS ark;

USE ark;

CREATE TABLE IF NOT EXISTS especies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,
    tipoFarm VARCHAR(255) NOT NULL,
    dieta VARCHAR(255) NOT NULL,
    imagem VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS contas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    tipoDeJogo VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) 
);

INSERT INTO contas (nome, genero, tipoDeJogo, email, senha) VALUES
('João', 'Masculino', 'Aventura', 'joao@email.com', 'senha123'),
('Maria', 'Feminino', 'Estratégia', 'maria@email.com', 'senha456'),
('Carlos', 'Masculino', 'Esporte', 'carlos@email.com', 'senha789');

INSERT INTO especies (especie, tipoFarm, dieta, imagem) VALUES
('argentavis', 'Carne e Derivados', 'Carnívora', 'argentavis.jpg'),
('bronto', 'Folhas e Derivados', 'Herbívora', 'bronto.jpg'),
('parassauro', 'Bambu e Derivados', 'Herbívora', 'parassauro.jpg'),
('rex', 'Carne e Derivados', 'Carnívora', 'rex.jpg');
