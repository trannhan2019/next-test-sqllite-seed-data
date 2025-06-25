"use server";

import { CBNVWithPhongChucVuTotal } from "@/types/cbnv";
import { prisma } from "@/lib/prisma";

export const getManyCBNV = async ({
  page = 1,
  pageSize = 10,
}): Promise<CBNVWithPhongChucVuTotal> => {
  const cbnv = await prisma.canBoNhanVien.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      so_thu_tu: "asc",
    },
    include: {
      phong: true,
      chuc_vu: true,
    },
  });
  // Lấy tổng số bản ghi để tính toán phân trang
  const total = await prisma.canBoNhanVien.count();
  return { data: cbnv, total };
};
