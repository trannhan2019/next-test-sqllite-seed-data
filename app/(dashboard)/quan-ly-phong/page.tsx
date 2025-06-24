import { getManyPhong } from "@/actions/phong";
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function QuanLyPhong() {
    const data = await getManyPhong()
    return (
        <div>
            <h1 className="text-2xl font-bold mb-3">Quản lý phòng</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
}