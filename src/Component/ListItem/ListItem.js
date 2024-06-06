import { useState } from "react";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./ListItem.css";
const ListItem = ({ Content, complete, clickHandler }) => {
  return (
    <div className={`item ${complete ? "complete" : ""}`}>
      <CheckCircle complete={complete} Onclick={clickHandler} />
      <p>{Content}</p>
    </div>
  );
};
export default ListItem;
