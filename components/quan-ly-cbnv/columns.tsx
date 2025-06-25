"use client"
 
import { CBNV } from "@/types/cbnv"
import { ColumnDef } from "@tanstack/react-table"

export const CBNVColumns: ColumnDef<CBNV>[] = [
    {
      accessorKey: "ten",
      header: "Tên Cán bộ nhân viên",
    },
    {
      accessorKey: "phong.ten",
      header: "Phòng",
    },
    {
      accessorKey: "chuc_vu.ten",
      header: "Chức vụ",
    },
    {
      accessorKey: "so_thu_tu",
      header: "Số thứ tự",
    },
  ]