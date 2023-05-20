import React from "react";
// import {useTable} from 'react-table'
import { colums, columsinterface } from "../../data/colums";
import { Product, productsNav } from "../../data/products";
import {
  Column,
  useTable,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
  useFilters,
} from "react-table";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumFilter";

function Table() {
  const columsresult = React.useMemo(() => colums, []) as Column<Product>[];
  const data = React.useMemo(() => productsNav, []) as Product[];
  // const tableinfo = useTable({ columns: columsresult, data: productsNav},useGlobalFilter);
  const tableInstance = useTable(
    { columns: columsresult, data: productsNav },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {/* {colums
        .filter((ele) => ele.Filter)
        .map((elem) => {
          {
            console.log(elem.Filter);
          }
          return <div>{elem.Filter()}</div>;
        })} */}
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(
            (headerGroup: {
              getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              headers: any[];
            }) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  {
                    console.log(column.filterValue);
                  }
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      scope="col"
                    >
                      {/* {column.canFilter && column.render("Filter")} */}
                      <div className="d-flex justify-content-between align-items-center w-75">
                        {column.render("Header")}
                        {/* <div>{column.canFilter && column.Filter}</div> */}
                        <span>
                          {column.filtercolumn ? (
                            column.isSortedDesc ? (
                              <CgArrowsExchangeAltV />
                            ) : (
                              <CgArrowsExchangeAltV />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row: {
              getRowProps: () => React.JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              cells: any[];
            }) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) =>
                    index === 0 ? (
                      <th {...cell.getCellProps()} scope="row">
                        {cell.render("Cell")}
                      </th>
                    ) : (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  )}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
