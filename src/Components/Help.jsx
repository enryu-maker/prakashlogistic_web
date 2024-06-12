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
            <div className="p-2 rounded-full bg-deep-orange-600 w-fit h-fit flex items-center justify-center my-2">
              <CallIcon className="text-white " />
            </div>
            <div className="flex flex-col ml-5">
              <p className="font-thin text-base">Have any Question?</p>
              <p className="text-lg font-light flex items-center text-white">
              +91 1234567890
            </p>
            </div>
            
          </div>
          <button className="bg-deep-orange-600 p-2 rounded-lg px-4 w-fit h-fit justify-center text-center text-white">
            <p className="text-base">Contact Us</p>
          </button>
        </div>
      </div></div>
  )
}

export default Help