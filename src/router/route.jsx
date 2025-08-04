import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Dashboard from "../component/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
    ],
    
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
]);
export default router;
