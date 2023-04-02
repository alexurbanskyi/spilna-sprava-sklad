import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import setupLocatorUI from "@locator/runtime";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

root.render(
  <BrowserRouter>
    
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer position='top-right'/>
  </BrowserRouter>
);
