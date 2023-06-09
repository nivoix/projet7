import Home from './pages/Home/Home';
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Apartment from './pages/Apartment/Apartment'
import Layout from './app';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      { path: "/", element: <Home /> },
      { path:"/about",element: <About /> },
      { path:"/apartment/:id", element: <Apartment /> },
      { path:"*", element:<Error /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);