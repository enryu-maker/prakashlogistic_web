import React from "react";
import { Caro } from "../Components/Carousel";
import truck from "../Images/truck.jpg";
import ship from "../Images/ship.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import bg from "../Images/bg.png";
import bg1 from "../Images/bg2.png";
import Card from "../Components/Card";
import pic1 from "../Images/1.png";
import pic2 from "../Images/2.png";
import pic3 from "../Images/3.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import Count from "../Components/Count";
import Help from "../Components/Help";

export function Home() {

  return (
    <div className="relative ">
      <div className="w-full h-full z-0">
        <Caro />
      </div>
      <div className="relative -mt-[10vh] z-20 flex flex-row justify-center p-3">
        <div className="w-2/3 h-fit pb-4 bg-white shadow-md flex flex-col justify-start rounded-xl">
          <div className="p-5 justify-start flex flex-row">
            <p className="text-4xl text-black font-bold">WHAT CAN WE OFFER</p>
            <div className="inline-block h-[70px] mx-2 p-[1.5px] min-h-[1em] w-0.5 self-stretch bg-deep-orange-600 dark:bg-white/10"></div>
            <p className="text-black w-10/12 h-full px-10">
              Collaboratively customize front-end materials with standardized
              infomediaries. Holisticly engineer performance based value.
              Assertively benchmark turnkey web-readiness rather than long.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-5 px-4">
            <div className="bg-red-50 h-full w-full p-3 text-black rounded-xl">
              <div className="flex flex-row justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full">
                  <WarehouseIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold">
                  &nbsp; Warehouse Storage
                </p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 dark:bg-gray-700" />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-full w-full p-3 text-black rounded-xl">
              <div className="flex justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full">
                  <RequestQuoteIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold ">
                  &nbsp; Transparent Pricing
                </p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 dark:bg-gray-700" />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 h-full w-full p-3 text-black rounded-xl">
              <div className="flex justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full">
                  <ShareLocationOutlinedIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold ">&nbsp; Online Tracking</p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 dark:bg-gray-700" />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] align-middle flex flex-row justify-center p-3 rounded-xl">
        <div className="w-2/3 h-[50vh] bg-white shadow-lg flex flex-row gap-5 justify-start rounded-xl">
          <div
            className="bg-gray-500 w-1/2 h-full flex justify-start items-end rounded-l-xl "
            style={{
              backgroundImage: `url(${truck})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img
              src={ship}
              className="object-cover z-10 h-[2px]/2 w-1/2 border-solid border-white border-8"
              alt="Ship"
            /> */}
          </div>

          <div className="w-[50%] h-full flex">
            <div className="flex flex-col justify-center">
              <p className="text-3xl p-4 pl-2 text-black font-bold">
                WELCOME WORLD WIDE BEST TRANSPORT COMPANY
              </p>
              <div className="flex flex-row align-middle">
                <div className="inline-block h-[60px] mx-2 p-[1.5px] min-h-[1em] w-0.5 self-stretch bg-deep-orange-600 dark:bg-white/10"></div>
                <p className="text-xl font-normal text-black">
                  Competently implement efficient e-commerce without cross-unit
                  growth strategies.
                </p>
              </div>
              <div className="flex flex-col p-2">
                <div>
                  <ul>
                    <li className="text-lg">
                      <VerifiedIcon className="text-deep-orange-600 mr-2" />
                      Unlimited Revisions
                    </li>
                    <li className="text-lg">
                      <VerifiedIcon className="text-deep-orange-600 mr-2" />
                      Best Fitness Exercise
                    </li>
                    <li className="text-lg">
                      <VerifiedIcon className="text-deep-orange-600 mr-2" />
                      Combine Fitness and
                    </li>
                    <li className="text-lg">
                      <VerifiedIcon className="text-deep-orange-600 mr-2" />
                      Best Solutions
                    </li>
                  </ul>
                </div>

                <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-5 dark:bg-gray-700" />
                <div className="flex flex-row w-full justify-between">
                  <div className="flex align-middle justify-start">
                    <p className="justify-start text-2xl text-black font-bold">
                      Want to Know About us?
                    </p>
                  </div>
                  <div className="flex justify-end align-middle">
                    <button className="bg-deep-orange-600 p-2 rounded-lg px-4 w-fit h-fit justify-center text-center text-white">
                      ABOUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="z-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "10",
        }}
      >
        <div className="h-[50vh] w-full flex flex-col z-20 justify-center pt-32 ">
          <div className="w-full h-fit flex flex-col justify-center align-middle text-center py-10">
            <p className="text-3xl font-bold text-black">
              OUR SERVICES FOR YOU
            </p>
            <div className="text-center flex justify-center">
              <p className="text-md font-light w-1/2 text-center text-black">
                Quickly optimize cooperative models for long-term high-impact
                ROI. Dynamically drive innovative e-commerce and distributed
                paradigms.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <Card
              title="SEA TRANSPORTATION"
              dec="Intrinsicly exploit e-business imperative with emerging human capital."
              img={pic1}
            />
            <Card
              title="AIR TRANSPORTATION"
              dec="Intrinsicly exploit e-business imperative with emerging human capital."
              img={pic2}
            />
            <Card
              title="WAREHOUSING"
              dec="Intrinsicly exploit e-business imperative with emerging human capital."
              img={pic3}
            />
            <Card
              title="ROAD TRANSPORTATION"
              dec="Intrinsicly exploit e-business imperative with emerging human capital."
              img={pic1}
            />
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-full z-0 flex items-center justify-center bg-navy">
        <div className="flex flex-col items-start justify-center w-3/6 h-full text-white">
          <p className="text-4xl font-bold py-2">WHY CHOOSE US</p>
          <p className="text-xl font-thin w-2/3 pb-4">
            Dramatically enhance interactive metrics for reliable services.
            Proactively unleash fully researched e-commerce.
          </p>
          <div className="flex flex-col">
            <div className="bg-white w-fit p-1 rounded-full">
              <LocalShippingIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              FAST TRANSPORTION SERVICE
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively
                unleash fully researched.
              </p>
            </p>
            <div className="bg-white w-fit p-1 rounded-full">
              <SupportAgentOutlinedIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              24/7 ONLINE SUPPORT
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively
                unleash fully researched.
              </p>
            </p>
            <div className="bg-white w-fit p-1 rounded-full">
              <ThumbUpAltIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              SAFETY AND RELIABILITY
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively
                unleash fully researched.
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-1/3 w-4/12 ">
          <LiteYouTubeEmbed
            id="RTO6i8hD6CQ"
            className="h-full w-full"
            title="Future of Transportation"
          />
        </div>
      </div>
      <div>
        <Count />
      </div>
      <div><Help /></div>

    </div>
  );
}
