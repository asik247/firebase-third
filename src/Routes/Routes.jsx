import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registation from "../Components/Registation/Registation";
import SignUp from "../Components/SignUp/SignUp";
import Root from "../Root/Root";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'registaion', Component: Registation },
            { path: 'login', Component: Login },
            { path: 'signup', Component: SignUp },

        ]
    }
])
export default router