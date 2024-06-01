import "./App.css";

import Main from "./Component/MainPage/Main";
function App() {
  const list = [
    { id: 1, Content: "Complete online JavaScript course", complete: true },
    { id: 2, Content: "Jog around the park 3x", complete: false },
    { id: 3, Content: "10 minutes meditation", complete: false },
    { id: 4, Content: "Read for 1 hour", complete: false },
    { id: 5, Content: "Pick up groceries", complete: false },
    { id: 6, Content: "Complete Todo App on Frontend Mentor", complete: false },
  ];
  return (
    <>
      <Main Todos={list} />
    </>
  );
}

export default App;
