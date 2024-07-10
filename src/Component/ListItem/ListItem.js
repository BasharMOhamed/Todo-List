import CheckCircle from "../CheckCircle/CheckCircle";
import "./ListItem.css";
import crossIcon from "../../assests/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { TodosActions } from "../../Store/Todos-Slice";
const ListItem = ({ Content, complete, item, index }) => {
  const dark = useSelector((state) => state.ui.dark);
  const dispatch = useDispatch();
  return (
    <div
      className={`item ${complete ? "complete" : ""} ${dark ? "" : "light"}`}
    >
      <div className="Content">
        <CheckCircle complete={complete} index={index} />
        <p>{Content}</p>
      </div>
      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          dispatch(TodosActions.removeTodo(item));
        }}
      >
        <img src={crossIcon} alt="cross icon" />
      </button>
    </div>
  );
};
export default ListItem;
