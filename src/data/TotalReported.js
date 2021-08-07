import Card from "../UI/Card";
import classes from "./TotalReported.module.css";
import { Array } from "./data";
const TotalReported = (props) => {
  let Dummy_country;
  if (props.type === "TotalCases") {
    Dummy_country = Array[0];
  } else if (props.type === "TotalRecovered") {
    Dummy_country = Array[1];
  } else {
    Dummy_country = Array[2];
  }
  let classArti;
  if (props.colorD === "red") {
    classArti = "colorRed";
  } else if (props.colorD === "green") {
    classArti = "colorGreen";
  }
  return (
    <Card>
      <div className={classes["reportedCases_list"]}>
        <p className={classes.top}> - Top {props.number} -</p>
        <div className={classes.sideBySide}>
          <ul>
            {Dummy_country.map((item) => (
              <li key={item.id} className={classes[classArti]}>
                {item.cases}
              </li>
            ))}
          </ul>
          <ul>
            {Dummy_country.map((item) => (
              <li key={item.id}>{item.country}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default TotalReported;
