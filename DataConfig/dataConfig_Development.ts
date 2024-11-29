
export const SeedData = {
    usuarios: [
        { nome: 'Usuario_CM_001', dataNascimento: '1990-01-01', cpf: '11111111111', email: 'usuario.cm.1@example.com', senha: 'userCM1', role: "admin" },
        { nome: 'Usuario_CM_002', dataNascimento: '1991-01-01', cpf: '22222222222', email: 'usuario.cm.2@example.com', senha: 'userCM2', role: "user" },
        { nome: 'Usuario_CM_003', dataNascimento: '1992-01-01', cpf: '33333333333', email: 'usuario.cm.3@example.com', senha: 'userCM3', role: "admin" },
        { nome: 'Usuario_CM_004', dataNascimento: '1993-01-01', cpf: '44444444444', email: 'usuario.cm.4@example.com', senha: 'userCM4', role: "user" },
        { nome: 'Usuario_CM_005', dataNascimento: '1994-01-01', cpf: '55555555555', email: 'usuario.cm.5@example.com', senha: 'userCM5', role: "admin" },
    ],
    estacoes: [
        { macAdress: 'AA:BB:CC:DD:EE:01', nome: 'Estacao_CM_001', cidade: 'Cidade1', estado: 'Estado1', numero: 9901, cep: '00000-001' },
        { macAdress: 'AA:BB:CC:DD:EE:02', nome: 'Estacao_CM_002', cidade: 'Cidade2', estado: 'Estado2', numero: 9902, cep: '00000-002' },
        { macAdress: 'AA:BB:CC:DD:EE:03', nome: 'Estacao_CM_003', cidade: 'Cidade3', estado: 'Estado3', numero: 9903, cep: '00000-003' },
        { macAdress: 'AA:BB:CC:DD:EE:04', nome: 'Estacao_CM_004', cidade: 'Cidade4', estado: 'Estado4', numero: 9904, cep: '00000-004' },
        { macAdress: 'AA:BB:CC:DD:EE:05', nome: 'Estacao_CM_005', cidade: 'Cidade5', estado: 'Estado5', numero: 9905, cep: '00000-005' },
        // Edite os dados das estações conforme necessário
    ],
    tipoParametros: [
        { nome: 'Temperatura Celcius', fator: '2.0', offset: '0.1', unidadeMedida: 'Celcius', json: 'tem' },
        { nome: 'Umidade', fator: '1.0', offset: '10', unidadeMedida: 'g/m3', json: 'umi' },
        { nome: 'Velocidade', fator: '5.0', offset: '0', unidadeMedida: 'km/h', json: 'vel' },
        { nome: 'Luminosidade', fator: '1.5', offset: '2.75', unidadeMedida: 'lux', json: 'lum' },
        { nome: 'Pressão', fator: '0.5', offset: '4.45', unidadeMedida: 'Pa', json: 'pressao' },
        // Edite os dados dos tipos de parâmetros conforme necessário
    ],
    parametros: [
        { cod_estacao: 94, cod_tipoParametro: 94 },
        { cod_estacao: 95, cod_tipoParametro: 95 },
        { cod_estacao: 96, cod_tipoParametro: 96 },
        { cod_estacao: 97, cod_tipoParametro: 97 },
        { cod_estacao: 98, cod_tipoParametro: 98 },
        // Edite os dados dos parâmetros conforme necessário
    ],
    dados: [
        { cod_parametro: 94, Valor: 23.00, unixtime: 1627840000 },
        { cod_parametro: 94, Valor: 22.00, unixtime: 1627840000 },
        { cod_parametro: 94, Valor: 21.00, unixtime: 1627840000 },
        { cod_parametro: 94, Valor: 20.00, unixtime: 1627840000 },
        { cod_parametro: 94, Valor: 19.00, unixtime: 1627840000 },
        { cod_parametro: 95, Valor: 35.00, unixtime: 1627841000 },
        { cod_parametro: 95, Valor: 36.00, unixtime: 1627842000 },
        { cod_parametro: 95, Valor: 37.00, unixtime: 1627843000 },
        { cod_parametro: 95, Valor: 38.00, unixtime: 1627844000 },
        { cod_parametro: 95, Valor: 39.00, unixtime: 1627845000 },
        { cod_parametro: 96, Valor: 25.00, unixtime: 1627841000 },
        { cod_parametro: 96, Valor: 24.00, unixtime: 1627842000 },
        { cod_parametro: 96, Valor: 23.00, unixtime: 1627843000 },
        { cod_parametro: 96, Valor: 22.00, unixtime: 1627844000 },
        { cod_parametro: 96, Valor: 21.00, unixtime: 1627845000 },
        { cod_parametro: 97, Valor: 45.00, unixtime: 1627841000 },
        { cod_parametro: 97, Valor: 44.00, unixtime: 1627842000 },
        { cod_parametro: 97, Valor: 43.00, unixtime: 1627843000 },
        { cod_parametro: 97, Valor: 42.00, unixtime: 1627844000 },
        { cod_parametro: 97, Valor: 41.00, unixtime: 1627845000 },
        { cod_parametro: 98, Valor: 55.00, unixtime: 1627841000 },
        { cod_parametro: 98, Valor: 54.00, unixtime: 1627842000 },
        { cod_parametro: 98, Valor: 53.00, unixtime: 1627843000 },
        { cod_parametro: 98, Valor: 52.00, unixtime: 1627844000 },
        { cod_parametro: 98, Valor: 51.00, unixtime: 1627845000 },
        { cod_parametro: 97, Valor: 40.00, unixtime: 1627843000 },
        { cod_parametro: 98, Valor: 50.00, unixtime: 1627844000 },
        // Edite os dados conforme necessário
    ],
    alarmes: [
        { nome: 'Alarme1', valor: 40.00, condicao: 'Maior que', cod_parametro: 94 },
        { nome: 'Alarme2', valor: 80.00, condicao: 'Menor que', cod_parametro: 95 },
        { nome: 'Alarme3', valor: 60.00, condicao: 'Diferente de', cod_parametro: 96 },
        { nome: 'Alarme4', valor: 80.00, condicao: 'Igual a', cod_parametro: 97 },
        { nome: 'Alarme5', valor: 90.00, condicao: 'Maior que', cod_parametro: 98 },
        // Edite os dados dos alarmes conforme necessário
    ],
    historicoAlarmes: [
        { valor: 42.00, unixtime: 1627840000, cod_alarme: 94 },
        { valor: 58.00, unixtime: 1627841000, cod_alarme: 95 },
        { valor: 93.00, unixtime: 1627842000, cod_alarme: 96 },
        { valor: 80.00, unixtime: 1627843000, cod_alarme: 97 },
        { valor: 140.00, unixtime: 1627844000, cod_alarme: 98 },
        // Edite os dados dos históricos de alarmes conforme necessário
    ]
  };
  
