import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Apartments from "../pages/apartments/Apartments";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apartment",
        Component: Apartments,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
