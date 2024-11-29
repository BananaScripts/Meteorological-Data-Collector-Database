/*
  Warnings:

  - You are about to alter the column `valor` on the `Alarmes` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `Valor` on the `Dados` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `valor` on the `HistoricoAlarme` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Alarmes" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Dados" ALTER COLUMN "Valor" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "HistoricoAlarme" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(10,2);
