import ColumnFilter from "@/components/common/ColumFilter";

export interface columsinterface {
  Header: string;
  accessor: string;
  disableFilter?: boolean;
  filtercolumn?: boolean;
}
export const colums = [
  {
    Header: "NO",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "SkU",
    accessor: "sku",
    filtercolumn: true,
  },
  {
    Header: "Category",
    accessor: "category",
    Filter: ColumnFilter,
  },
  {
    Header: "country of origin",
    accessor: "country_of_origin",
  },
  {
    Header: "Product Name",
    accessor: "product_name",
    filtercolumn: true,
  },
  {
    Header: "Items sold",
    accessor: "items_sold",
  },
  {
    Header: "Net sales",
    accessor: "net_sales",
  },
  {
    Header: "Amount",
    accessor: "amount",
    filtercolumn: true,
  },
];
