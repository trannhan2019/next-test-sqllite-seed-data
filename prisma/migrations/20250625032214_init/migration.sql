-- CreateTable
CREATE TABLE "Phong" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ten" TEXT NOT NULL,
    "ten_viet_tat" TEXT NOT NULL,
    "so_thu_tu" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "ChucVu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ten" TEXT NOT NULL,
    "ten_viet_tat" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CanBoNhanVien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ten" TEXT NOT NULL,
    "phong_id" INTEGER NOT NULL,
    "chuc_vu_id" INTEGER NOT NULL,
    "so_thu_tu" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "CanBoNhanVien_phong_id_fkey" FOREIGN KEY ("phong_id") REFERENCES "Phong" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CanBoNhanVien_chuc_vu_id_fkey" FOREIGN KEY ("chuc_vu_id") REFERENCES "ChucVu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
