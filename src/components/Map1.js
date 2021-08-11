import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./Map1.module.css";

const data1 = [
  987, 88725, 391733, 976697, 3575000, 6398947, 11138928, 18508277, 26851199,
  36120458, 48065208, 67067535, 85085310, 103779211, 116906753, 130532573,
  154631638, 171860208, 183331599, 201295892,
];
const data2 = [
  504, 20000, 45122, 202293, 1331933, 3374106, 6802863, 12351357, 18969219,
  27228567, 36355788, 49682839, 66073753, 82702197, 97396159, 111530458,
  131283838, 154654644, 167588786, 181868289,
];
const data3 = [
  220, 2926, 45430, 246848, 411419, 578189, 748570, 943523, 1100525, 1294132,
  1570545, 1944206, 2347044, 2667628, 2947772, 3335370, 3714369, 3978701,
  4070724, 4289715,
];

let temp;
let String = "Total Cases";
let colorD = "rgba(255,0,0,0.5)";
const Map1 = (props) => {
  if (props.onChange.value === "reported") {
    temp = data1;
    String = "Total Cases";
  } else if (props.onChange.value === "recovered") {
    temp = data2;
    String = "Recovered";
  } else {
    temp = data3;
    String = "Deaths";
  }
  if (props.onChange.color === "red") {
    colorD = "rgba(255,0,0,0.5)";
  } else if (props.onChange.color === "rgb(0, 211, 0)") {
    colorD = "rgba(0, 211, 0,0.5)";
  } else {
    colorD = "rgba(179, 179, 179,0.5)";
  }
  const state = {
    labels: [
      "Jan-2020",
      "Feb-2020",
      "Mar-2020",
      "Apr-2020",
      "May-2020",
      "Jun-2020",
      "Jul-2020",
      "Aug-2020",
      "Sep-2020",
      "Oct-2020",
      "Nov-2020",
      "Dec-2020",
      "Jan-2021",
      "Feb-2021",
      "Mar-2021",
      "Apr-2021",
      "May-2021",
      "Jun-2021",
      "Jul-2021",
      "Aug-2021",
    ],

    datasets: [
      {
        label: String,
        lineTension: 0.5,
        fill: true,
        backgroundColor: colorD,
        borderColor: "rgba(255,255,255,0.5)",
        borderWidth: 2,
        data: temp,
      },
    ],
  };

  return (
    <div className={classes.map}>
      <Line
        type="line"
        width={"100%"}
        color={"red"}
        data={state}
        options={{
          title: {
            display: true,
            text: "Total Cases",
            fontSize: 10,
          },
          legend: {
            display: true,
            position: "right",
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default Map1;
