"use client"
 
import { ChucVu } from "@/types/chuc-vu"
import { ColumnDef } from "@tanstack/react-table"

export const ChucVuColumns: ColumnDef<ChucVu>[] = [
    {
      accessorKey: "ten",
      header: "Tên chức vụ",
    },
    {
      accessorKey: "ten_viet_tat",
      header: "Tên viết tắt",
    },
  ]