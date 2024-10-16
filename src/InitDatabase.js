const { Client } = require('pg');
const readlineSync = require('readline-sync');
const { exec } = require('child_process');

const client = new Client({
  connectionString: 'postgresql://postgres.kwkjauwkoplxiioaqdwd:codeApiSeth%2301@aws-0-sa-east-1.pooler.supabase.com:5432/postgres'
});

  function runOption() {
    console.log("Escolha uma opção:");
    console.log("1: Atualizar o Database de Produção (Para Deploy/ Usuarios)");
    console.log("2: Atualizar o Database de Desenvolvimento (Para Desenvolvedores)");
    console.log("3: Analisar Schema do Prisma ( GUI )");
  
    const choice = readlineSync.question('Digite o numero da sua escolha: ');
  
    switch (choice) {
      case '1':
        execCommand('npm run migrate && npm run generate && npx prisma migrate deploy');

        client.connect()
        .then(() => {
          console.log('Connected to Supabase!');
          client.end();
        })
        .catch(err => console.error('Connection error', err.stack));
        break;
      case '2':
        execCommand('npm run migrate dev && npm run generate ');


        break;
      case '3':
        execCommand('npx prisma studio --schema ./db/src/prisma/schema.prisma');
        break;

      default:
        console.log('Opção inválida.');
    }
  }
  
  // Função para executar um comando no terminal
  function execCommand(command) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o comando: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Erro: ${stderr}`);
        return;
      }
      console.log(`Resultado:\n${stdout}`);
    });
  }
  
  // Executa a função principal
  runOption();