import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch("tshirts.json"),
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "grandpa",
        element: <Grandpa></Grandpa>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
