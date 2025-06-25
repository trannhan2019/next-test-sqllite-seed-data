"use client"
 
import { Phong } from "@/types/phong"
import { ColumnDef } from "@tanstack/react-table"

export const PhongColumns: ColumnDef<Phong>[] = [
    {
      accessorKey: "ten",
      header: "Tên phòng",
    },
    {
      accessorKey: "ten_viet_tat",
      header: "Tên viết tắt",
    },
    {
      accessorKey: "so_thu_tu",
      header: "Số thứ tự",
    },
  ]