const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function insertData() {
  try {
    // Inserindo os usuários (sem `cod_usuario`)
    await prisma.usuario.createMany({
      data: [
        { nome: 'João Silva', dataNascimento: '1990-01-15', cpf: '12345678900', email: 'joao.silva@example.com', senha: 'senha123' },
        { nome: 'Maria Oliveira', dataNascimento: '1985-03-22', cpf: '98765432100', email: 'maria.oliveira@example.com', senha: 'senha456' },
        { nome: 'Carlos Pereira', dataNascimento: '2000-07-10', cpf: '11122233344', email: 'carlos.pereira@example.com', senha: 'senha789' },
      ],
      skipDuplicates: true,
    });

    // Inserindo as estações (sem `cod_estacao`)
    await prisma.estacao.createMany({
      data: [
        { macAdress: '00:1A:2B:3C:4D:5E', nome: 'Estação Central', cidade: 'São Paulo', estado: 'SP', numero: 100, cep: '01000-000' },
        { macAdress: '00:1A:2B:3C:4D:5F', nome: 'Estação Norte', cidade: 'Rio de Janeiro', estado: 'RJ', numero: 200, cep: '20000-000' },
        { macAdress: '00:1A:2B:3C:4D:5G', nome: 'Estação Sul', cidade: 'Belo Horizonte', estado: 'MG', numero: 300, cep: '30000-000' },
      ],
      skipDuplicates: true,
    });

    // Inserindo os tipos de parâmetros (sem `cod_tipoParametro`)
    await prisma.tipoParametro.createMany({
      data: [
        { nome: 'Temperatura', fator: '1.0', offset: '0', unidadeMedida: '°C', json: '' },
        { nome: 'Umidade', fator: '1.0', offset: '0', unidadeMedida: '%' },
        { nome: 'Pressão', fator: '1.0', offset: '0', unidadeMedida: 'hPa' },
      ],
      skipDuplicates: true,
    });

    // Inserindo os parâmetros (sem `cod_parametro`)
    await prisma.parametro.createMany({
      data: [
        { cod_estacao: 1, cod_tipoParametro: 1 },
        { cod_estacao: 1, cod_tipoParametro: 2 },
        { cod_estacao: 2, cod_tipoParametro: 3 },
      ],
      skipDuplicates: true,
    });

    // Inserindo os dados (sem `cod_dados`)
    await prisma.dados.createMany({
      data: [
        { cod_parametro: 1, Valor: 25, unixtime: 1696204800 },  // 2024-10-01 00:00:00 em Unix Time
        { cod_parametro: 2, Valor: 60, unixtime: 1696204800 },
        { cod_parametro: 3, Valor: 1013, unixtime: 1696204800 },
      ],
      skipDuplicates: true,
    });

    // Inserindo os alarmes (sem `cod_alarme`)
    await prisma.alarmes.createMany({
      data: [
        { nome: 'Alarme de Temperatura', valor: '>=30', condicao: 'ativo', cod_parametro: 1 },
        { nome: 'Alarme de Umidade', valor: '<=20', condicao: 'ativo', cod_parametro: 2 },
        { nome: 'Alarme de Pressão', valor: '>=1020', condicao: 'inativo', cod_parametro: 3 },
      ],
      skipDuplicates: true,
    });

    // Inserindo o histórico de alarmes (sem `cod_historicoAlarme`)
    await prisma.historicoAlarme.createMany({
      data: [
        { valor: '30', unixtime: 1696240800, cod_alarme: 1 }, // 2024-10-01 10:00:00 em Unix Time
        { valor: '15', unixtime: 1696244400, cod_alarme: 2 }, // 2024-10-01 11:00:00 em Unix Time
        { valor: '1025', unixtime: 1696248000, cod_alarme: 3 }, // 2024-10-01 12:00:00 em Unix Time
      ],
      skipDuplicates: true,
    });

    console.log('Todos os dados foram inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executando a função
insertData();
