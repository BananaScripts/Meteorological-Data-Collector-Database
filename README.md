# Meteorological-Data-Collector-Database

## Submodulo criado para o projeto Meteorological-Data-Collector

Neste repositorio iremos criar uma base de dados para o projeto Meteorological-Data-Collector.

### Como rodar:

Adicione o arquivo .env na raiz do Backend:

O .env deve conter:
```
DEPLOY_URL= "postgresql://postgres.kwkjauwkoplxiioaqdwd:codeApiSeth%2301@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DEPLOY_DIRECT_URL="postgresql://postgres.kwkjauwkoplxiioaqdwd:codeApiSeth%2301@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

DATABASE_URL="postgresql://postgres.otkrzedzgbwgywqjrgwq:codeApiSeth%2301@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.otkrzedzgbwgywqjrgwq:codeApiSeth%2301@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

```

Após isso, rode o comando na raiz do  Backend:

```bash
npm run DB
```

* Mais informações em: https://github.com/BananaScripts/Meteorological-Data-Collector-Database/wiki/Como-rodar-o-Database
