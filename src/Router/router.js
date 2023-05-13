import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import OuterLayout from "../OuterLayout";
import LandingPage from "../Components/LandingPage";
import Dashboard from "../Components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OuterLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
