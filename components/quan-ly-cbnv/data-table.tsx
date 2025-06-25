import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Phong } from "@/types/phong";

interface Props {
  data: Phong[];
}

export function CBNVDataTable({ data }: Props) {
  return (
    <div className="rounded-md border">
      <Table className="w-full">
        <TableHeader className="w-full bg-indigo-400">
          <TableRow >
            <TableHead className="text-white">Họ và tên</TableHead>
            <TableHead className="text-white">Chức vụ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <TableRow>
                <TableCell className="font-semibold bg-gray-100" colSpan={2}>
                  {item.ten}
                </TableCell>
              </TableRow>
              {item.can_bo_nhan_vien.map((cbnv) => (
                <TableRow key={cbnv.id}>
                  <TableCell>{cbnv.ten}</TableCell>
                  <TableCell>{cbnv.chuc_vu.ten}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
