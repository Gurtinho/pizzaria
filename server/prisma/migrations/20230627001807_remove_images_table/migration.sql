/*
  Warnings:

  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_product_id_fkey";

-- DropTable
DROP TABLE "images";
