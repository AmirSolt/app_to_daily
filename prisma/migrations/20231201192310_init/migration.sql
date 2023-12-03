/*
  Warnings:

  - Added the required column `locationType` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" RENAME CONSTRAINT "User_pkey" TO "Profile_pkey";

-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "locationType" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT NOT NULL;

-- RenameForeignKey
ALTER TABLE "AdClick" RENAME CONSTRAINT "AdClick_userId_fkey" TO "AdClick_profileId_fkey";

-- RenameForeignKey
ALTER TABLE "ReportOnZone" RENAME CONSTRAINT "ReportOnZone_userId_fkey" TO "ReportOnZone_profileId_fkey";

-- RenameForeignKey
ALTER TABLE "Zone" RENAME CONSTRAINT "Zone_userId_fkey" TO "Zone_profileId_fkey";
