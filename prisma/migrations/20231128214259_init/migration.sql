/*
  Warnings:

  - Added the required column `url` to the `AdContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdContent" ADD COLUMN     "url" TEXT NOT NULL;
