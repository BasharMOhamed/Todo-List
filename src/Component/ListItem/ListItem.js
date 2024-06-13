import CheckCircle from "../CheckCircle/CheckCircle";
import "./ListItem.css";
import crossIcon from "../../assests/icon-cross.svg";
const ListItem = ({
  Content,
  complete,
  clickHandler,
  dark,
  removeTodo,
  item,
}) => {
  return (
    <div
      className={`item ${complete ? "complete" : ""} ${dark ? "" : "light"}`}
    >
      <div className="Content">
        <CheckCircle complete={complete} Onclick={clickHandler} />
        <p>{Content}</p>
      </div>
      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          removeTodo(item.id);
        }}
      >
        <img src={crossIcon} alt="cross icon" />
      </button>
    </div>
  );
};
export default ListItem;
