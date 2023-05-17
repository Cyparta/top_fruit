import React from "react";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { analyticsdata } from "@/data/analyics";
import { BiMoneyWithdraw } from "react-icons/bi";
function Cards() {
  function onclickofproduct(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    (e.target as HTMLDivElement).classList.toggle("iconstylebackgroundgreen");
    const items = document.getElementsByClassName("card");
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      console.log(item);
      item.classList.remove("cardstyle");
    }
    (e.target as HTMLDivElement).parentElement?.classList.toggle("cardstyle");

    console.log(e.target);
  }
  return (
    <>
      <div className="row" onClick={(e) => onclickofproduct(e)}>
        {analyticsdata.map((ele, index) => {
          return (
            <div className="col-sm-4" key={index}>
              <div className="card" id="card">
                <div className="card-body d-flex align-items-start  justify-content-between">
                  <>
                    <div>
                      <h3 className="card-title">{ele.number}</h3>
                      <p className="card-text">{ele.title}</p>
                      <span className="colorgray">{ele.discount}</span>
                    </div>
                    {ele.id === 1 ? (
                      <MdLocalGroceryStore className="iconstyle fs-3 p-2" />
                    ) : ele.id === 2 ? (
                      <BiMoneyWithdraw className="iconstyle fs-3 p-2" />
                    ) : ele.id === 3 ? (
                      <MdOutlineNoteAlt className="iconstyle fs-3 p-2" />
                    ) : (
                      ""
                    )}
                    {/* <MdLocalGroceryStore className="iconstyle fs-1" /> */}
                  </>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
