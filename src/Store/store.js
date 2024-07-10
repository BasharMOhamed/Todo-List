import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI-Slice";
import TodosSlice from "./Todos-Slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, Todos: TodosSlice.reducer },
});

export default store;
