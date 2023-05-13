import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Router/router";
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/Styles/index.scss'
import 'react-tooltip/dist/react-tooltip.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
