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
export interface Revenue {
  date: string;
  orders: string;
  total_sales: number;
  coupons: string;
  returns: string;
  net_sales: string;
  taxes: string;
  shipping: string;
  total: string;
}
export let revenuedata: Revenue[] = [
  {
    date: "1/2",
    orders: "#12594",
    total_sales: 324,
    coupons: "Tomato",
    returns: "Yes",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "2/2",
    orders: "#12594",
    total_sales: 324,
    coupons: "Tomato",
    returns: "No",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "3/2",
    orders: "#12594",
    total_sales: 524,
    coupons: "Tomato",
    returns: "Yes",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "4/2",
    orders: "#12594",
    total_sales: 424,
    coupons: "Tomato",
    returns: "No",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
];
