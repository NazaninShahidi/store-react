export interface IProduct {
  id: string;
  title: string;
  price: string;
  discount: boolean;
  discountPrice: string;
  discountPercent: number;
  star: number;
  category: string;
  new: boolean;
  topSelling: boolean;
  image: Array<string>;
  description?: string;
}

const data: IProduct[] = [
  {
    id: "1",
    title: "T-SHIRT",
    price: "120",
    discount: false,
    discountPrice: "",
    discountPercent: 0,
    star: 4.5,
    category: "casual",
    new: true,
    topSelling: false,
    image: ["T-shirt.png"],
  },
  {
    id: "2",
    title: "SLEEVE STRIPED T-SHIRT",
    price: "160",
    discount: true,
    discountPrice: "130",
    discountPercent: 30,
    star: 4.5,
    category: "casual",
    new: true,
    topSelling: false,
    image: ["srriped-t-shirt.png"],
  },
  {
    id: "3",
    title: "SKINNY FIT JEANS",
    price: "260",
    discount: true,
    discountPrice: "240",
    discountPercent: 30,
    star: 4.5,
    category: "casual",
    new: true,
    topSelling: false,
    image: ["skinny-fit-jeans.png"],
  },
  {
    id: "4",
    title: "CHECKERED SHIRT",
    price: "180",
    discount: false,
    discountPrice: "",
    discountPercent: 0,
    star: 4.5,
    category: "casual",
    new: true,
    topSelling: false,
    image: ["checkered-shirt.png"],
  },
  {
    id: "5",
    title: "VERTICAL STRIPED SHIRT",
    price: "232",
    discount: true,
    discountPrice: "212",
    discountPercent: 20,
    star: 5,
    category: "casual",
    new: false,
    topSelling: true,
    image: ["vertical-striped-shirt.png"],
  },
  {
    id: "6",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "145",
    discount: false,
    discountPrice: "",
    discountPercent: 0,
    star: 4,
    category: "casual",
    new: false,
    topSelling: true,
    image: ["graphic-t-shirt.png"],
  },
  {
    id: "7",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "180",
    discount: false,
    discountPrice: "",
    discountPercent: 0,
    star: 4,
    category: "casual",
    new: false,
    topSelling: true,
    image: ["shorts.png"],
  },
  {
    id: "8",
    title: "FADED SKINNY JEANS",
    price: "210",
    discount: false,
    discountPrice: "",
    discountPercent: 0,
    star: 4,
    category: "casual",
    new: false,
    topSelling: true,
    image: ["skinny-jeans.png"],
  },
  {
    id: "9",
    title: "One Life Graphic T-shirt",
    price: "300",
    discount: true,
    discountPrice: "260",
    discountPercent: 40,
    star: 4.5,
    category: "casual",
    new: false,
    topSelling: false,
    image: [
      "one-life-graphic-t-shirt.png",
      "one-life-graphic-t-shirt-1.png",
      "one-life-graphic-t-shirt-2.png",
    ],
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];

export const getNewProduct = () => {
  const newProductList = data.filter((product) => product.new);
  return newProductList;
};

export const getTopSellingProduct = () => {
  const newProductList = data.filter((product) => product.topSelling);
  return newProductList;
};

export const getProductByCategory = (category: string) => {
  if (category === "All") {
    return data;
  }
  const newProductList = data.filter(
    (product) => product.category === category
  );
  return newProductList;
};

export const getProducById = (id: string) => {
  const newProductList = data.find((product) => product.id === id);
  return newProductList;
};
