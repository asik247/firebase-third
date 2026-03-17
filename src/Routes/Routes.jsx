import Root from "../Root/Root";

const { createBrowserRouter } =("react-router");

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root
    }
])
export default router