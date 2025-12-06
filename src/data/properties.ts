export interface IProperty {
  id: string;
  title: string;
  area: string;
  price: number;
  beds: number;
  baths: number;
  image: string;
  x: number;
  y: number;
  type?: "House" | "Flat" | "Studio"
}

export const properties: IProperty[] = [
  {
    id: "n1",
    title: "Modern 1 Bed City Studio",
    area: "Norwich City Centre",
    price: 850,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    x: 52,
    y: 53,
    type: "Studio"
  },
  {
    id: "n2",
    title: "Spacious 2 Bed Riverside Flat",
    area: "Thorpe St Andrew",
    price: 1100,
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    x: 77,
    y: 50,
    type: "Flat"
  },
  {
    id: "n3",
    title: "Cozy Studio Flat",
    area: "Old Catton",
    price: 700,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    x: 55,
    y: 12,
    type: "Flat"
  },
  {
    id: "n4",
    title: "Bright 3 Bed Family Home",
    area: "Eaton",
    price: 1400,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    x: 32,
    y: 75,
    type: "House"
  },
  {
    id: "n5",
    title: "Luxury 2 Bed Penthouse",
    area: "Hellesdon",
    price: 1600,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    x: 38,
    y: 22,
    type: "Flat"
  },
  {
    id: "n6",
    title: "Charming 2 Bed Terrace",
    area: "Lakenham",
    price: 1050,
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
    x: 55,
    y: 72,
    type: "House"
  },
  {
    id: "n7",
    title: "Quiet 1 Bed Ground Floor Flat",
    area: "Hellesdon",
    price: 825,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    x: 32,
    y: 17,
    type: "Flat"
  },
  {
    id: "n8",
    title: "Student-Friendly 4 Bed House",
    area: "West Earlham",
    price: 1800,
    beds: 4,
    baths: 2,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    x: 25,
    y: 55,
    type: "House"
  },

  // ✅ New data below

  {
    id: "n9",
    title: "Compact 1 Bed City Apartment",
    area: "Golden Triangle",
    price: 900,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    x: 48,
    y: 45,
    type: "Flat"
  },
  {
    id: "n10",
    title: "Modern 3 Bed Detached House",
    area: "Cringleford",
    price: 1550,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    x: 20,
    y: 82,
    type: "House"
  },
  {
    id: "n11",
    title: "Affordable Studio for Professionals",
    area: "Sprowston",
    price: 725,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
    x: 70,
    y: 28,
    type: "Studio"
  },
  {
    id: "n12",
    title: "Spacious 4 Bed Suburban Home",
    area: "Trowse",
    price: 1750,
    beds: 4,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    x: 65,
    y: 78,
    type: "House"
  },
  {
    id: "n13",
    title: "Modern 2 Bed City Centre Flat",
    area: "Prince of Wales Road",
    price: 1200,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    x: 50,
    y: 58,
    type: "Flat"
  },
  {
    id: "n14",
    title: "Detached 3 Bed House",
    area: "Drayton",
    price: 1350,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
    x: 18,
    y: 42,
    type: "House"
  },
  {
    id: "n15",
    title: "Stylish 2 Bed Loft Apartment",
    area: "Carrow Road",
    price: 1300,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    x: 60,
    y: 62,
    type: "Flat"
  },
  {
    id: "n16",
    title: "Budget-Friendly 1 Bed Starter Flat",
    area: "Mile Cross",
    price: 675,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    x: 28,
    y: 30,
    type: "Flat"
  },
  {
    id: "n17",
    title: "Large 5 Bed Student House",
    area: "Unthank Road",
    price: 2200,
    beds: 5,
    baths: 3,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
    x: 35,
    y: 50,
    type: "House"
  },
  {
    id: "n18",
    title: "Quiet 2 Bed House",
    area: "Horsford",
    price: 1150,
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
    x: 10,
    y: 20,
    type: "House"
  }
];

