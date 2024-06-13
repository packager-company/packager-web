import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./_Layout/Root";
import MyMembership from "./MyMembership/MyMembership";
import Price from "./Price/Price";
import Payments from "./Payments/payments";
import ShiptmentHistory from "./ShiptmentHistory/ShiptmentHistory";
import Home from "./Inicio/Home";
import CreateShipment from "./CreateShipment/CreateShipment";
import LoginAdmin from "./Login-admin/login-admin";
import LoginUser from "./Login-user/login-user";
import Monitoring from "./Monitoring/Monitoring";
import Register from "./Register/Register";
import Membership from "./Membership/Membership"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Navigate to="/loginUser" />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/monitoring',
                element: <Monitoring />,
            },
            {
                path: 'price',
                element: <Price />,
            },
            {
                path: 'Mymemberships',
                element: <MyMembership />,
            },
            {
                path: 'membership',
                element: <Membership />,
            },
            {
                path: 'payments',
                element: <Payments />,
            },
            {
                path: 'shiptment-history',
                element: <ShiptmentHistory />,
            },
            {
                path: 'create-shipment',
                element: <CreateShipment />,
            }
        ],
    },
    {
        path: '/loginAdmin',
        element: <LoginAdmin />,
    },
    {
        path: '/loginUser',
        element: <LoginUser />,
    },
    {
        path: '/register',
        element: <Register />,
    }
]);

export default router;
