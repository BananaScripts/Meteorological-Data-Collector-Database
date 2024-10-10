-- Inserções na tabela Usuario
INSERT INTO Usuario (nome, dataNascimento, cpf, email, senha) VALUES
('João Silva', '1990-01-15', '12345678900', 'joao.silva@example.com', 'senha123'),
('Maria Oliveira', '1985-03-22', '98765432100', 'maria.oliveira@example.com', 'senha456'),
('Carlos Pereira', '2000-07-10', '11122233344', 'carlos.pereira@example.com', 'senha789');

-- Inserções na tabela Estacao
INSERT INTO Estacao (macAdress, nome, cidade, estado, numero, cep) VALUES
('00:1A:2B:3C:4D:5E', 'Estação Central', 'São Paulo', 'SP', 100, '01000-000'),
('00:1A:2B:3C:4D:5F', 'Estação Norte', 'Rio de Janeiro', 'RJ', 200, '20000-000'),
('00:1A:2B:3C:4D:5G', 'Estação Sul', 'Belo Horizonte', 'MG', 300, '30000-000');

-- Inserções na tabela TipoParametro
INSERT INTO TipoParametro (nome, fator, offset, unidadeMedida) VALUES
('Temperatura', '1.0', '0', '°C'),
('Umidade', '1.0', '0', '%'),
('Pressão', '1.0', '0', 'hPa');

-- Inserções na tabela Parametro
INSERT INTO Parametro (cod_estacao, cod_tipoParametro) VALUES
(1, 1),
(1, 2),
(2, 3);

-- Inserções na tabela Dados
INSERT INTO Dados (cod_parametro, valor, data) VALUES
(1, 25, '2024-10-01'),
(2, 60, '2024-10-01'),
(3, 1013, '2024-10-01');

-- Inserções na tabela Alarmes
INSERT INTO Alarmes (nome, valor, condicao, cod_parametro) VALUES
('Alarme de Temperatura', '>=30', 'ativo', 1),
('Alarme de Umidade', '<=20', 'ativo', 2),
('Alarme de Pressão', '>=1020', 'inativo', 3);

-- Inserções na tabela HistoricoAlarme
INSERT INTO HistoricoAlarme (valor, data, hora, cod_alarme) VALUES
('30', '2024-10-01', '10:00:00', 1),
('15', '2024-10-01', '11:00:00', 2),
('1025', '2024-10-01', '12:00:00', 3);
