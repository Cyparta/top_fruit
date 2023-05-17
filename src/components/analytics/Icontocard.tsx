import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillBoxFill, BsTruck } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";
import { HiOutlineReceiptRefund } from "react-icons/hi";
function Icontocard({ ele }: { ele: { id: number } }) {
  return (
    <>
      {ele.id === 1 ? (
        <BiWalletAlt className="iconstyle fs-3 p-2" />
      ) : ele.id === 2 ? (
        <BiMoneyWithdraw className="iconstyle fs-3 p-2" />
      ) : ele.id === 3 ? (
        <FaPercentage className="iconstyle fs-3 p-2" />
      ) : ele.id === 4 ? (
        <HiOutlineReceiptRefund className="iconstyle fs-3 p-2" />
      ) : ele.id === 5 ? (
        <BsTruck className="iconstyle fs-3 p-2" />
      ) : ele.id === 6 ? (
        <BsFillBoxFill className="iconstyle fs-3 p-2" />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontocard;
