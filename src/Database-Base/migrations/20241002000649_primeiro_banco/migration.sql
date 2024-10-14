-- CreateTable
CREATE TABLE "Usuario" (
    "cod_usuario" SERIAL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estacao" (
    "cod_estacao" SERIAL PRIMARY KEY,
    "macAdress" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Parametro" (
    "cod_parametro" SERIAL PRIMARY KEY,
    "cod_estacao" INTEGER NOT NULL,
    "cod_tipoParametro" INTEGER NOT NULL,
    FOREIGN KEY ("cod_estacao") REFERENCES "Estacao" ("cod_estacao") ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY ("cod_tipoParametro") REFERENCES "TipoParametro" ("cod_tipoParametro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TipoParametro" (
    "cod_tipoParametro" SERIAL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "offset" TEXT NOT NULL,
    "unidadeMedida" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dados" (
    "cod_dados" SERIAL PRIMARY KEY,
    "cod_parametro" INTEGER NOT NULL,
    FOREIGN KEY ("cod_parametro") REFERENCES "Parametro" ("cod_parametro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Alarmes" (
    "cod_alarme" SERIAL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "cod_parametro" INTEGER NOT NULL,
    FOREIGN KEY ("cod_parametro") REFERENCES "Parametro" ("cod_parametro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoricoAlarme" (
    "cod_historicoAlarme" SERIAL PRIMARY KEY,
    "valor" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "cod_alarmes" INTEGER NOT NULL,
    "cod_alarme" INTEGER NOT NULL,
    FOREIGN KEY ("cod_alarme") REFERENCES "Alarmes" ("cod_alarme") ON DELETE RESTRICT ON UPDATE CASCADE
);
