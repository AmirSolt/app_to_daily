/*
  Warnings:

  - The values [BREAKANDENTER] on the enum `CrimeType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `region` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `region` to the `Zone` table without a default value. This is not possible if the table is not empty.
  - Made the column `point` on table `Zone` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CrimeType_new" AS ENUM ('ASSAULT', 'AUTO_THEFT', 'THEFT_FROM_VEHICLE', 'BREAK_AND_ENTER', 'SEXUAL_VIOLATION', 'ROBBERY', 'THEFT_OVER', 'BIKE_THEFT', 'SHOOTING', 'HOMICIDE');
ALTER TABLE "Profile" ALTER COLUMN "crimeTypeFilters" TYPE "CrimeType_new"[] USING ("crimeTypeFilters"::text::"CrimeType_new"[]);
ALTER TABLE "Report" ALTER COLUMN "crimeType" TYPE "CrimeType_new" USING ("crimeType"::text::"CrimeType_new");
ALTER TYPE "CrimeType" RENAME TO "CrimeType_old";
ALTER TYPE "CrimeType_new" RENAME TO "CrimeType";
DROP TYPE "CrimeType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "region";

-- AlterTable
ALTER TABLE "Zone" ADD COLUMN     "region" "Region" NOT NULL,
ALTER COLUMN "point" SET NOT NULL;
