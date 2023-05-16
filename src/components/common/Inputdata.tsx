import React from "react";
interface inputdatatypescript {
  name: string;
  desc: string;
  title?: string;
}
function Inputdata({ name, desc, title }: inputdatatypescript) {
  return (
    <div className="mb-5">
      <h6>{title}</h6>
      <input
        type="text"
        placeholder={desc}
        className="form-control"
        name={name}
        // onChange={(e) => console.log(e.target.name)}
      />
    </div>
  );
}

export default Inputdata;
