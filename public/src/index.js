import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import MainPage from './Components/MainPage';
import LoginForm from './Components/LoginForm';
import CartPage from './Components/CartPage';
import LoggedPage from './Components/LoggedPage';
import ProductsPage from './Components/ProductsPage';
const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    children :[
    {
      path:'/CartPage',
      element:<CartPage/>,
    },
    {
      path:'/ProductsPage',
      element:<ProductsPage/>,
    },
    

    ]
  }, 
  {
    path:"/login",
    element:<LoginForm />,
    children:[
      {
        path:'LoggedPage',
        element:<LoggedPage/>,
      },

    ]
  },
  {
    path:'/signup',
    element: <SignUpForm />

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
