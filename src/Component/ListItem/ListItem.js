import { useState } from "react";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./ListItem.css";
const ListItem = ({ Content, complete }) => {
  const [completed, setCompleted] = useState(complete);

  const clickHandler = () => {
    setCompleted(!completed);
    console.log("Clicked!!!!");
  };
  return (
    <div className={`item ${completed ? "complete" : ""}`}>
      <CheckCircle complete={completed} Onclick={clickHandler} />
      <p>{Content}</p>
    </div>
  );
};
export default ListItem;
