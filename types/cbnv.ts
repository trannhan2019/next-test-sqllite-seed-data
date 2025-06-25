import { ChucVu } from "./chuc-vu";
import { Phong } from "./phong";

export type CBNV = {
  id: number;
  ten: string;
  so_thu_tu: number;
};

export type CBNVWithChucVu = CBNV & {
  chuc_vu: ChucVu;
};

export type CBNVWithPhong = CBNV & {
  phong: Phong;
};

export type CBNVWithPhongChucVu = CBNV & {
  phong: Phong;
  chuc_vu: ChucVu;
};

export type CBNVWithPhongChucVuTotal = {
  data: CBNVWithPhongChucVu[];
  total: number;
};
