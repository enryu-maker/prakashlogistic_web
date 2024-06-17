import React from "react";
import { IMAGE } from "../Assets/Images";
import { Button } from "@material-tailwind/react";
import VerifiedIcon from "@mui/icons-material/Verified";
import truck from "../Images/truck.jpg";
import Help from "../Components/Help";
import banner from "../Images/banner.png";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

export function About() {
  const partner = [
    {
      id: 1,
      icon: IMAGE.deepworld,
    },
    {
      id: 2,
      icon: IMAGE.delhivery,
    },
    {
      id: 3,
      icon: IMAGE.scorpion,
    },
    {
      id: 4,
      icon: IMAGE.xpress,
    },
  ];

  const clients = [
    {
      id: 1,
      icon: IMAGE.Siemens,
    },
    {
      id: 2,
      icon: IMAGE.atomberg,
    },
    {
      id: 3,
      icon: IMAGE.fc_logo,
    },
    {
      id: 4,
      icon: IMAGE.Caprihans,
    },
    {
      id: 5,
      icon: IMAGE.lavie,
    },
    {
      id: 6,
      icon: IMAGE.vip,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Prakash Logistics: Our Journey and Commitment</title>
        <meta
          name="description"
          content="Learn about Prakash Logistics and our commitment to delivering excellence in transportation services. Discover our journey, values, and dedication to providing reliable and efficient logistics solutions tailored to your needs"
        />
      </Helmet>
      <div
        className="relative w-full h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:text-start text-center text-white w-full md:p-20 p-2">
          <p className="text-3xl md:text-4xl font-bold">Welcome to Our Company</p>
          <p className="text-md md:text-lg font-light mt-2">
            Delivering excellence in transportation and logistics
          </p>
          <Button className="mt-4 bg-deep-orange-600">Learn More</Button>
        </div>
      </div>

      <div className="w-full flex justify-center p-3 bg-white">
        <div className="w-full lg:w-2/3 h-auto bg-white shadow-lg flex flex-col lg:flex-row gap-0 rounded-lg">
          <div
            className="bg-gray-500 w-full lg:w-1/2 h-[200px] lg:h-auto flex-shrink-0 rounded-lg"
            style={{
              backgroundImage: `url(${truck})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="backdrop-blur h-full w-full p-4 rounded-lg overflow-y-scroll space-y-5">
              <p className="text-white font-semibold text-md text-justify">
                Prakash Logistics is a premier logistics company, recognized as a leader in multi-modal express logistics and supply chain services. With operations spanning numerous locations and covering an extensive range of pincodes, we ensure the timely and secure movement of goods.
              </p>
              <p className="text-white font-semibold text-md text-justify">
                Founded in 2019 under the auspices of SK Courier and Parcel Services, Prakash Logistics is supported by a highly motivated and skilled team. Our extensive and well-established resources enable us to deliver seamless logistics solutions to a diverse array of industries, including high-tech, automotive, engineering, pharmaceuticals, retail, and e-commerce.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-4">
            <div className="bg-white h-full w-full rounded-lg">
              <div className="border-0 border-orange-500">
                <div className="flex flex-row">
                  <p className="text-black text-start md:w-44 w-52 border-orange-500 rounded-br-lg p-1 border-b-2 font-semibold text-xl">
                    OUR VISION
                  </p>
                  <div className="w-full h-full py-0 border-t-2 rounded-tl-lg border-l-2 border-orange-500 rounded-r-lg"><p>&#160;</p></div>
                </div>
                <p className="text-black font-thin text-justify p-2">
                  To be amongst the top 3 Express Logistics solutions provider in Indian Subcontinent. We do this through Self Belief and commitment, Widest Reach, Organization Building, IT enabled Infrastructure, SOPs and Brand Building; to create wealth for Indian economy, by bringing efficiency in logistics costs through timely & safe deliveries; thus reducing inventory cost.
                </p>
              </div>
            </div>
            <div className="bg-white h-full w-full rounded-lg mt-4">
              <div className="p-0">
                <div className="flex flex-row">
                  <p className="text-black text-start md:w-52 w-64 border-orange-500 rounded-br-lg p-1 border-b-2 font-semibold text-xl">
                    OUR MISSION
                  </p>
                  <div className="w-full h-full py-0 border-t-2 rounded-tl-lg border-l-2 border-orange-500 rounded-r-lg"><p>&#160;</p></div>
                </div>
                <p className="text-black font-thin text-justify p-2">
                  To be No.1 Express Logistics solutions provider in Indian Subcontinent. We do this through Self Belief and commitment, Widest Reach, Organization Building, IT enabled Infrastructure, SOPs and Brand Building; to create wealth for Indian economy, by bringing efficiency in logistics costs through timely & safe deliveries; thus reducing inventory cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[90%] lg:w-[78%] flex-col items-center my-16">
        <p className="text-4xl font-semibold text-blue-gray-900 text-center">OUR BOOKING PARTNERS</p>

        <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
          {partner.map((item) => (
            <div key={item.id} className="rounded-full h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] flex justify-center items-center m-4">
              <img src={item.icon} alt="" className="object-contain h-[80px] lg:h-[100px] w-[80px] lg:w-[100px]" />
            </div>
          ))}
        </div>
        <p className="text-4xl font-semibold text-blue-gray-900 mt-16">6 Years of <span className="text-primary tracking-widest">Trust</span></p>
      </div>

      <div className="flex w-[90%] lg:w-[78%] flex-col items-center my-16">
        <p className="text-4xl font-semibold text-blue-gray-900 text-center">TRUSTED BY OUR 148+ CLIENTS</p>
        <Marquee gradient={true} gradientColor="white">
          <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
            {clients.map((item) => (
              <div key={item.id} className="rounded-full h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] flex justify-center items-center m-4">
                <img src={item.icon} alt="" className="object-contain h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] rounded-full" />
              </div>
            ))}
          </div>
        </Marquee>
        <p className="text-4xl font-semibold text-blue-gray-900 mt-16 text-center">And Many <span className="text-primary tracking-widest">More...</span></p>
      </div>

      <div className="w-full h-full">
        <Help />
      </div>
    </div>
  );
}
