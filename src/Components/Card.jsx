import React from "react";
import pic1 from "../Images/1.png";
import { CIcon } from '@coreui/icons-react';
import {cisTriangle} from '@coreui/icons-react';

function Card() {
  return (
    <div className="relative p-4 flex flex-row justify-center">
      <div className="h-[40vh] w-[30vh] flex flex-col justify-center content-center">
        <div className="w-[80%] object-contain justify-center content-center m-auto flex item-end flex-row">
          <div className="flex item-end h-full align-bottom items-baseline"><div className="flex align-bottom text-base">a</div></div>
          <img src={pic1}></img>
          <CIcon icon={cisTriangle} />

          <div className="flex flex-col align-bottom">a</div>
        </div>
        <div className="bg-white h-full w-full p-2 hover:bg-deep-orange-600 transition duration-150 ease-in-out">
          sas
        </div>
      </div>
    </div>
  );
}


export default Card;
