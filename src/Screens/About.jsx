import React from "react";
import { IMAGE } from "../Assets/Images";
import { Button } from "@material-tailwind/react";
import VerifiedIcon from "@mui/icons-material/Verified";
import truck from "../Images/truck.jpg";
import Help from "../Components/Help";
import banner from "../Images/banner.png";
import Marquee from "react-fast-marquee";

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
    <div className="w-full flex flex-col items-center bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Pakash Logistics: Our Journey and Commitment</title>
        <meta
          name="description"
          content="Learn about Pakash Logistics and our commitment to delivering excellence in transportation services. Discover our journey, values, and dedication to providing reliable and efficient logistics solutions tailored to your needs"
        />
      </Helmet>
      <div
        className="relative w-full h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "10",
        }}
      >
        <div className="text-center text-white md:text-start w-full md:p-20">
          <p className="text-4xl font-bold md:w-full md:text-start">
            Welcome to Our Company
          </p>
          <p className="text-lg font-light mt-2">
            Delivering excellence in transportation and logistics
          </p>
          <Button className="mt-4 bg-deep-orange-600">Learn More</Button>
        </div>
      </div>

      <div className="w-full flex justify-center p-3">
        <div className="w-full lg:w-2/3 h-auto bg-white shadow-lg flex flex-col lg:flex-row gap-5 rounded-xl">
          <div
            className="bg-gray-500 w-full lg:w-1/2 h-[200px] lg:h-auto flex-shrink-0 rounded-lg"
            style={{
              backgroundImage: `url(${truck})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="w-full lg:w-1/2 flex">
            <div className="flex flex-col justify-center p-4">
              <p className="text-3xl font-bold text-black">
                WELCOME WORLD WIDE BEST TRANSPORT COMPANY
              </p>
              <div className="md:flex flex-row hidden items-center mt-4">
                <div className="h-[60px] mx-2 w-0.5 bg-deep-orange-600"></div>
                <p className="text-xl font-normal text-black">
                  Competently implement efficient e-commerce without cross-unit
                  growth strategies.
                </p>
              </div>
              <div className="flex flex-col mt-4">
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
                <hr className="w-full h-[2px] bg-deep-orange-600 border-0 rounded my-5" />
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <p className="text-2xl font-bold text-black">
                    Want to Know About us?
                  </p>
                  <button className="mt-4 lg:mt-0 bg-deep-orange-600 p-2 rounded-lg px-4 text-white">
                    ABOUT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[90%] lg:w-[78%] flex-col items-center my-16">
        <p className="text-4xl font-semibold text-blue-gray-900 text-center">
          OUR DELIVERY PARTNERS
        </p>

        <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
          {partner.map((item) => (
            <div
              key={item.id}
              className=" rounded-full h-[150px] lg:h-[200px] w-[150px] lg:w-[200px] flex justify-center items-center m-4"
            >
              <img
                src={item.icon}
                alt=""
                className="object-contain h-[100px] lg:h-[150px] w-[100px] lg:w-[150px]"
              />
            </div>
          ))}
        </div>
        <p className="text-4xl font-semibold text-blue-gray-900 mt-16">
          5 Years of <span className="text-primary tracking-widest">Trust</span>
        </p>
      </div>

      <div className="flex w-[90%] lg:w-[78%] flex-col items-center my-16">
        <p className="text-4xl font-semibold text-blue-gray-900 text-center">
          TRUSTED BY OUR 148+ CLIENTS
        </p>
        <Marquee gradient={true} gradientColor="white">
          {" "}
          <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
            {clients.map((item) => (
              <div
                key={item.id}
                className=" rounded-full h-[150px] lg:h-[200px] w-[150px] lg:w-[200px] flex justify-center items-center m-4"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="object-contain h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] rounded-full"
                />
              </div>
            ))}
          </div>
        </Marquee>
        <p className="text-4xl font-semibold text-blue-gray-900 mt-16 text-center">
          And Many{" "}
          <span className="text-primary tracking-widest">Moreeeeeeee</span>
        </p>
      </div>
      <div className="w-full h-full">
        <Help />
      </div>
    </div>
  );
}
