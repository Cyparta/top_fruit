export interface Product {
  no: number;
  sku: string;
  category: string;
  product_name: string;
  country_of_origin: string;
  amount: string;
  price: string;
  items_sold?: string;
}
export let productsNav: Product[] = [
  {
    no: 1,
    sku: "#12594",
    category: "Vegetables",
    product_name: "Tomato",
    country_of_origin: "local",
    amount: "200 Kilo",
    items_sold: "sold",
    price: "545412 SAR",
  },
  {
    no: 2,
    sku: "#12594",
    category: "fruits",
    product_name: "Aomato",
    country_of_origin: "local",
    amount: "500 Kilo",
    items_sold: "sold",
    price: "545412 SAR",
  },
  {
    no: 3,
    sku: "#12594",
    category: "fruits",
    product_name: "Bomato",
    country_of_origin: "local",
    items_sold: "sold",
    amount: "300 Kilo",
    price: "545412 SAR",
  },
  {
    no: 1,
    sku: "#12594",
    category: "fruits",
    product_name: "Tomato",
    country_of_origin: "local",
    items_sold: "sold",
    amount: "200 Kilo",
    price: "545412 SAR",
  },
];
