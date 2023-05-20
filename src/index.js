import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Router/router";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../src/Styles/index.scss";
import "react-tooltip/dist/react-tooltip.css";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
