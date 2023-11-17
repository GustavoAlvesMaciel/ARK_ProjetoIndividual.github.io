-- Arquivo de apoio, para criar tabelas necessárias para a API funcionar.
-- Execute esses comandos no banco de dados para criar as tabelas.

-- Comandos para MySQL - banco local - ambiente de desenvolvimento

CREATE DATABASE IF NOT EXISTS ark;

USE ark;

CREATE TABLE especies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,
    tipoFarm VARCHAR(255) NOT NULL,
    dieta VARCHAR(255) NOT NULL,
    imagem VARCHAR(255)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    modoJogo VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
);

-- Comandos para criar usuário em banco de dados Azure, SQL Server,
-- com permissão de insert + update + delete + select

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
