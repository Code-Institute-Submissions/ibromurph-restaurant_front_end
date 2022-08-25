import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import {Toaster} from "react-hot-toast";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

ReactDOM.render(
  <Provider store={store}>
    <Toaster/>
    <App />
  </Provider>,
  document.getElementById("root")
);
