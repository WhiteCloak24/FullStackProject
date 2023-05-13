import { Outlet } from "react-router-dom";
import Login from "./Components/Login/Login";

function OuterLayout() {
  return (
    <div className="App">
        <Outlet/>
    </div>
  );
}

export default OuterLayout;
