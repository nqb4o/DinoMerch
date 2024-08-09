import React from "react";
import Login from "./Auth/Login.js";
import BoxChat from "./System/BoxChat"
import ErrorPage from "./ErrorPage"
import { path } from '../utils'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: path.LOGIN,
        element: <Login/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: path.BOX_CHAT,
        element: <BoxChat/>,
    }
]);

function App() {
  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
