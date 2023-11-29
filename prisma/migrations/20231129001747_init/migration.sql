/*
  Warnings:

  - The primary key for the `Report` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ReportOnZone` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ReportOnZone" DROP CONSTRAINT "ReportOnZone_reportId_fkey";

-- AlterTable
ALTER TABLE "Report" DROP CONSTRAINT "Report_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Report_id_seq";

-- AlterTable
ALTER TABLE "ReportOnZone" DROP CONSTRAINT "ReportOnZone_pkey",
ALTER COLUMN "reportId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ReportOnZone_pkey" PRIMARY KEY ("reportId", "zoneId");

-- AlterTable
ALTER TABLE "Zone" ALTER COLUMN "point" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ReportOnZone" ADD CONSTRAINT "ReportOnZone_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
