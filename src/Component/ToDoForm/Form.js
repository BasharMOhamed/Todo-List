import { useState } from "react";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./Form.css";
import sendIcon from "../../assests/send-svgrepo-com.svg";
const TodoForm = ({ AddTodo }) => {
  const [completed, setCompleted] = useState(false);
  const [todo, setTodo] = useState("");
  const clickHandler = () => {
    setCompleted(!completed);
    console.log("Clicked!!!!");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Senddddddddddd");
    console.log(todo);
    if (todo.trim().length > 0) {
      console.log("Senddddddddddd in if");
      let item = {
        Content: todo,
        complete: completed,
      };
      AddTodo(item);
      setTodo("");
      setCompleted(false);
    }
  };

  const ChangeHandler = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <CheckCircle complete={completed} Onclick={clickHandler} />

      <input
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={ChangeHandler}
      ></input>
      <button className="send-btn" type="submit">
        <img className="send-icon" src={sendIcon} alt="send icon" />
      </button>
    </form>
  );
};
export default TodoForm;
