import React from "react";
import { render } from "react-dom";
import "./css/style.css";
import Router from "./components/Router";

// we are putting this on the DOM
render(<Router />, document.querySelector("#main"));
