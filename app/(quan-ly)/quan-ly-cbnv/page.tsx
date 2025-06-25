import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { getManyPhong } from "@/actions/phong";
import { PhongColumns } from "@/components/quan-ly-phong/columns";
import { getManyChucVu } from "@/actions/chuc-vu";
import { ChucVuColumns } from "@/components/quan-ly-chuc-vu/columns";
import { CBNVDataTable } from "@/components/quan-ly-cbnv/data-table";
import { CBNVColumns } from "@/components/quan-ly-cbnv/columns";
import { getManyCBNV } from "@/actions/cbnv";
import { searchParams } from "@/types/common";
import { DataTableNoPagination } from "@/components/common/data-table";

export default async function QuanLyCBNV({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  // Lấy các tham số phân trang từ searchParams
  const { page, pageSize } = await searchParams;
  const pageParam = parseInt(page || "1", 10);
  const pageSizeParam = parseInt(pageSize || "10", 10);
  // Lấy dữ liệu từ các action
  const dataPhong = await getManyPhong();
  const dataChucVu = await getManyChucVu();
  const { data: dataCBNV, total } = await getManyCBNV({
    page: pageParam,
    pageSize: pageSizeParam,
  });

  return (
    <Tabs defaultValue="quan-ly-cbnv">
      <TabsList className="gap-5 mb-5">
        <TabsTrigger value="quan-ly-cbnv">Quản lý Cán bộ nhân viên</TabsTrigger>
        <Separator orientation="vertical" />
        <TabsTrigger value="quan-ly-phong">Quản lý Phòng</TabsTrigger>
        <Separator orientation="vertical" />
        <TabsTrigger value="quan-ly-chuc-vu">Quản lý Chức vụ</TabsTrigger>
      </TabsList>
      <TabsContent value="quan-ly-cbnv">
        <CBNVDataTable data={dataCBNV} total={total} columns={CBNVColumns} />
      </TabsContent>
      <TabsContent value="quan-ly-phong">
        <DataTableNoPagination columns={PhongColumns} data={dataPhong} />
      </TabsContent>
      <TabsContent value="quan-ly-chuc-vu">
        <DataTableNoPagination columns={ChucVuColumns} data={dataChucVu} />
      </TabsContent>
    </Tabs>
  );
}
