import React from 'react'
import truck1 from "../Images/truck1.png";
import CallIcon from "@mui/icons-material/Call";
function Help() {
  return (
    <div>   <div className="h-[35vh] bg-navy w-screen flex flex-row">
        <div>
          <img src={truck1} className="h-[35vh] w-full"></img>
        </div>
        <div className="text-3xl flex flex-col justify-between font-semibold align-middle text-left p-6 text-white">
          <p>Need any Help?</p>
          <p>Get a Free Consultation</p>
          <div className="w-full flex h-fit items-center">
            <div className="p-2 py-2 rounded-full bg-deep-orange-600 w-fit h-fit flex items-center align-middle justify-center my-2">
             <a href='tel:917773972197' className='w-fit h-fit flex items-center align-middle justify-center'><CallIcon className="text-white " /></a> 
            </div>
            <div className="flex flex-col ml-5">
              <p className="font-thin text-base">Have any Question?</p>
              <p className="text-lg font-light flex items-center text-white">

              <a href='tel:+917773972197' className='text-md font-normal '>+91 7773972197
              </a>

            </p>
            </div>
            
          </div>

          <button className="bg-deep-orange-600 p-2 rounded-lg px-4  w-fit h-fit justify-center text-center text-white">
            
            <a href='tel:+917773972197' className='font-normal text-base '><p className="text-base">Contact Us</p>
              </a>
          </button>
        </div>
      </div></div>
  )
}

export default Help