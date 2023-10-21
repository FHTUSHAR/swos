import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import About from "../Home/About/About";
import Dashboard from "../Dashboard/Dashboard";
import AddDonar from "../AddDonar/AddDonar";
import AddUpcomingProgram from "../AddUpComingProgram/AddUpComingProgram";
import Login from "../Home/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllProgram from "../AllProgram/AllProgram";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allprogram',
                element: <AllProgram></AllProgram>
            },
            {
                path: '/abouts',
                element: <About></About>
            },
            {
                path: '/addDonar',
                element: <AddDonar></AddDonar>
            },
            {
                path: '/addUpcomingProgram',
                element: <AddUpcomingProgram></AddUpcomingProgram>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

            },
        ]
    },

    {
        path: '/*',
        element: <div className="text-center h-4/5">
            <h2 className="text-3xl py-10"> Path Not Found</h2>
            <h1 className="text-5xl font-bold text-red-500 py-4">404</h1>
            <img className="mx-auto py-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8duc9bB3Y20nkpGzwXEq_V5ZgWKHRU5WFBQ&usqp=CAU" alt="" />
        </div>
    }
]);
