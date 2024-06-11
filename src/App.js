import React from 'react'
import { Button, Navbar } from "@material-tailwind/react";
import { Nav } from './Components/Nav';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Screens/Home';
import { Contact } from './Screens/Contact.jsx';
import { Service } from './Screens/Service';
import { About } from './Screens/About.jsx';

export default function App() {
  return (
    <div className='bg-gray-50'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>

      </Routes>
    </div>
  )
}