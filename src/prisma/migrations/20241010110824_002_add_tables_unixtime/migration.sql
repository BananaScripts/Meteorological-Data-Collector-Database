/*
  Warnings:

  - You are about to drop the column `data` on the `Dados` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `HistoricoAlarme` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `HistoricoAlarme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dados" DROP COLUMN "data",
ADD COLUMN     "unixtime" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "HistoricoAlarme" DROP COLUMN "data",
DROP COLUMN "hora",
ADD COLUMN     "unixtime" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "TipoParametro" ADD COLUMN     "json" TEXT NOT NULL DEFAULT '';
