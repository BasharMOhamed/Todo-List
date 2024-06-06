import List from "../List/List";
import BackGround from "../../assests/bg-desktop-dark.jpg";
import "./Main.css";
import TodoForm from "../ToDoForm/Form";
const Main = ({ Todos, Add }) => {
  return (
    <div className="container">
      <img src={BackGround} alt="background" className="bg-image" />
      <div className="TodoList-container">
        <TodoForm AddTodo={Add} />
        <List list={Todos} />
      </div>
    </div>
  );
};
export default Main;
