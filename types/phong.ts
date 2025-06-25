import { CBNV } from "./cbnv";

export type Phong = {
  id: number;
  ten: string;
  ten_viet_tat: string;
  so_thu_tu: number;
};

export type PhongWithCBNV = Phong & {
  can_bo_nhan_vien: CBNV[];
};
