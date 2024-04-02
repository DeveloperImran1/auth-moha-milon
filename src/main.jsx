import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Profile from './Components/Profile.jsx';
import Dashboard from './Components/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  
      {/* Aikhane AuthProvider akta component . Kono component k call korar somoi pat er moddhe ja kiso likhbo,, ta oi component (AuthProvider) er perameter a childreen property nam a pabo. Mane Full router ba joto gulo component ase sobaik childreen hisabe pabo <AuthProvider> component a . Than AuthProvider component a <AuthContext.Provider> {childreen} <AuthContext.Provider /> er moddhe childreen ta k dita hobe. Tahole all component er moddhe context k patha holo. */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
