import React from "react";
// import {useTable} from 'react-table'
import { colums, columsinterface } from "../../data/colums";
import { Product, productsNav } from "../../data/products";
import { Column, useTable } from "react-table";
function Filtertable() {
  const columsresult = React.useMemo(() => colums, []) as Column<Product>[];
  const data = React.useMemo(() => productsNav, []) as Product[];
  const tableinfo = useTable({ columns: columsresult, data: productsNav });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableinfo;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </th>
            </tr>
          ))}
          <tr></tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default Filtertable;
