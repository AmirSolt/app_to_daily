-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "Region" AS ENUM ('TORONTO');

-- CreateEnum
CREATE TYPE "CrimeType" AS ENUM ('BREAKANDENTER', 'ROBBERY');

-- CreateEnum
CREATE TYPE "AdComponent" AS ENUM ('BANNER');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "region" "Region" NOT NULL,
    "crimeTypeFilters" "CrimeType"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "radius" DOUBLE PRECISION NOT NULL,
    "profileId" TEXT NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "point" geometry(Point, 3857) NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "crimeType" "CrimeType" NOT NULL,
    "occur_at" TIMESTAMP(3) NOT NULL,
    "region" "Region" NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "point" geometry(Point, 3857) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportOnZone" (
    "reportId" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "ReportOnZone_pkey" PRIMARY KEY ("reportId","zoneId")
);

-- CreateTable
CREATE TABLE "AdContent" (
    "id" SERIAL NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,

    CONSTRAINT "AdContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdClick" (
    "id" SERIAL NOT NULL,
    "adComponent" "AdComponent" NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "AdClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "zone_idx" ON "Zone" USING GIST ("point");

-- CreateIndex
CREATE INDEX "report_idx" ON "Report" USING GIST ("point");

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_userId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportOnZone" ADD CONSTRAINT "ReportOnZone_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportOnZone" ADD CONSTRAINT "ReportOnZone_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportOnZone" ADD CONSTRAINT "ReportOnZone_userId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdClick" ADD CONSTRAINT "AdClick_userId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
