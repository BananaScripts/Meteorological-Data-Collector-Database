import { PrismaClient } from '@prisma/client';
import { TestData } from '../../DataConfig/dataConfig_Tests';

const prisma = new PrismaClient();

async function testDatabaseOperations() {
  try {
    // Usuário
    const newUser = await prisma.usuario.create({
      data: TestData.usuario
    });
    console.log('Usuário criado:', newUser);

    const updatedUser = await prisma.usuario.update({
      where: { cod_usuario: 99 },
      data: TestData.usuarioUpdate
    });
    console.log('Usuário atualizado:', updatedUser);


    // Estação
    const newStation = await prisma.estacao.create({
      data: TestData.estacao
    });
    console.log('Estação criada:', newStation);

    const updatedStation = await prisma.estacao.update({
      where: { cod_estacao: 99 },
      data: TestData.estacaoUpdate
    });
    console.log('Estação atualizada:', updatedStation);


    // Tipo de Parâmetro
    const newTipoParametro = await prisma.tipoParametro.create({
      data: TestData.tipoParametro
    });
    console.log('Tipo de Parâmetro criado:', newTipoParametro);

    const updatedTipoParametro = await prisma.tipoParametro.update({
      where: { cod_tipoParametro: 99 },
      data: TestData.tipoParametroUpdate
    });
    console.log('Tipo de Parâmetro atualizado:', updatedTipoParametro);


    // Parâmetro
    const newParametro = await prisma.parametro.create({
      data: TestData.parametro
    });
    console.log('Parâmetro criado:', newParametro);

    const updatedParametro = await prisma.parametro.update({
      where: { cod_parametro: 99 },
      data: TestData.parametroUpdate
    });
    console.log('Parâmetro atualizado:', updatedParametro);


    // Dados
    const newDado = await prisma.dados.create({
      data: TestData.dado
    });
    console.log('Dado criado:', newDado);

    const updatedDado = await prisma.dados.update({
      where: { cod_dados: 99 },
      data: TestData.dadoUpdate
    });
    console.log('Dado atualizado:', updatedDado);


    // Alarme
    const newAlarme = await prisma.alarmes.create({
      data: TestData.alarme
    });
    console.log('Alarme criado:', newAlarme);

    const updatedAlarme = await prisma.alarmes.update({
      where: { cod_alarme: 99 },
      data: TestData.alarmeUpdate
    });
    console.log('Alarme atualizado:', updatedAlarme);



    // Histórico de Alarme
    const newHistoricoAlarme = await prisma.historicoAlarme.create({
      data: TestData.historicoAlarme
    });
    console.log('Histórico de Alarme criado:', newHistoricoAlarme);

    const updatedHistoricoAlarme = await prisma.historicoAlarme.update({
      where: { cod_historicoAlarme: 99 },
      data: TestData.historicoAlarmeUpdate
    });
    console.log('Histórico de Alarme atualizado:', updatedHistoricoAlarme);






    await prisma.historicoAlarme.delete({ where: { cod_historicoAlarme: 99 } });
    console.log('Histórico de Alarme deletado.');

    await prisma.alarmes.delete({ where: { cod_alarme: 99 } });
    console.log('Alarme deletado.');

    await prisma.dados.delete({ where: { cod_dados: 99 } });
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
