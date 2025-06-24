
import { PrismaClient } from '../../app/generated/prisma/client'
// import { PrismaClient } from '@prisma/client';
import phongData from '../data/phong.json';
import chucvuData from '../data/chucvu.json';
import cbnvData from '../data/cbnv.json';


async function main() {
  // const prisma = new PrismaClient();
  // await prisma.product.deleteMany();

  // await prisma.phong.createMany({ data: phongData });
  // await prisma.chucVu.createMany({ data: chucvuData });
  // await prisma.canBoNhanVien.createMany({ data: cbnvData });

  console.log(phongData);
}

main()
.catch(e => {
  console.error(e);
  process.exit(1);
})