export const columsAnalysics = [
  {
    Header: "Date",
    accessor: "date",
    // disableFilter: true,
  },
  {
    Header: "Orders",
    accessor: "orders",
    // filtercolumn: true,
  },
  {
    Header: "Total sales",
    accessor: "total_sales",
    // Filter:ColumnFilter
  },
  {
    Header: "Coupons",
    accessor: "coupons",
    // Filter: ColumnFilter,
  },
  {
    Header: "Returns",
    accessor: "returns",
    // filtercolumn: true,
  },
  {
    Header: "Net sales",
    accessor: "net_sales",
  },
  { Header: "Taxes", accessor: "taxes" },
  {
    Header: "Shipping",
    accessor: "shipping",
    // filtercolumn: true,
  },
  {
    Header: "Total",
    accessor: "total",
  },
];
export interface Product {
  date: string;
  orders: string;
  total_sales: number;
  coupons: string;
  returns: string;
  net_sales: string;
  taxes: string;
  shipping: string;
  total:string
}
export let productsNav: Product[] = [
  {
    date: "1/2",
    orders: "#12594",
    total_sales: 324,
    coupons: "Tomato";
    returns: "Yes";
    net_sales: string;
    taxes: string;
    shipping: string;
    total:string
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