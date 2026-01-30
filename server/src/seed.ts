import { prisma } from "./prisma";

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: "Appartement lumineux - Centre-ville",
        description: "Proche transports, refait à neuf.",
        price: 320000,
        surface: 65,
        rooms: 3,
        bedrooms: 2,
        type: "APARTMENT",
        status: "SALE",
      },
      {
        title: "Maison familiale avec jardin",
        description: "Quartier calme, jardin arboré.",
        price: 480000,
        surface: 120,
        rooms: 5,
        bedrooms: 4,
        type: "HOUSE",
        status: "SALE",
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect().finally(() => process.exit(1));
  });
