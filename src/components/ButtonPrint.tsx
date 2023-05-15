import React from "react";

function ButtonPrint() {
  function handlePrintClick() {
    window.print();
  }
  return (
    <>
      <button
        className="iconstyle iconstylebackgroundgreen w-25 ml-auto p-2 mt-4 d-flex justify-content-center align-items-center"
        onClick={handlePrintClick}
      >
        Print
      </button>
    </>
  );
}

export default ButtonPrint;
