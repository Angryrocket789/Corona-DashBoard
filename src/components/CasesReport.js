import Card from "../UI/Card";
import classes from "./CasesReport.module.css";
const CasesReport = (props) => {
  return (
    <Card>
      <div className={classes.ReportedCases}>
        <p>{props.category}</p>
        <h1 className={classes[props.type]}>{props.cases}</h1>
      </div>
    </Card>
  );
};

export default CasesReport;
