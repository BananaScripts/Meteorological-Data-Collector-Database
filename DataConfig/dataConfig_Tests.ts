
export const TestData = {
    usuario: { cod_usuario: 99, nome: 'Teste_Usuario', dataNascimento: '2000-01-01', cpf: '99999999999', email: 'teste.usuario@example.com', senha: 'senhaTeste', role: "admin"},
    usuarioUpdate :  { nome: 'Teste_Usuario_Atualizado' },

    estacao: { cod_estacao: 99, macAdress: 'AA:BB:CC:DD:EE:99', nome: 'Teste_Estacao', cidade: 'TesteCidade', estado: 'TesteEstado', numero: 9999, cep: '99999-999' },
    estacaoUpdate: { nome: 'Teste_Estacao_Atualizada' },
    
    tipoParametro: { cod_tipoParametro: 99, nome: 'Teste_TipoParametro', fator: '1.0', offset: '0.0', unidadeMedida: 'TesteUnidade', json: 'testeJson' },
    tipoParametroUpdate: { nome: 'Teste_TipoParametro_Atualizado' },

    parametro: { cod_parametro: 99, cod_estacao: 94, cod_tipoParametro: 99 },
    parametroUpdate: { cod_estacao: 99 },

    dado: { cod_dados: 99, cod_parametro: 99, Valor: 100.00, unixtime: 1627850000 },
    dadoUpdate: { Valor : 105 },

    alarme: { cod_alarme: 99, nome: 'Teste_Alarme', valor: 100.00, condicao: 'Maior que', cod_parametro: 99 },
    alarmeUpdate: { nome: 'Teste_Alarme_Atualizado' },

    historicoAlarme: { cod_historicoAlarme: 99, valor: 105.00, unixtime: 1627851000, cod_alarme: 99 },
    historicoAlarmeUpdate: { valor: 110.00 },
}
