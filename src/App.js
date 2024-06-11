import React from 'react'
import { Button, Navbar } from "@material-tailwind/react";
import { Nav } from './Components/Nav';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Screens/Home';
export default function App() {
  return (
    <div className='bg-gray-50'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
    </div>
  )
}