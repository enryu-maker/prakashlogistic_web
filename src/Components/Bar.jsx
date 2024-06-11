import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import data from "../data.json";

export default function Bar() {
  return (
    <div className="hidden sm:flex w-full bg-navy p-2 flex-row justify-end items-center">
      <div className="flex flex-row items-center mr-10">
        <LocationOnOutlinedIcon className="text-red-500" />
        <p className="text-white font-light pl-1">{data.top_bar.location}</p>
      </div>
      <div className="flex flex-row items-center mr-10">
        <AccessTimeOutlinedIcon className="text-red-500" />
        <p className="text-white font-light pl-1">{data.top_bar.time}</p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <XIcon className="text-white" />
        <FacebookIcon className="text-white" />
        <LinkedInIcon className="text-white" />
        <InstagramIcon className="text-white" />
      </div>
    </div>
  );
}
