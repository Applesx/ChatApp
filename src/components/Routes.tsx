import { createBrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Auth/>
    },
    {
        path:'/signup'
        element:<Signup/>
    }
])

export default router;