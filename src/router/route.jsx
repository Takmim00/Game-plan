import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
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
]);
export default router;
