import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import LogIn2 from "../Components/LogIn2/LogIn2";
import Registation from "../Components/Registation/Registation";
import SignUp from "../Components/SignUp/SignUp";
import SignUp2 from "../Components/SignUp2/SignUp2";
import Root from "../Root/Root";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'registaion', Component: Registation },
            { path: 'signup', Component: SignUp },
            { path: 'login', Component: Login },
            { path: 'signup2', Component: SignUp2 },
            { path: 'login2', Component: LogIn2 },

        ]
    }
])
export default router