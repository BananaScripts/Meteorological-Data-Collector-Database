import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Inserindo 5 usuários
    await prisma.usuario.createMany({
      data: [
        { nome: 'Usuario_CM', dataNascimento: '1990-01-01', cpf: '11111111111', email: 'usuario.cm.1@example.com', senha: 'userCM_001' },
        ],
    });
    console.log('1 usuário(s) inserido(s) com sucesso!');

    // Inserindo 5 estações
    await prisma.estacao.createMany({
      data: [
        { macAdress: '08D1F999F194', nome: 'EstacaoMeteorologica_001', cidade: 'São José dos Campos', estado: 'São Paulo', numero: 1350, cep: '12247-014' },
      ],
    });
    console.log('1 estaçõe(s) inserida(s) com sucesso!');

    // Inserindo 5 tipos de parâmetros
    await prisma.tipoParametro.createMany({
      data: [
        { nome: 'Temperatura (°C)', fator: '2.0', offset: '0.1', unidadeMedida: 'Celcius', json: 'temp' },
        { nome: 'Umidade', fator: '1.0', offset: '10', unidadeMedida: 'g/m3', json: 'umi' },
        { nome: 'Pluviometro', fator: '0.5', offset: '2.0', unidadeMedida: 'mm', json: 'plu' },
      ],
    });
    console.log('3 tipos de parâmetro(s) inserido(s) com sucesso!');

    // Inserindo 5 parâmetros
    await prisma.parametro.createMany({
      data: [
        { cod_estacao: 94, cod_tipoParametro: 94 },
        { cod_estacao: 94, cod_tipoParametro: 95 },
        { cod_estacao: 94, cod_tipoParametro: 96 },
      ],
    });
    console.log('3 parâmetro(s) inserido(s) com sucesso!');

    // Inserindo 5 dados
    await prisma.dados.createMany({
      data: [
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
    });
    console.log('3 dado(s) inserido(s) com sucesso!');

    // Inserindo 5 alarmes
    await prisma.alarmes.createMany({
      data: [
        { nome: 'Alarme_Temperatura', valor: '40', condicao: 'Maior que', cod_parametro: 94 },
        { nome: 'Alarme_Umidade', valor: '10', condicao: 'Menor que', cod_parametro: 95 },
        { nome: 'Alarme_Pluviometro', valor: '15', condicao: 'Igual a', cod_parametro: 96 },
      ],
    });
    console.log('3 alarme(s) inserido(s) com sucesso!');

    // Inserindo 5 históricos de alarme
    await prisma.historicoAlarme.createMany({
      data: [
        { valor: '42', unixtime: 1627843000, cod_alarme: 94 },
        { valor: '9', unixtime: 1627844000, cod_alarme: 95 },
      ],
    });
    console.log('2 histórico(s) de alarme inserido(s) com sucesso!\n');

    console.log('Dados da carga mínima inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export default seedDatabase;
