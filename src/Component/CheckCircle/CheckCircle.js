import "./CheckCircle.css";
import CheckIcon from "../../assests/icon-check.svg";
const CheckCircle = (props) => {
  return (
    <div className={`circle ${props.complete ? "checked" : ""}`}>
      <button
        className={`circle ${props.complete ? "checked" : ""}`}
        onClick={props.Onclick}
        type="button"
      >
        {props.complete ? (
          <img className="checkIcon" src={CheckIcon} alt="check icon"></img>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};
export default CheckCircle;
