import React from 'react';
import truck1 from "../Images/truck1.png";
import CallIcon from "@mui/icons-material/Call";

function Help() {
  return (
    <div className="bg-navy w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[35vh]">
        <img src={truck1} className="w-full h-full object-cover" alt="Truck" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 text-white text-center md:text-left ">
        <div className="text-3xl font-semibold">
          <p>Need any Help?</p>
          <p>Get a Free Consultation</p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0 md:align-middle">
          <div className="p-2 rounded-full bg-deep-orange-600 flex items-center justify-center md:align-middle">
            <a href='tel:917773972197' className='flex items-center justify-center align-middle '>
              <CallIcon className="text-white" />
            </a>
          </div>
          <div className="flex flex-col ml-0 md:ml-5 mt-2 md:mt-0">
            <p className="font-thin text-base">Have any Question?</p>
            <p className="text-lg font-light flex items-center">
              <a href='tel:+917773972197' className='text-md font-normal text-white'>
                +91 7773972197
              </a>
            </p>
          </div>
        </div>
        <button className="bg-deep-orange-600 p-2 rounded-lg md:w-fit px-4 mt-4 md:mt-0 text-white">
          <a href='tel:+917773972197' className='font-normal text-base'>
            <p className="text-base">Contact Us</p>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Help;
