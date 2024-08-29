import React from "react";
import Login from "./Auth/Login.js";
import HomePage from "./System/HomePage.js"
import Payment from "./Payment/Payment.js";
import ErrorPage from "./ErrorPage"
import { path } from '../utils'
import './App.scss'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: path.LOGIN,
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: path.HOME,
        element: <HomePage />,
    },
    {
        path: path.PAYMENT,
        element: <Payment />,
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
