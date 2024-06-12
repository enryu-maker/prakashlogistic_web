import React from "react";
import ChangeHistoryTwoToneIcon from "@mui/icons-material/ChangeHistoryTwoTone";

function Card({title,dec,img}) {
  return (
    <div className="relative p-4 flex flex-row justify-center ">
      <div className="h-[40vh] w-[35vh] flex flex-col justify-center content-center">
        <div className="w-full object-contain justify-center content-center m-auto flex item-end flex-row ">
          <div className="flex item-end h-full align-bottom items-baseline ">
            <div className="flex flex-col text-base align-bottom ">
              {/* <svg width="10" height="10" viewBox="0 0 100 100">
                <path d="M 10 90 L 90 90 L 10 10 Z" />
              </svg> */}
              <img src={img} className="rounded-t-lg bg-white"></img>
            </div>
          </div>
          <div className="flex flex-col align-bottom">
            {/* <ChangeHistoryTwoToneIcon /> */}
          </div>
        </div>
        <div className="bg-white h-full w-full p-2 rounded-b-lg hover:bg-deep-orange-600 transition duration-150 ease-in-out text-black hover:text-white">
          <p className="text-md font-semibold">{title}</p>
          <hr className="w-full h-[2px] my-1 bg-deep-orange-600 rounded "/> 
          <p className="text-sm font-light">{dec}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
