import React from "react";
interface buttonPrintprops {
  data: string;
}
function ButtonPrint({ data }: buttonPrintprops) {
  function handlePrintClick() {
    if (data === "Print") {
      window.print();
    }
  }
  return (
    <>
      <button
        className="iconstyle iconstylebackgroundgreen w-25 ml-auto p-2 mt-4 d-flex justify-content-center align-items-center colorblue"
        onClick={handlePrintClick}
      >
        {data}
      </button>
    </>
  );
}

export default ButtonPrint;
