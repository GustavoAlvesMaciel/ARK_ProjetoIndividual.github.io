CREATE DATABASE ark;

USE ark;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    modoJogo VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE especies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,
    tipoFarm VARCHAR(255) NOT NULL,
    dieta VARCHAR(255) NOT NULL,
    imagem VARCHAR(255),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE mutacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    ancestrais VARCHAR(255) NOT NULL,
    lvl INT NOT NULL,
    hp INT NOT NULL,
    st INT NOT NULL,
    ox INT NOT NULL,
    fo INT NOT NULL,
    we INT NOT NULL,
    dm INT NOT NULL,
    mo INT NOT NULL
);


CREATE TABLE quiz (
    pontuacao VARCHAR(255) NOT NULL,
    tentativa VARCHAR(50) NOT NULL,
    erros VARCHAR(50) NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


INSERT INTO usuario (nome, email, modoJogo, senha) VALUES
('João', 'Masculino', 'PVP', 'joao@email.com', 'senha123'),
('Maria', 'Feminino', 'PVE', 'maria@email.com', 'senha456'),
('Carlos', 'Masculino', 'PVE', 'carlos@email.com', 'senha789');

INSERT INTO especies (especie, tipoFarm, dieta, imagem) VALUES
('argentavis', 'Carne e Derivados', 'Carnívora', 'argentavis.jpg'),
('bronto', 'Folhas e Derivados', 'Herbívora', 'bronto.jpg'),
('parassauro', 'Bambu e Derivados', 'Herbívora', 'parassauro.jpg'),
('rex', 'Carne e Derivados', 'Carnívora', 'rex.jpg');

select * from usuario;
select * from especies;


DROP DATABASE ark;