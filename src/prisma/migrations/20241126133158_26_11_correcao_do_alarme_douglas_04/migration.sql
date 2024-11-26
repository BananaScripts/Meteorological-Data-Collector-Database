/*
  Warnings:

  - Changed the type of `valor` on the `Alarmes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valor` on the `HistoricoAlarme` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Alarmes" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Dados" ALTER COLUMN "Valor" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "HistoricoAlarme" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
