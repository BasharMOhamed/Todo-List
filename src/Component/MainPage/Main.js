import List from "../List/List";
import BackGround from "../../assests/bg-desktop-dark.jpg";
import "./Main.css";
import TodoForm from "../ToDoForm/Form";
const Main = ({ Todos, Add, Clear }) => {
  return (
    <div className="container">
      <img src={BackGround} alt="background" className="bg-image" />
      <div className="TodoList-container">
        <TodoForm AddTodo={Add} />
        <List list={Todos} Clear={Clear} />
      </div>
    </div>
  );
};
export default Main;
