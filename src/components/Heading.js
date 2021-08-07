import React from "react";
import classes from "./Heading.module.css";
const Heading = (props) => {
  const year = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  return (
    <React.Fragment>
      <div className={classes["main-heading"]}>
        <h1>Covid-19 Global Cases </h1>
        <h1>
          {year[date.getMonth()]}-{date.getDate()} {date.getFullYear()}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Heading;
