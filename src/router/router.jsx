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
import Profile from "../pages/dashboard/profile/Profile";
import Announcements from "../pages/dashboard/announcements/Announcements";
import MakePayment from "../pages/dashboard/makePayment/MakePayment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import Managemembers from "../pages/dashboard/manageMembers/Managemembers";
import MakeAnnouncement from "../pages/dashboard/makeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../pages/dashboard/agreementRequests/AgreementRequests";
import ManageCoupons from "../pages/dashboard/manageCoupons/ManageCoupons";
import AdminRoutes from "../routes/AdminRoutes";
import MemberRoutes from "../routes/MemberRoutes";

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
      // general routes
    {
      path: 'profile',
      Component:Profile,
    },
    {
      path:'announcements',
      Component:Announcements,
      loader:() =>  fetch(`${import.meta.env.VITE_URL}/announcements`)

    },
    // member routes
    {
      path:'makePayment',
      element:<MemberRoutes><MakePayment></MakePayment></MemberRoutes>
    },
    {
      path:'paymentHistory',
      element: <MemberRoutes><PaymentHistory></PaymentHistory></MemberRoutes>
    },
    // admin routes
    {
      path:'manageMembers',
      element: <AdminRoutes><Managemembers></Managemembers></AdminRoutes>
    },
    {
      path:'makeAnnouncement',
      element:<AdminRoutes><MakeAnnouncement></MakeAnnouncement></AdminRoutes>
    },
    {
      path:'agreementRequests',
      element:<AdminRoutes><AgreementRequests></AgreementRequests></AdminRoutes>
    },
    {
      path:'manageCoupons',
      element:<AdminRoutes><ManageCoupons></ManageCoupons></AdminRoutes>
    }
    
    ]
    }

]);
