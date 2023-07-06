/*
  Warnings:

  - You are about to drop the column `banner` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "banner";

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_product_id_key" ON "images"("product_id");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
