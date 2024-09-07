import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./Auth/Login.js";
import HomePage from "./System/HomePage.js"
import Payment from "./Payment/Payment.js";
import ErrorPage from "./ErrorPage"
import PrivateRoute from "./System/PrivateRoute.js"
import Register from "./Auth/Register.js";
import { path } from '../utils'
import './App.scss'

const router = createBrowserRouter([
    {
        path: path.LOGIN,
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: path.REGISTER,
        element: <Register />,
    },
    {
        path: path.HOME,
        element:
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>,
    },
    {
        path: path.PAYMENT,
        element:
            <PrivateRoute>
                <Payment />
            </PrivateRoute>,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
