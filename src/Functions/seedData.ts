import { PrismaClient } from '@prisma/client';
import { SeedData } from '../../DataConfig/dataConfig_Development';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    await prisma.usuario.createMany({ data: SeedData.usuarios });
    console.log('Usuários inseridos com sucesso!');

    await prisma.estacao.createMany({ data: SeedData.estacoes });
    console.log('Estações inseridas com sucesso!');

    await prisma.tipoParametro.createMany({ data: SeedData.tipoParametros });
    console.log('Tipos de parâmetros inseridos com sucesso!');

    await prisma.parametro.createMany({ data: SeedData.parametros });
    console.log('Parâmetros inseridos com sucesso!');

    await prisma.dados.createMany({ data: SeedData.dados });
    console.log('Dados inseridos com sucesso!');

    await prisma.alarmes.createMany({ data: SeedData.alarmes });
    console.log('Alarmes inseridos com sucesso!');

    await prisma.historicoAlarme.createMany({ data: SeedData.historicoAlarmes });
    console.log('Históricos de alarme inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export default seedDatabase;
