import React from 'react';
import { IMAGE } from '../Assets/Images';
import { Button } from '@material-tailwind/react';
import VerifiedIcon from "@mui/icons-material/Verified";
import truck from "../Images/truck.jpg";
import Help from '../Components/Help';
import banner from "../Images/banner.png";

export function About() {
    const partner = [
        {
            id: 1,
            icon: IMAGE.deepworld
        },
        {
            id: 2,
            icon: IMAGE.delhivery
        },
        {
            id: 3,
            icon: IMAGE.scorpion
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
            id: 5,
            icon: IMAGE.vip
        },
    ];

    return (
        <div className='w-full h-auto justify-center flex flex-col items-center'>
            <div className="relative w-full h-[350px] flex items-center justify-center" style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "10",
            }}>
                <div className="text-center text-white">
                    <p className="text-4xl font-bold">Welcome to Our Company</p>
                    <p className="text-lg font-light mt-2">Delivering excellence in transportation and logistics</p>
                    <Button className="mt-4 bg-deep-orange-600">Learn More</Button>
                </div>
            </div>

            <div className="w-full h-[50%] align-middle flex flex-row justify-center p-3 rounded-xl">
                <div className="w-2/3 h-[50vh] bg-white shadow-lg flex flex-row gap-5 justify-start rounded-xl">
                    <div
                        className="bg-gray-500 w-1/2 h-full flex justify-start items-end rounded-l-xl"
                        style={{
                            backgroundImage: `url(${truck})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div className="w-[50%] h-full flex">
                        <div className="flex flex-col justify-center">
                            <p className="text-3xl p-4 pl-2 text-black font-bold">
                                WELCOME WORLD WIDE BEST TRANSPORT COMPANY
                            </p>
                            <div className="flex flex-row align-middle">
                                <div className="inline-block h-[60px] mx-2 p-[1.5px] min-h-[1em] w-0.5 self-stretch bg-deep-orange-600 dark:bg-white/10"></div>
                                <p className="text-xl font-normal text-black">
                                    Competently implement efficient e-commerce without cross-unit growth strategies.
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

            <div><Help /></div>

            <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
                <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>OUR DELIVERY PARTNERS</p>
                <div className='flex flex-wrap w-full justify-evenly items-center'>
                    {
                        partner.map((item, index) => (
                            <div key={index} className='border-4 border-primary rounded-full h-[200px] w-[200px] flex justify-center items-center'>
                                <img src={item?.icon} className='object-contain h-[150px] w-[150px]' />
                            </div>
                        ))
                    }
                </div>
                <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>5 Years of <span className='text-primary tracking-widest'>Trust</span></p>
            </div>

            <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
                <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>TRUSTED BY OUR 148+ CLIENTS</p>
                <div className='flex flex-wrap w-full justify-evenly items-center'>
                    {
                        clients.map((item, index) => (
                            <div key={index} className='border-4 border-primary rounded-full h-[200px] w-[200px] flex justify-center items-center'>
                                <img src={item?.icon} className='object-contain h-[150px] w-[150px] rounded-full' />
                            </div>
                        ))
                    }
                </div>
                <p className='text-4xl font-semibold font-Poppins text-blue-gray-900'>And Many <span className='text-primary tracking-widest'>Moreeeeeeee</span></p>
            </div>
        </div>
    );
}
