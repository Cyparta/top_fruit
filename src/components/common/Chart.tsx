// import { data } from "autoprefixer";
import { data, datatype } from "@/data/overviewnumber";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { RiLineChartLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface chartprops {
  data: datatype[];
  title: string;
}
function Chart({ data, title }: chartprops) {
  let [typeofchart, settypeofchart] = React.useState("line");
  let [click, setclick] = React.useState(false);
  function handleClick(
    event: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    let element = e.target as HTMLButtonElement;
    if (element) {
      if (event === "line") {
        settypeofchart("line");
        element.classList.add("iconstylebackgroundgreen");
        document
          .getElementById("bar")
          ?.classList.remove("iconstylebackgroundgreen");
      } else {
        settypeofchart("bar");
        console.log(event);
        element.classList.add("iconstylebackgroundgreen");
        document
          .getElementById("line")
          ?.classList.remove("iconstylebackgroundgreen");
      }
    }
  }
  return (
    <div className="stylerow mt-2">
      <h3 className="mb-5">{title}</h3>
      <div className="row align-items-center">
        <div className="col-sm-9 d-flex justify-content-evenly">
          <div className="col-sm-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="start date"
              />
              <div className="input-group-prepend">
                <span className="styletextintable">
                  <CiCalendarDate id="button-addon2" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-5 ml-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="end date"
              />
              <div className="input-group-prepend">
                <span className="styletextintable">
                  <CiCalendarDate id="button-addon2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 d-flex justify-content-end align-items-center">
          <button
            className="iconstyle btn iconstylebackgroundgreen marginlefttobuttom"
            id="line"
            onClick={(e) => handleClick("line", e)}
          >
            <RiLineChartLine />
          </button>
          <button
            className="iconstyle btn  ml-3 marginlefttobuttom"
            id="bar"
            onClick={(e) => handleClick("bar", e)}
          >
            <AiOutlineBarChart />
          </button>
        </div>
      </div>
      {typeofchart === "line" ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis dataKey="value" />
            <Tooltip />

            <CartesianGrid strokeDasharray="3 3" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#9897D0"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis dataKey="value" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#9897D0" />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;
