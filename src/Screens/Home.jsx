import React from "react";
import { Caro } from "../Components/Carousel";
import truck from "../Images/truck.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import bg from "../Images/bg.png";
import Card from "../Components/Card";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Count from "../Components/Count";
import Help from "../Components/Help";
import { IMAGE } from "../Assets/Images";
import { Helmet } from "react-helmet";

export function Home() {
  const services = [
    {
      id: 1,
      icon: IMAGE.ptl,
      name: "PTL  - Part Truck Load",
      location: "Nashik to All Over India",
      description:
        "Efficient and Reliable Trucking Solutions: From Nashik to Anywhere in India. Our comprehensive transportation service ensures safe and timely delivery of your goods, whether it's a single pallet or a full truckload. With a focus on professionalism and customer satisfaction, we offer competitive rates and personalized solutions to meet your shipping needs. Trust us to handle your cargo with care and precision, delivering peace of mind every mile of the journey.",
    },
    {
      id: 2,
      icon: IMAGE.ftl,
      name: "FTL -  Full Truck Load",
      location: "Bhiwandi - Pune - Gujarat",
      description:
        "Seamless FTL Solutions: Covering the Nation from Nashik. Our Full Truck Load (FTL) service offers you the entire truck for your cargo, ensuring maximum efficiency and reliability. With a fleet of well-maintained vehicles and experienced drivers, we guarantee secure transportation for your goods from Nashik to any destination across India. Enjoy peace of mind knowing that your FTL shipments are in capable hands, with timely deliveries and competitive rates as our commitment to your satisfaction.",
    },
    {
      id: 3,
      icon: IMAGE.lms,
      name: "Connect for Last - Mile Services Work",
      location: "Nashik City",
      description:
        "For Last-Mile Excellence, Connect with Us! Beyond transporting your goods from Nashik to destinations nationwide, we specialize in last-mile services, ensuring your cargo reaches its final destination swiftly and securely. Our dedicated team and robust network enable us to navigate through urban areas and remote locations alike, guaranteeing prompt delivery and customer satisfaction. Partner with us for reliable last-mile solutions that complete the journey seamlessly, every time.",
    },
    {
      id: 4,
      icon: IMAGE.pm,
      name: "Packers and Movers",
      location: "Nashik to All Over India",
      description:
        "Effortless Relocation with Our Packers and Movers Service! Whether you're moving your home or office, our expert packers and movers handle every aspect of your relocation with utmost care and precision. From packing fragile items to disassembling and reassembling furniture, we ensure a smooth transition to your new location, whether it's within Nashik or across India. With our reliable team and comprehensive moving solutions, rest assured your belongings are in safe hands, making your move stress-free and hassle-free.",
    },
  ];
  return (
    <div className="relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pakash Logistics: Reliable Freight and Transport Solutions</title>
        <meta
          name="description"
          content="Pakash Logistics offers reliable and efficient freight and transport solutions tailored to your needs. Our experienced team ensures secure and timely deliveries, whether local or international. Trust Pakash Logistics for excellence in logistics services, delivering peace of mind with every shipment"
        />
      </Helmet>
      <div className="w-full h-full z-0">
        <Caro />
      </div>
      <div className="relative md:-mt-[10vh] z-20 flex flex-row justify-center p-3 "><div className="h-full md:min-w-[1000px] bg-transparent flex justify-center ">

      
        <div className="w-full min-w-1/3 md:w-2/3 h-fit pb-4 bg-white shadow-md flex flex-col justify-center rounded-xl">
          <div className="p-5 flex flex-col md:flex-row justify-start">
            <p className="text-4xl text-black font-bold">WHAT CAN WE OFFER</p>
            <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 mt-2 mb-2 md:hidden " />
            <p className="text-black w-full md:w-10/12 h-full px-0 md:px-10">
              Collaboratively customize front-end materials with standardized infomediaries. Holisticly engineer performance based value. Assertively benchmark turnkey web-readiness rather than long.
            </p>
          </div>
          <div className="flex flex-col w-full justify-center h-full md:flex-row md:justify-evenly gap-2 px-4">
            <div className="bg-red-50 h-full w-full p-3 text-black rounded-xl min-w-[200px] max-w-full">
              <div className="flex flex-row justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full w-fit h-fit">
                  <WarehouseIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold">&nbsp; Warehouse Storage</p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 mt-2 " />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via enabled process improvements.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-full w-full p-3 text-black rounded-xl min-w-[200px] max-w-full">
              <div className="flex justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full w-fit h-fit">
                  <RequestQuoteIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold ">&nbsp; Transparent Pricing</p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 mt-2" />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via enabled process improvements.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 h-full w-full p-3 text-black rounded-xl min-w-[200px] max-w-full">
              <div className="flex justify-start align-middle">
                <div className="bg-deep-orange-600 p-1 rounded-full w-fit h-fit">
                  <ShareLocationOutlinedIcon className="text-white" />
                </div>
                <p className="text-xl font-semibold ">&nbsp; Online Tracking</p>
              </div>
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-4 mt-2" />
              <div className="text-sm py-2 font-light">
                <p>
                  Globally initiate resource maximizing total linkage via enabled process improvements.
                </p>
              </div>
            </div>
          </div>
        </div></div>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-center p-3 rounded-xl">
        <div className="w-full md:w-2/3 h-auto bg-white shadow-lg flex flex-col md:flex-row gap-5 justify-start rounded-xl min-w-[300px] max-w-[900px]">


         {/* <div className="flex flex-col md:flex-row md:w-full h-full md:min-w-[800px] "> */}

        
          <div
            className="bg-gray-500 w-full md:w-1/2 h-48 md:h-auto flex justify-start items-end rounded-lg md:rounded-lg min-h-[200px] max-h-[400px]"
            style={{
              backgroundImage: `url(${truck})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div> 
          <div className="w-full md:w-1/2 h-full flex">
            <div className="flex flex-col justify-center p-4">
              <p className="text-2xl text-black font-bold">
                WELCOME WORLD WIDE BEST LOGISTIC COMPANY
              </p>
              <div className="md:flex hidden flex-row align-middle mt-2 mb-4">
                <div className="inline-block h-[100%] mx-2 p-[1.5px] min-h-[1em] w-0.5 self-stretch bg-deep-orange-600 dark:bg-white/10"></div>
                <p className="text-xl font-normal text-black">
                  Competently implement efficient e-commerce without cross-unit growth strategies.
                </p>
              </div>
              <div className="flex justify-between flex-row gap-5 py-2 md:hidden">
                <ul className="text-black">
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
              <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded md:my-5 my-2 " />
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="flex align-middle justify-center md:justify-start text-center">
                  <p className="text-2xl text-black font-bold">
                    Want to Know About us?
                  </p>
                </div>
                <div className="flex justify-center md:justify-end align-middle mt-2 md:mt-0">
                  <button className="bg-deep-orange-600 p-2 rounded-lg px-4 w-fit h-fit text-white">
                    <a href="/about">ABOUT US</a>
                  </button>
                </div>
              </div>
            </div>
          </div> 
          {/* </div> */}
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
        <div className="h-auto w-full flex flex-col z-20 justify-center py-10">
          <div className="w-full h-fit flex flex-col justify-center align-middle text-center py-10">
            <p className="text-3xl font-bold text-black">
              OUR SERVICES FOR YOU
            </p>
            <div className="text-center flex justify-center">
              <p className="text-md font-light w-full md:w-1/2 text-center text-black">
                Quickly optimize cooperative models for long-term high-impact ROI. Dynamically drive innovative e-commerce and distributed paradigms.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex flex-wrap md:justify-between justify-center gap-20 md:gap-8 mb-10">
              {services?.map((item) => (
                <Card
                  key={item.id}
                  title={item?.name}
                  dec={item?.description}
                  img={item?.icon}
                  className="min-w-[250px] max-w-[350px] "
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto pt-10 pb-10 w-full z-0 flex flex-col md:flex-row items-center justify-center bg-navy">
        <div className="flex flex-col items-start justify-center w-full md:w-3/6 h-full text-white p-4 min-w-[300px] max-w-[600px]">
          <p className="text-4xl font-bold py-2">WHY CHOOSE US</p>
          <p className="text-xl font-thin w-full md:w-2/3 pb-4">
            Dramatically enhance interactive metrics for reliable services. Proactively unleash fully researched e-commerce.
          </p>
          <div className="flex flex-col">
            <div className="bg-white w-fit p-1 rounded-full">
              <LocalShippingIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              FAST TRANSPORTATION SERVICE
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively unleash fully researched.
              </p>
            </p>
            <div className="bg-white w-fit p-1 rounded-full">
              <SupportAgentOutlinedIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              24/7 ONLINE SUPPORT
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively unleash fully researched.
              </p>
            </p>
            <div className="bg-white w-fit p-1 rounded-full">
              <ThumbUpAltIcon className="text-deep-orange-600" />
            </div>
            <p className="text-lg font-medium pb-4">
              SAFETY AND RELIABILITY
              <p className="font-thin text-sm">
                Enhance interactive metrics for reliable services. Proactively unleash fully researched.
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-4/12 h-64 p-4 min-w-[300px] max-w-[500px]">
          <LiteYouTubeEmbed
            id="RTO6i8hD6CQ"
            className="h-full w-full"
            title="Future of Transportation"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-row justify-center z-40 -mt-20 md:mb-10">
        <Count />
      </div>
      <div>
        <Help />
      </div>
    </div>
  );
}
