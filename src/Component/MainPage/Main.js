import List from "../List/List";
import darkBackGround from "../../assests/bg-desktop-dark.jpg";
import lightBackGround from "../../assests/bg-desktop-light.jpg";
import "./Main.css";
import TodoForm from "../ToDoForm/Form";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
const Main = () => {
  const dark = useSelector((state) => state.ui.dark);
  return (
    <div className={`container ${dark ? "" : "light"}`}>
      {dark ? (
        <img src={darkBackGround} alt="background" className="bg-image" />
      ) : (
        <img src={lightBackGround} alt="background" className="bg-image" />
      )}
      <div className="TodoList-container">
        <Header />
        <TodoForm />
        <List />
      </div>
    </div>
  );
};
export default Main;
