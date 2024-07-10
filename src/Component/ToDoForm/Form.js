import { useState } from "react";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./Form.css";
import sendIcon from "../../assests/send-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { TodosActions } from "../../Store/Todos-Slice";
const TodoForm = () => {
  const dark = useSelector((state) => state.ui.dark);
  const id = useSelector((state) => state.Todos.Todos).length + 1;
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(false);
  const [todo, setTodo] = useState("");
  const clickHandler = () => {
    setCompleted(!completed);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo.trim().length > 0) {
      let item = {
        id: id,
        Content: todo,
        complete: completed,
      };
      dispatch(TodosActions.addTodo(item));
      setTodo("");
      setCompleted(false);
    }
  };

  const ChangeHandler = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  return (
    <form className={`${dark ? "" : "light"}`} onSubmit={submitHandler}>
      <CheckCircle complete={completed} Onclick={clickHandler} />

      <input
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={ChangeHandler}
        className={`${dark ? "" : "light"}`}
      ></input>
      <button className="send-btn" type="submit">
        <img className="send-icon" src={sendIcon} alt="send icon" />
      </button>
    </form>
  );
};
export default TodoForm;
