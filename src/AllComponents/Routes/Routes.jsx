import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Core from "../Layout/Core";
import Home from "../Layout/Home/Home";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Core></Core>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);