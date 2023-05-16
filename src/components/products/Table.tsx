import { Product } from "@/data/products";
import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineBarChart } from "react-icons/ai";
import Contentoftable from "./Contentoftable";
interface tableprops {
  data: Product[];
}
function Table({ data }: tableprops) {
  console.log(data);
  let headeroftable = Object.keys(data[0]);
  console.log(headeroftable);
  console.log(data[1]);

  return (
    <table className="table">
      <thead>
        <tr>
          {headeroftable.map((ele) => {
            return <th scope="col">{ele}</th>;
          })}
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => {
          return (
            <Contentoftable
              no={ele.no}
              sku={ele.sku}
              category={ele.category}
              product_name={ele.product_name}
              country_of_origin={ele.country_of_origin}
              amount={ele.amount}
              price={ele.price}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
