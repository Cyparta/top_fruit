import React from "react";
// import {useTable} from 'react-table'
import { colums } from "../../data/columsProduct";
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
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
interface tableprops {
  data: any[];
  columsresult: any[];
  selectvalue?: string;
}
function Table({ data, columsresult, selectvalue }: tableprops) {
  // const columsresult = React.useMemo(() => colums, []) as Column<Product>[];
  // const data = React.useMemo(() => productsNav, []) as Product[];
  // const tableinfo = useTable({ columns: columsresult, data: productsNav},useGlobalFilter);
  const tableInstance = useTable(
    { columns: columsresult, data },
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
  const { globalFilter }: any = state;
  console.log(state);
  let { name, mainnav } = useSelector((state:any) => state.analytics);
  console.log(name, mainnav);
  return (
    <>
      <div className="col-12 col-md-6 col-lg-6 row">
        <div className="col-12 col-md-6 col-lg-6">
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                headers: any[];
              },
              index
            ) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => {
                  return (
                    <>
                      {column.canFilter && column.Filter ? (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className="col-12 col-md-6 col-lg-6"
                        >
                          {/* {column.canFilter ? (
                        <div>{column.render("Filter")}</div>
                      ) : null} */}
                          {column.render("Filter")}
                          {/* <div>{column.canFilter && column.Filter}</div> */}
                        </th>
                      ) : null}
                    </>
                  );
                })}
              </tr>
            )
          )}
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <GlobalFilter
            filter={globalFilter}
            setFilter={setGlobalFilter}
            data={data}
            selectvalue={selectvalue}
          />
        </div>
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                headers: any[];
              },
              index
            ) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      scope="col"
                      key={index}
                    >
                      <div className="">
                        {column.render("Header")}

                        {/* {column.canFilter ? (
                        <div>{column.render("Filter")}</div>
                      ) : null} */}

                        {/* <div>{column.canFilter && column.Filter}</div> */}
                        <span className="m-2">
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
            (
              row: {
                getRowProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                cells: any[];
              },
              index
            ) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    return cell.column.Header !== "Action" &&
                      cell.column.Header !== "Status" ? (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ) : cell.column.Header === "Action" ? (
                      <td>
                        <button
                          className="btn  ml-3"
                          id="bar"
                          // onClick={(e) => handleClick("bar", e)}
                        >
                          <AiFillEdit className="bluebuttom" />
                        </button>
                        <button
                          className=" btn  ml-3 "
                          id="bar"
                          // onClick={() => deletedatatable(no)}
                        >
                          <AiFillDelete className="redbuttom" />
                        </button>
                      </td>
                    ) : cell.column.Header === "Status" ? (
                      <td>
                        <span className="styleborder">
                          {cell.render("Cell").props.value === "Delivered" ||
                          cell.render("Cell").props.value === "Available" ||
                          cell.render("Cell").props.value === "Active" ? (
                            <span className="circuit green"></span>
                          ) : cell.render("Cell").props.value === "Canceled" ||
                            cell.render("Cell").props.value ===
                              "Out of stock" ||
                            cell.render("Cell").props.value === "blocked" ? (
                            <span className="circuit red"></span>
                          ) : cell.render("Cell").props.value === "Pending" ||
                            cell.render("Cell").props.value ===
                              "Limited amount" ||
                            cell.render("Cell").props.value === "Paused" ? (
                            <span className="circuit yellow"></span>
                          ) : (
                            ""
                          )}
                          <span>{cell.render("Cell")}</span>
                        </span>
                      </td>
                    ) : (
                      ""
                      // <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
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
