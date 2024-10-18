-- Definir a codificação da sessão para utf8mb4
SET NAMES 'utf8mb4';
SET CHARACTER SET 'utf8mb4';

-- Criar o banco de dados com a codificação utf8mb4
CREATE DATABASE IF NOT EXISTS mydb
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Utilizar o banco de dados recém-criado
USE mydb;

-- Criar a tabela com a codificação utf8mb4
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir os dados na tabela
INSERT INTO people (name) VALUES 
('Maria'),
('Marcelo'),
('Amanda');
