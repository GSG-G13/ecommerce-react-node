import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';
import Main from './Components/Landing/main';
import Product from './Components/Products/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/product',
    element: <Product />,
  },

  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/signup',
    element: <SignUpForm />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
