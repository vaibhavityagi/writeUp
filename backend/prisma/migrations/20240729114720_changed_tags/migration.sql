/*
  Warnings:

  - The values [MOTIVATION,CODE] on the enum `Tag` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Tag_new" AS ENUM ('INSPIRATIONAL', 'OTHER', 'DSA', 'TECHNICAL');
ALTER TABLE "Post" ALTER COLUMN "tag" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "tag" TYPE "Tag_new" USING ("tag"::text::"Tag_new");
ALTER TYPE "Tag" RENAME TO "Tag_old";
ALTER TYPE "Tag_new" RENAME TO "Tag";
DROP TYPE "Tag_old";
ALTER TABLE "Post" ALTER COLUMN "tag" SET DEFAULT 'TECHNICAL';
COMMIT;
