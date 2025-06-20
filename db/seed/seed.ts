
import { PrismaClient } from '../../app/generated/prisma/client'
// import { PrismaClient } from '@prisma/client';
import phongData from '../data/phong.json';


async function main() {
  const prisma = new PrismaClient();
  // await prisma.product.deleteMany();

  await prisma.phong.createMany({ data: phongData });

  console.log('Database seeded successfully');
}

main();