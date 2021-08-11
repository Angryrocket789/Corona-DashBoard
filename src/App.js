import Heading from "./components/Heading";
import ReportedCases from "./components/CasesReport";
import classes from "./app.module.css";
import Map from "./components/Map";
import Map1 from "./components/Map1";
import TotalReported from "./data/TotalReported";
import About from "./components/About";
import React, { useState } from "react";
let obj;

function App() {
  obj = {
    value: "reported",
    color: "red",
  };
  const [colorD, setColorD] = useState(obj);
  const Reported_cases = {
    cases: "201,295,892",
    category: "Total Reported",
    type: "reported",
    id: 1,
  };
  const Recovered_cases = {
    cases: "181,221,610",
    category: "Total Recovered",
    type: "recovered",
    id: 2,
  };
  const total_deaths = {
    cases: "4,275,292",
    category: "Total Deaths",
    type: "deaths",
    id: 3,
  };
  const sendToMap1 = (data) => {
    setColorD(data);
  };
  return (
    <div className={classes["app"]}>
      <Heading></Heading>
      <div className={classes["second_row"]}>
        <div className={classes.firstColumn}>
          <ReportedCases
            key={Reported_cases.id}
            cases={Reported_cases.cases}
            category={Reported_cases.category}
            type={Reported_cases.type}
          ></ReportedCases>
          <TotalReported
            key={4}
            type={"TotalCases"}
            number={16}
            colorD={"red"}
          ></TotalReported>
        </div>
        <div className={classes.secondColumn}>
          <Map onChange={sendToMap1}></Map>

          <Map1 onChange={colorD}></Map1>
        </div>
        <div className={classes["thirdColumn"]}>
          <div className={classes["third_sub_Column"]}>
            <div className={classes["third_sub_first_sub_Column"]}>
              <ReportedCases
                key={Recovered_cases.id}
                cases={Recovered_cases.cases}
                category={Recovered_cases.category}
                type={Recovered_cases.type}
              ></ReportedCases>
              <TotalReported
                key={5}
                type={"TotalRecovered"}
                number={13}
                colorD={"green"}
              ></TotalReported>
            </div>
            <div className={classes["third_sub_second_sub_Column"]}>
              <ReportedCases
                key={total_deaths.id}
                cases={total_deaths.cases}
                category={total_deaths.category}
                type={total_deaths.type}
              ></ReportedCases>
              <TotalReported
                key={6}
                type={"deaths"}
                number={13}
              ></TotalReported>
            </div>
          </div>
          <About></About>
        </div>
      </div>
    </div>
  );
}

export default App;
