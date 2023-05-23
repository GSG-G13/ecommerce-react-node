import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import MainPage from './Components/MainPage';
import LoginForm from './Components/LoginForm';
const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />
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
