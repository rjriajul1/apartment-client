import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Apartments from "../pages/apartments/Apartments";
import Login from "../pages/login/Login";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import TermsService from "../pages/tremsService/TremsService";
import Coupons from "../pages/home/coupons/Coupons";
import AboutBuilding from "../pages/home/aboutBuilding/AboutBuilding";
import FAQs from "../pages/faqs/FAQs";
import Register from "../pages/register/Register";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";

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
        loader: () => fetch(`${import.meta.env.VITE_ULR}/apartments`)
      },
      {
        path: "coupons",
        Component: Coupons,
      },
      {
        path: "aboutBuilding",
        Component: AboutBuilding,
      },
      {
        path: "/privacyPolicy",
        Component: PrivacyPolicy,
      },
      {
        path: "/termsService",
        Component: TermsService,
      },
      {
        path: "/faqs",
        Component: FAQs,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
 
 {
    path:'/dashboard',
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      

     
    ]
    }

]);
