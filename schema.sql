CREATE DATABASE IF NOT EXISTS api_mvc;
USE api_mvc;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome, email) VALUES
  ('Maria Souza', 'maria@exemplo.com'),
  ('Carlos Lima', 'carlos@exemplo.com'),
  ('Ana Pereira', 'ana@exemplo.com');
