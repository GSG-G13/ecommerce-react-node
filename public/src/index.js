import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';
import MainPage from './Components/MainPage';
import CartPage from './Components/CartPage';
import LoggedPage from './Components/LoggedPage';
import ProductsPage from './Components/ProductsPage';
import './Components/main.css'
const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />
  }, 
  {
    path:'/cart',
    element:<CartPage/>
  },{
    path:'/logged',
    element:<LoggedPage/>

  },
  {
    path:'/product',
    element: <ProductsPage/>
  },
  {
    path:"/login",
    element:<LoginForm />
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
