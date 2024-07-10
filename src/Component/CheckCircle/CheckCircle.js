import "./CheckCircle.css";
import CheckIcon from "../../assests/icon-check.svg";
import { useDispatch } from "react-redux";
import { TodosActions } from "../../Store/Todos-Slice";
const CheckCircle = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={`circle ${props.complete ? "checked" : ""}`}>
      <button
        className={`circle ${props.complete ? "checked" : ""}`}
        onClick={() => dispatch(TodosActions.toggleComplete(props.index))}
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
