import { useState } from "react";
import "./App.css";

import Main from "./Component/MainPage/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const list = [
    { id: 1, Content: "Complete online JavaScript course", complete: true },
    { id: 2, Content: "Jog around the park 3x", complete: false },
    { id: 3, Content: "10 minutes meditation", complete: false },
    { id: 4, Content: "Read for 1 hour", complete: false },
    { id: 5, Content: "Pick up groceries", complete: false },
    { id: 6, Content: "Complete Todo App on Frontend Mentor", complete: false },
  ];
  const [todos, setTodos] = useState(list);
  const [dark, setDark] = useState(true);

  // Create a new To-Do
  const addTodo = (newTodo) => {
    newTodo.id = todos.length + 1;
    setTodos([...todos, newTodo]);
    toast.success("Created Successfully", {
      autoClose: 1500,
    });
  };

  // Delete a To-Do
  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
    toast.success("Removed Successfully", {
      autoClose: 1500,
    });
  };

  // Dark Mode or Light Mode
  const changeMode = () => {
    setDark(!dark);
  };

  // Remove all the Completed Tasks
  const clearCompleted = () => {
    const Cleared = todos.filter((todo) => !todo.complete);
    setTodos(Cleared);
    toast.success("All Cleared Successfully", {
      autoClose: 1500,
    });
  };

  return (
    <>
      <ToastContainer />
      <Main
        Todos={todos}
        Add={addTodo}
        Clear={clearCompleted}
        dark={dark}
        changeMode={changeMode}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
