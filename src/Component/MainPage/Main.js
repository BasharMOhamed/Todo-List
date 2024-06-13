import List from "../List/List";
import darkBackGround from "../../assests/bg-desktop-dark.jpg";
import lightBackGround from "../../assests/bg-desktop-light.jpg";
import "./Main.css";
import TodoForm from "../ToDoForm/Form";
import Header from "../Header/Header";
const Main = ({ Todos, Add, Clear, dark, changeMode, removeTodo }) => {
  return (
    <div className={`container ${dark ? "" : "light"}`}>
      {dark ? (
        <img src={darkBackGround} alt="background" className="bg-image" />
      ) : (
        <img src={lightBackGround} alt="background" className="bg-image" />
      )}
      <div className="TodoList-container">
        <Header dark={dark} changeMode={changeMode} />
        <TodoForm AddTodo={Add} dark={dark} />
        <List list={Todos} Clear={Clear} dark={dark} removeTodo={removeTodo} />
      </div>
    </div>
  );
};
export default Main;
