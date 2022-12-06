/*
  Warnings:

  - Added the required column `userId` to the `Consults` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consults" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Consults" ADD CONSTRAINT "Consults_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
