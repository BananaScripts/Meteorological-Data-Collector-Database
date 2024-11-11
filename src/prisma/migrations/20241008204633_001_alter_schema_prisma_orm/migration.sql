-- CreateTable
CREATE TABLE "Usuario" (
    "cod_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("cod_usuario")
);

-- CreateTable
CREATE TABLE "Estacao" (
    "cod_estacao" SERIAL NOT NULL,
    "macAdress" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "Estacao_pkey" PRIMARY KEY ("cod_estacao")
);

-- CreateTable
CREATE TABLE "TipoParametro" (
    "cod_tipoParametro" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "offset" TEXT NOT NULL,
    "unidadeMedida" TEXT NOT NULL,

    CONSTRAINT "TipoParametro_pkey" PRIMARY KEY ("cod_tipoParametro")
);

-- CreateTable
CREATE TABLE "Parametro" (
    "cod_parametro" SERIAL NOT NULL,
    "cod_estacao" INTEGER NOT NULL,
    "cod_tipoParametro" INTEGER NOT NULL,

    CONSTRAINT "Parametro_pkey" PRIMARY KEY ("cod_parametro")
);

-- CreateTable
CREATE TABLE "Dados" (
    "cod_dados" SERIAL NOT NULL,
    "cod_parametro" INTEGER NOT NULL,
    "Valor" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "Dados_pkey" PRIMARY KEY ("cod_dados")
);

-- CreateTable
CREATE TABLE "Alarmes" (
    "cod_alarme" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "cod_parametro" INTEGER NOT NULL,

    CONSTRAINT "Alarmes_pkey" PRIMARY KEY ("cod_alarme")
);

-- CreateTable
CREATE TABLE "HistoricoAlarme" (
    "cod_historicoAlarme" SERIAL NOT NULL,
    "valor" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "cod_alarme" INTEGER NOT NULL,

    CONSTRAINT "HistoricoAlarme_pkey" PRIMARY KEY ("cod_historicoAlarme")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Estacao_macAdress_key" ON "Estacao"("macAdress");

-- AddForeignKey
ALTER TABLE "Parametro" ADD CONSTRAINT "Parametro_cod_estacao_fkey" FOREIGN KEY ("cod_estacao") REFERENCES "Estacao"("cod_estacao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parametro" ADD CONSTRAINT "Parametro_cod_tipoParametro_fkey" FOREIGN KEY ("cod_tipoParametro") REFERENCES "TipoParametro"("cod_tipoParametro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dados" ADD CONSTRAINT "Dados_cod_parametro_fkey" FOREIGN KEY ("cod_parametro") REFERENCES "Parametro"("cod_parametro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alarmes" ADD CONSTRAINT "Alarmes_cod_parametro_fkey" FOREIGN KEY ("cod_parametro") REFERENCES "Parametro"("cod_parametro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoAlarme" ADD CONSTRAINT "HistoricoAlarme_cod_alarme_fkey" FOREIGN KEY ("cod_alarme") REFERENCES "Alarmes"("cod_alarme") ON DELETE RESTRICT ON UPDATE CASCADE;
