import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator"
import { getManyPhong } from "@/actions/phong";
import { PhongColumns } from "@/components/quan-ly-phong/columns";
import { PhongDataTable } from "@/components/quan-ly-phong/data-table";
import { getManyChucVu } from "@/actions/chuc-vu";
import { ChucVuColumns } from "@/components/quan-ly-chuc-vu/columns";
import { ChucVuDataTable } from "@/components/quan-ly-chuc-vu/data-table";
import { CBNVDataTable } from "@/components/quan-ly-cbnv/data-table";

export default async function QuanLyCBNV() {
  const dataPhong = await getManyPhong();
  const dataChucVu = await getManyChucVu();
console.log(dataPhong)

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
        <CBNVDataTable data={dataPhong} />
      </TabsContent>
      <TabsContent value="quan-ly-phong">
        <PhongDataTable columns={PhongColumns} data={dataPhong} />
      </TabsContent>
      <TabsContent value="quan-ly-chuc-vu">
        <ChucVuDataTable columns={ChucVuColumns} data={dataChucVu} />
      </TabsContent>
    </Tabs>
  );
}
