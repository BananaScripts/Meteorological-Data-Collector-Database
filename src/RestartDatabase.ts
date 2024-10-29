import { execSync } from 'child_process';
import seedDatabase from './Functions/seedData';
import resetDatabase from './Functions/restartData';


async function withTimeout(fn: () => Promise<void>, timeout: number) {
  return Promise.race([
    fn(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Tempo limite excedido')), timeout)
    ),
  ]);
}

async function main() {
  try {

    // Reinicia o banco de dados com limite de 5 segundos
    console.log('Reiniciando dados no banco de dados...\n ---\n');
    await withTimeout(resetDatabase, 5000);

    // Popula o banco de dados com limite de 5 segundos
    console.log('-----\nPopulando dados iniciais no banco de dados...\n ---\n');
    await withTimeout(seedDatabase, 5000);

    console.log('-----\nOperações concluídas com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ou executar operações no banco de dados:', error);
  } finally {

    console.log('Operações concluídas.');
  }
}


async function run() {
  console.log('Iniciando comandos do Prisma...');


  await main();
}


run();