import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./pages/Activities";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import Activity from "./pages/Activity";

import App from "./App";

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
        path: "/activity/:id",
        element: <Activity />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
