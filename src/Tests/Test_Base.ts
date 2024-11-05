import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testDatabaseOperations() {
  try {
    // Usuário
    const newUser = await prisma.usuario.create({
      data: { cod_usuario: 99, nome: 'Teste_Usuario', dataNascimento: '2000-01-01', cpf: '99999999999', email: 'teste.usuario@example.com', senha: 'senhaTeste' }
    });
    console.log('Usuário criado:', newUser);

    const updatedUser = await prisma.usuario.update({
      where: { cod_usuario: 99 },
      data: { nome: 'Teste_Usuario_Atualizado' }
    });
    console.log('Usuário atualizado:', updatedUser);


    // Estação
    const newStation = await prisma.estacao.create({
      data: { cod_estacao: 99, macAdress: 'AA:BB:CC:DD:EE:99', nome: 'Teste_Estacao', cidade: 'TesteCidade', estado: 'TesteEstado', numero: 9999, cep: '99999-999' }
    });
    console.log('Estação criada:', newStation);

    const updatedStation = await prisma.estacao.update({
      where: { cod_estacao: 99 },
      data: { nome: 'Teste_Estacao_Atualizada' }
    });
    console.log('Estação atualizada:', updatedStation);


    // Tipo de Parâmetro
    const newTipoParametro = await prisma.tipoParametro.create({
      data: { cod_tipoParametro: 99, nome: 'Teste_TipoParametro', fator: '1.0', offset: '0.0', unidadeMedida: 'TesteUnidade', json: 'testeJson' }
    });
    console.log('Tipo de Parâmetro criado:', newTipoParametro);

    const updatedTipoParametro = await prisma.tipoParametro.update({
      where: { cod_tipoParametro: 99 },
      data: { nome: 'Teste_TipoParametro_Atualizado' }
    });
    console.log('Tipo de Parâmetro atualizado:', updatedTipoParametro);


    // Parâmetro
    const newParametro = await prisma.parametro.create({
      data: { cod_parametro: 99, cod_estacao: 94, cod_tipoParametro: 94 }
    });
    console.log('Parâmetro criado:', newParametro);

    const updatedParametro = await prisma.parametro.update({
      where: { cod_parametro: 99 },
      data: { cod_tipoParametro: 95 }
    });
    console.log('Parâmetro atualizado:', updatedParametro);


    // Dados
    const newDado = await prisma.dados.create({
      data: { cod_dados: 121, cod_parametro: 94, Valor: 100, unixtime: 1627850000 }
    });
    console.log('Dado criado:', newDado);

    const updatedDado = await prisma.dados.update({
      where: { cod_dados: 99 },
      data: { Valor: 101 }
    });
    console.log('Dado atualizado:', updatedDado);


    // Alarme
    const newAlarme = await prisma.alarmes.create({
      data: { cod_alarme: 99, nome: 'Teste_Alarme', valor: '100', condicao: 'Maior que', cod_parametro: 99 }
    });
    console.log('Alarme criado:', newAlarme);

    const updatedAlarme = await prisma.alarmes.update({
      where: { cod_alarme: 99 },
      data: { condicao: 'Menor que' }
    });
    console.log('Alarme atualizado:', updatedAlarme);



    // Histórico de Alarme
    const newHistoricoAlarme = await prisma.historicoAlarme.create({
      data: { cod_historicoAlarme: 99, valor: '105', unixtime: 1627851000, cod_alarme: 94 }
    });
    console.log('Histórico de Alarme criado:', newHistoricoAlarme);

    const updatedHistoricoAlarme = await prisma.historicoAlarme.update({
      where: { cod_historicoAlarme: 99 },
      data: { valor: '106' }
    });
    console.log('Histórico de Alarme atualizado:', updatedHistoricoAlarme);






    await prisma.historicoAlarme.delete({ where: { cod_historicoAlarme: 99 } });
    console.log('Histórico de Alarme deletado.');

    await prisma.alarmes.delete({ where: { cod_alarme: 99 } });
    console.log('Alarme deletado.');

    await prisma.dados.delete({ where: { cod_dados: 121 } });
    console.log('Dado deletado.');
    
    await prisma.parametro.delete({ where: { cod_parametro: 99 } });
    console.log('Parâmetro deletado.');

    await prisma.tipoParametro.delete({ where: { cod_tipoParametro: 99 } });
    console.log('Tipo de Parâmetro deletado.');

    await prisma.usuario.delete({ where: { cod_usuario: 99 } });
    console.log('Usuário deletado.');

    await prisma.estacao.delete({ where: { cod_estacao: 99 } });
    console.log('Estação deletada.');

  } catch (error) {
    console.error('Erro durante operações de teste no banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseOperations();
