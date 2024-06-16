import React from "react";
import ChangeHistoryTwoToneIcon from "@mui/icons-material/ChangeHistoryTwoTone";

function Card({ title, dec, img }) {
  return (
    <div className="relative p-4 flex flex-row justify-center mb-10">
      <div className="h-[40vh] w-[35vh] flex flex-col justify-center content-center">
        <div className="w-full object-contain justify-center align-bottom content-center m-auto flex item-end h-full flex-row ">
          <div className="flex item-end h-full align-bottom items-baseline ">
            <div className="flex flex-col text-base align-bottom items-baseline ">
              {/* <svg width="10" height="10" viewBox="0 0 100 100">
                <path d="M 10 90 L 90 90 L 10 10 Z" />
              </svg> */}
              <img src={img} className="rounded-t-lg bg-white max-w-72 min-w-[35vh] min-h-36 max-h-36 "></img>
            </div>
          </div>
          <div className="flex flex-col align-bottom">
            {/* <ChangeHistoryTwoToneIcon /> */}
          </div>
        </div>
        <div> 
        <div className="bg-white h-60 overflow-scroll overflow-y-scroll no-scrollbar w-fit p-0 rounded-b-lg hover:bg-deep-orange-600 transition duration-150 ease-in-out text-black hover:text-white">
          <div className="sticky top-0 w-full p-0 text-center shadow backdrop-blur-md">
            <p className="text-md font-semibold sticky">{title}</p>
            <hr className="w-full h-[2px] my-1 bg-deep-orange-600 rounded " />
          </div>
          <p className="text-xs font-light overflow-scroll p-2 text-justify ">{dec}</p>
        </div>
      </div></div>
    </div>
  );
}

export default Card;
