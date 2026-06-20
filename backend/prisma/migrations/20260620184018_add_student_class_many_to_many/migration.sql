/*
  Warnings:

  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_classId_fkey`;

-- DropIndex
DROP INDEX `Student_classId_fkey` ON `Student`;

-- AlterTable
ALTER TABLE `Student` DROP COLUMN `classId`;

-- CreateTable
CREATE TABLE `StudentClass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `classId` INTEGER NOT NULL,

    UNIQUE INDEX `StudentClass_studentId_classId_key`(`studentId`, `classId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudentClass` ADD CONSTRAINT `StudentClass_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentClass` ADD CONSTRAINT `StudentClass_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
