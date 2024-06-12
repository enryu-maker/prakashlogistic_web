import React from 'react';
import { IMAGE } from '../Assets/Images';
import { Button } from '@material-tailwind/react';
import Card from "../Components/Card";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import bg from "../Images/bg.png";
import Help from '../Components/Help';
import banner from "../Images/banner.png";

export function Service() {
  const services = [
    {
      id: 1,
      icon: IMAGE.ptl,
      name: "PTL  - Part Truck Load",
      location: 'Nashik to All Over India',
      description: "Efficient and Reliable Trucking Solutions: From Nashik to Anywhere in India. Our comprehensive transportation service ensures safe and timely delivery of your goods, whether it's a single pallet or a full truckload. With a focus on professionalism and customer satisfaction, we offer competitive rates and personalized solutions to meet your shipping needs. Trust us to handle your cargo with care and precision, delivering peace of mind every mile of the journey."
    },
    {
      id: 2,
      icon: IMAGE.ftl,
      name: "FTL -  Full Truck Load",
      location: 'Bhiwandi - Pune - Gujarat',
      description: "Seamless FTL Solutions: Covering the Nation from Nashik. Our Full Truck Load (FTL) service offers you the entire truck for your cargo, ensuring maximum efficiency and reliability. With a fleet of well-maintained vehicles and experienced drivers, we guarantee secure transportation for your goods from Nashik to any destination across India. Enjoy peace of mind knowing that your FTL shipments are in capable hands, with timely deliveries and competitive rates as our commitment to your satisfaction."
    },
    {
      id: 3,
      icon: IMAGE.lms,
      name: "Connect for Last - Mile Services Work",
      location: 'Nashik City',
      description: "For Last-Mile Excellence, Connect with Us! Beyond transporting your goods from Nashik to destinations nationwide, we specialize in last-mile services, ensuring your cargo reaches its final destination swiftly and securely. Our dedicated team and robust network enable us to navigate through urban areas and remote locations alike, guaranteeing prompt delivery and customer satisfaction. Partner with us for reliable last-mile solutions that complete the journey seamlessly, every time."
    },
    {
      id: 4,
      icon: IMAGE.pm,
      name: "Packers and Movers",
      location: 'Nashik to All Over India',
      description: "Effortless Relocation with Our Packers and Movers Service! Whether you're moving your home or office, our expert packers and movers handle every aspect of your relocation with utmost care and precision. From packing fragile items to disassembling and reassembling furniture, we ensure a smooth transition to your new location, whether it's within Nashik or across India. With our reliable team and comprehensive moving solutions, rest assured your belongings are in safe hands, making your move stress-free and hassle-free."
    },
  ];

  const clients = [
    {
      id: 1,
      icon: IMAGE.Siemens
    },
    {
      id: 2,
      icon: IMAGE.atomberg
    },
    {
      id: 3,
      icon: IMAGE.fc_logo
    },
    {
      id: 4,
      icon: IMAGE.Caprihans
    },
    {
      id: 5,
      icon: IMAGE.lavie
    },
    {
      id: 6,
      icon: IMAGE.vip
    },
  ];

  return (
    <div className="w-full h-auto justify-center flex flex-col items-center">
      <div className="relative w-full h-[350px] flex items-center justify-center" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "10",
      }}>
        <div className="text-center text-white">
          <p className="text-4xl font-bold">Welcome to Our Services</p>
          <p className="text-lg font-light mt-2">Providing reliable and efficient solutions for all your needs.</p>
          <Button className="mt-4 bg-deep-orange-600">Learn More</Button>
        </div>
      </div>

      <div
        className="z-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 10,
        }}
      >
        <div className="h-[50vh] w-full flex flex-col z-20 justify-center pt-32">
          <div className="w-full h-fit flex flex-col justify-center align-middle text-center py-10">
            <p className="text-3xl font-bold text-black">OUR SERVICES FOR YOU</p>
            <div className="text-center flex justify-center">
              <p className="text-md font-light w-1/2 text-center text-black">
                Quickly optimize cooperative models for long-term high-impact ROI. Dynamically drive innovative e-commerce and distributed paradigms.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start">
            {services?.map((item, index) => (
              <Card
                key={index}
                title={item?.name}
                dec={item?.description}
                img={item?.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-full z-0 flex items-center justify-center bg-navy">
        <div className="flex flex-col items-start justify-center w-3/6 h-full text-white">
          <p className="text-4xl font-bold py-2">WHY CHOOSE US</p>
          <p className="text-xl font-thin w-2/3 pb-4">
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
        <div className="flex flex-col h-1/3 w-4/12">
          <LiteYouTubeEmbed
            id="RTO6i8hD6CQ"
            className="h-full w-full"
            title="Future of Transportation"
          />
        </div>
      </div>

      <div><Help /></div>

      <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
        <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>TRUSTED BY OUR 148+ CLIENTS</p>
        <div className='flex flex-wrap w-full justify-evenly items-center'>
          {clients.map((item, index) => (
            <div key={index} className='border-4 border-primary rounded-full h-[200px] w-[200px] flex justify-center items-center'>
              <img src={item?.icon} className='object-contain h-[150px] w-[150px] rounded-full' />
            </div>
          ))}
        </div>
        <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>And Many <span className='text-primary tracking-widest'>Moreeeeeeee</span></p>
      </div>
    </div>
  );
}
