import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    await prisma.$transaction([
      prisma.historicoAlarme.deleteMany(),
      prisma.alarmes.deleteMany(),
      prisma.dados.deleteMany(),
      prisma.parametro.deleteMany(),
      prisma.tipoParametro.deleteMany(),
      prisma.estacao.deleteMany(),
      prisma.usuario.deleteMany(),
    ]);

    console.log('Todos os dados foram deletados.');

    await prisma.$executeRaw`ALTER SEQUENCE "Usuario_cod_usuario_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "Estacao_cod_estacao_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "TipoParametro_cod_tipoParametro_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "Parametro_cod_parametro_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "Dados_cod_dados_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "Alarmes_cod_alarme_seq" RESTART WITH 94`;
    await prisma.$executeRaw`ALTER SEQUENCE "HistoricoAlarme_cod_historicoAlarme_seq" RESTART WITH 94`;

    console.log("Sequências reiniciadas com sucesso.");
  } catch (error) {
    console.error('Erro ao resetar o banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export default resetDatabase;
