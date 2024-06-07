import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./_Layout/Root";
//import Estadisticas from "./Estadisticas/Estadisticas";
import MyMembership from "./MyMembership/MyMembership";
import Price from "./Price/Price";
import Payments from "./Payments/payments";
import ShiptmentHistory from "./ShiptmentHistory/ShiptmentHistory";
import Home from "./Inicio/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: 'price',
                element: <Price />,
            },
            {
                path: 'estadisticas',
                //element: <Estadisticas />,
            },
            {
                path: 'memberships',
                element: <MyMembership />,
            },
            {
                path: 'payments',
                element: <Payments />,
            },
            {
                path: 'shiptment-history',
                element: <ShiptmentHistory />,
            }

        ],

    },
    {
    },
])

export default router;