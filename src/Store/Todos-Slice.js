import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 1, Content: "Complete online JavaScript course", complete: true },
  { id: 2, Content: "Jog around the park 3x", complete: false },
  { id: 3, Content: "10 minutes meditation", complete: false },
  { id: 4, Content: "Read for 1 hour", complete: false },
  { id: 5, Content: "Pick up groceries", complete: false },
  { id: 6, Content: "Complete Todo App on Frontend Mentor", complete: false },
];

const TodosSlice = createSlice({
  name: "Todos",
  initialState: {
    Todos: initialTodos,
  },
  reducers: {
    addTodo(state, action) {
      state.Todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompleted(state) {
      state.Todos = state.Todos.filter((todo) => todo.complete === false);
    },
    toggleComplete(state, action) {
      state.Todos[action.payload].complete =
        !state.Todos[action.payload].complete;
    },
  },
});

export const TodosActions = TodosSlice.actions;

export default TodosSlice;
