import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>, 
    children:[ 
      {
        path:'/login', 
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
