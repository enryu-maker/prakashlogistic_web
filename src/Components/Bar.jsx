import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import data from "../data.json";

export default function Bar() {
  return (
    <div className="hidden sm:flex w-full bg-navy p-2 flex-row justify-end items-center">
      <div className="flex flex-row items-center mr-10">
        <LocationOnOutlinedIcon className="text-red-500" />
        <p className="text-white font-light pl-1">Someshwar Colony, Satpur MIDC, Nashik - 422007</p>
      </div>
      <div className="flex flex-row items-center mr-10">
        <AccessTimeOutlinedIcon className="text-red-500" />
        <p className="text-white font-light pl-1">{data.top_bar.time}</p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        {/* <XIcon className="text-white" /> */}
        <a href="https://www.facebook.com/profile.php?id=61560697245578&mibextid=ZbWKwL"> <FacebookIcon className="text-white"/></a>
        <a href="https://www.linkedin.com/company/prakashlogistics/"> <LinkedInIcon className="text-white"/></a>
        <a href="https://www.instagram.com/prakash.logistics_?utm_source=qr&igsh=djJrNHJlNzlmeDd2"> <InstagramIcon className="text-white"/></a>
      </div>
    </div>
  );
}
