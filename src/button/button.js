import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./button.module.css";
const Button = () => {
  return (
    <div className={classes.btnIcon}>
      <button>
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </button>
    </div>
  );
};

export default Button;
