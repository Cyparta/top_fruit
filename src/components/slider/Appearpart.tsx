import { objectproductitem } from "@/data/productsnav";
import React, { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsFolder } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { BsPercent } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

interface Appearpartprops {
  data: objectproductitem[];
  name: string;
}
function Appearpart({ data, name }: Appearpartprops) {
  let router = useRouter();
  let [click, setclick] = React.useState(false);
  function onclickofproduct(e: React.MouseEvent<any>) {
    setclick(!click);
    (e.target as HTMLButtonElement).style.color = "";
  }
  function onclickmenu(item: string) {
    console.log(document.getElementsByClassName("dropdown-item"));
    // document.getElementsByClassName("dropdown-item").forEach((element) => {})
    router.push(item);
  }
  return (
    <>
      <div className="dropdown mb-3">
        {name === "Products" ? (
          <BsFolder
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3"
                : "iconstyle mr-3"
            }
          />
        ) : name === "Analytics" ? (
          <MdAnalytics
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3"
                : "iconstyle mr-3"
            }
          />
        ) : name === "Marketing" ? (
          <BsPercent
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3"
                : "iconstyle mr-3"
            }
          />
        ) : name === "Users" ? (
          <FiUsers
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3"
                : "iconstyle mr-3"
            }
          />
        ) : (
          ""
        )}
        <div className="styletoselect">
          <button
            className="colorblue"
            type="button"
            id="dropdownMenuButton1"
            onClick={(e) => onclickofproduct(e)}
          >
            {name}
          </button>
          <IoIosArrowDown className="ai" onClick={(e) => onclickofproduct(e)} />
        </div>
      </div>

      <ul id="displayTheProduct" className={click ? "appear" : "hidden"}>
        {data.map((item, index) => {
          return (
            <>
              <li key={index}>
                {index === 0 ? (
                  <button
                    className="dropdown-item mb-3 active"
                    onClick={() => onclickmenu(item.href ? item.href : "")}
                  >
                    {item.name}
                  </button>
                ) : (
                  <button
                    className="dropdown-item mb-3"
                    onClick={() => onclickmenu(item.href ? item.href : "")}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Appearpart;
