"use client";

import { CBNV } from "@/types/cbnv";
import { ColumnDef } from "@tanstack/react-table";

export const CBNVColumns: ColumnDef<CBNV>[] = [
  {
    accessorKey: "ten",
    header: "Tên Cán bộ nhân viên",
  },
  {
    accessorKey: "phong.ten",
    header: "Đơn vị công tác",
  },
  {
    accessorKey: "chuc_vu.ten",
    header: "Chức vụ",
  },
];
