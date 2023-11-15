CREATE DATABASE IF NOT EXISTS ark;

USE ark;

CREATE TABLE IF NOT EXISTS especies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,
    tipoFarm VARCHAR(255) NOT NULL,
    dieta VARCHAR(255) NOT NULL,
    imagem VARCHAR(255)
);

INSERT INTO especies (especie, tipoFarm, dieta, imagem) VALUES
('argentavis', 'Carne e Derivados', 'Carnívora', 'argentavis.jpg'),
('bronto', 'Folhas e Derivados', 'Herbívora', 'bronto.jpg'),
('parassauro', 'Bambu e Derivados', 'Herbívora', 'parassauro.jpg'),
('rex', 'Carne e Derivados', 'Carnívora', 'rex.jpg');
