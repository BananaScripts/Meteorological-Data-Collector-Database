
export const SeedData = {
    usuarios: [
        { nome: 'Usuario_CM', dataNascimento: '1990-01-01', cpf: '11111111111', email: 'usuario.cm.1@example.com', senha: 'userCM_001' },
    ],
    estacoes: [
        { macAdress: '08D1F999F194', nome: 'EstacaoMeteorologica_001', cidade: 'São José dos Campos', estado: 'São Paulo', numero: 1350, cep: '12247-014' },
    ],
    tipoParametros: [
        { nome: 'Temperatura (°C)', fator: '2.0', offset: '0.1', unidadeMedida: 'Celcius', json: 'temp' },
        { nome: 'Umidade', fator: '1.0', offset: '10', unidadeMedida: 'g/m3', json: 'umi' },
        { nome: 'Pluviometro', fator: '0.5', offset: '2.0', unidadeMedida: 'mm', json: 'plu' },
    ],
    parametros: [
        { cod_estacao: 94, cod_tipoParametro: 94 },
        { cod_estacao: 94, cod_tipoParametro: 95 },
        { cod_estacao: 94, cod_tipoParametro: 96 },
    ],
    dados: [
        { cod_parametro: 94, Valor: 0, unixtime: 1627844000 },
        { cod_parametro: 94, Valor: 0, unixtime: 1627854000 },
        { cod_parametro: 94, Valor: 0, unixtime: 1627864000 },
        { cod_parametro: 95, Valor: 0, unixtime: 1627844000 },
        { cod_parametro: 95, Valor: 0, unixtime: 1627854000 },
        { cod_parametro: 95, Valor: 0, unixtime: 1627864000 },
        { cod_parametro: 96, Valor: 0, unixtime: 1627844000 },
        { cod_parametro: 96, Valor: 0, unixtime: 1627854000 },
        { cod_parametro: 96, Valor: 0, unixtime: 1627864000 },
    ],
    alarmes: [
        { nome: 'Alarme_Temperatura', valor: '40', condicao: 'Maior que', cod_parametro: 94 },
        { nome: 'Alarme_Umidade', valor: '10', condicao: 'Menor que', cod_parametro: 95 },
        { nome: 'Alarme_Pluviometro', valor: '15', condicao: 'Igual a', cod_parametro: 96 },
    ],
    historicoAlarmes: [
        { valor: '42', unixtime: 1627843000, cod_alarme: 94 },
        { valor: '9', unixtime: 1627844000, cod_alarme: 95 },
    ]
}
