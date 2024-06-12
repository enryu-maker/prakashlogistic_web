import { Button } from '@material-tailwind/react';
import React from 'react';
import banner from "../Images/banner.png";

export function Contact() {
  return (
    <div className='w-full h-auto justify-center flex flex-col items-center'>
      <div className="relative w-full h-[350px] flex items-center justify-center" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "10",
      }}>
        <div className="text-center text-white">
          <p className="text-4xl font-bold">Contact Us</p>
          <p className="text-lg font-light mt-2">We are here to assist you with your inquiries and provide support.</p>
          <Button className="mt-4 bg-deep-orange-600">Get in Touch</Button>
        </div>
      </div>
      
      <div className='flex w-[78%] flex-col justify-center items-center h-[100vh]'>
        <div className='w-[88%] flex h-[70%] shadow-lg'>
          <div className='w-[60%] bg-white h-full flex flex-col justify-around items-center'>
            <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>GET A QUOTE</p>
            <hr className='w-[92%]' />
            <div className='w-[88%] flex flex-wrap justify-between items-start '>
              <input className='w-[45%] bg-gray-200 h-[50px] px-2 text-blue-gray-900 font-Poppins' placeholder='Your Name' />
              <input className='w-[45%] bg-gray-200 h-[50px] px-2 text-blue-gray-900 font-Poppins' placeholder='Your Mobile Number' />
              <textarea className='w-full my-5 text-start bg-gray-200 h-[150px] px-2 text-blue-gray-900 font-Poppins' placeholder='Write Message' />
              <Button className='bg-primary'>Send Message</Button>
            </div>
          </div>
          <div className='w-[40%] bg-primary h-full font-Poppins flex flex-col justify-evenly items-center p-4'>
            <p className='text-4xl font-semibold font-Poppins text-white'>CONTACT INFORMATION</p>
            <hr className='w-[100%]' />
            <div className='w-full bg-white h-[100px] rounded-lg flex justify-center flex-col px-5 text-sm'>
              <p className='text-lg font-semibold font-Poppins text-blue-gray-900 py-1'>Contact Number:</p>
              <a href='tel:+917773972197' className='text-md font-normal text-gray-800 '>+91 7773972197
              </a>
            </div>
            <div className='w-full bg-white h-[100px] rounded-lg flex justify-center flex-col px-5'>
              <p className='text-lg font-semibold font-Poppins text-blue-gray-900 py-1'>Mail Address:</p>
              <a href='mailto:prakashlogistics.org@gmail.com' className='text-md font-normal font-Poppins text-gray-800 '>prakashlogistics.org@gmail.com</a>
            </div>
            <div className='w-full bg-white h-fit rounded-lg flex justify-center flex-col py-5 px-5'>
              <p className='text-lg font-semibold font-Poppins text-blue-gray-900 py-1'>Office Location:</p>
              <p className='text-md font-normal font-Poppins text-gray-800 '>1, Opposite Ceat Ltd, Someshwar Colony, Satpur MIDC, Nashik - 422007</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
