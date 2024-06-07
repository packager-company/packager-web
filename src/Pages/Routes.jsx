import { createBrowserRouter } from "react-router-dom";
import Root from "./_Layout/Root";
//import Estadisticas from "./Estadisticas/Estadisticas";
import MyMembership from "./MyMembership/MyMembership";
import Price from "./Price/Price";
import Payments from "./Payments/payments";
import ShiptmentHistory from "./ShiptmentHistory/ShiptmentHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
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