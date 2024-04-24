import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './pages/User';
import "./style.scss"
import NavbarSingle from './components/NavbarSingle';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <div><Navbar /><HomePage /><Footer /></div>
  },
  {
    path: "/post/:id",
    element: <div><NavbarSingle /><Single /></div>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/write",
    element: <div><Navbar /><Write /></div>
  },
  {
    path: "/user",
    element: <User />,
  },
]);

function App() {

  return (
      <div className='app'>
        <div className='container'>
          <RouterProvider router={Router} />
        </div>
      </div>
  );
}

export default App;
