import { useState } from "react";
import "./App.css";

import Main from "./Component/MainPage/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Main />
    </Provider>
  );
}

export default App;
