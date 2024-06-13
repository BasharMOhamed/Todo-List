import ListItem from "../ListItem/ListItem";
import "./List.css";
import { useState, useEffect } from "react";
const List = ({ list, Clear, dark, removeTodo }) => {
  const [active, setActive] = useState(1);
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    if (active === 1) {
      setFilteredList(list);
    } else if (active === 2) {
      setFilteredList(list.filter((item) => !item.complete));
    } else {
      setFilteredList(list.filter((item) => item.complete));
    }
  }, [list, filteredList, active]);

  const navigateHandler = (event) => {
    if (event.target.id === "all") {
      setActive(1);
    } else if (event.target.id === "active") {
      setActive(2);
    } else {
      setActive(3);
    }
  };

  const clickHandler = (index) => {
    const newList = [...filteredList];
    newList[index].complete = !newList[index].complete;
    setFilteredList(newList);
  };

  return (
    <>
      <div className={`List`}>
        {filteredList.map((item, index) => {
          console.log(item.complete);
          return (
            <li>
              <ListItem
                item={item}
                Content={item.Content}
                complete={item.complete}
                clickHandler={() => clickHandler(index)}
                dark={dark}
                removeTodo={removeTodo}
              />
            </li>
          );
        })}
        <div className={`List-btns ${dark ? "" : "light"}`}>
          <p className="remaining">{filteredList.length} items left</p>
          <div className="Navigation-btns">
            <button
              type="button"
              id="all"
              className={`btn all-btn ${active === 1 ? "active" : ""} ${
                dark ? "" : "light-btns"
              }`}
              onClick={navigateHandler}
            >
              All
            </button>
            <button
              type="button"
              id="active"
              className={`btn active-btn ${active === 2 ? "active" : ""} ${
                dark ? "" : "light-btns"
              }`}
              onClick={navigateHandler}
            >
              Active
            </button>
            <button
              type="button"
              id="completed"
              className={`btn completed-btn ${active === 3 ? "active" : ""} ${
                dark ? "" : "light-btns"
              }`}
              onClick={navigateHandler}
            >
              Completed
            </button>
          </div>
          <button
            className={`btn clear-btn ${dark ? "" : "light-btns"}`}
            onClick={Clear}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className={`mobile-btns List-btns ${dark ? "" : "light"}`}>
        <div>
          <button
            type="button"
            id="all"
            className={`btn all-btn ${active === 1 ? "active" : ""} ${
              dark ? "" : "light-btns"
            }`}
            onClick={navigateHandler}
          >
            All
          </button>
          <button
            type="button"
            id="active"
            className={`btn active-btn ${active === 2 ? "active" : ""} ${
              dark ? "" : "light-btns"
            }`}
            onClick={navigateHandler}
          >
            Active
          </button>
          <button
            type="button"
            id="completed"
            className={`btn completed-btn ${active === 3 ? "active" : ""} ${
              dark ? "" : "light-btns"
            }`}
            onClick={navigateHandler}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};
export default List;
