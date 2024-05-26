import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Activities from "./pages/Activities";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import Activity from "./pages/Activity";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Result from "./pages/Result";


import App from "./App";



function Main() {

  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/activities",
          element: <Activities />,
        },
        {
          path: "/quizz",
          element: <Quizz />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/activity/:id",
          element: <Activity />,
        },
        {
          path: "/result",
          element: <Result />,
        },
      ],
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
