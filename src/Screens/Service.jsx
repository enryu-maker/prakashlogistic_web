import React from 'react'
import { IMAGE } from '../Assets/Images'
import { Button } from '@material-tailwind/react'

export function Service() {
    const services = [
        {
            id: 1,
            icon : IMAGE.ptl,
            name: "PTL  - Part Truck Load",
            location: 'Nashik to All Over India',
            description: "Efficient and Reliable Trucking Solutions: From Nashik to Anywhere in India. Our comprehensive transportation service ensures safe and timely delivery of your goods, whether it's a single pallet or a full truckload. With a focus on professionalism and customer satisfaction, we offer competitive rates and personalized solutions to meet your shipping needs. Trust us to handle your cargo with care and precision, delivering peace of mind every mile of the journey."
        },
        {
            id: 2,
            icon : IMAGE.ftl,
            name: "FTL -  Full Truck Load",
            location: 'Bhiwandi - Pune - Gujarat',
            description: "Seamless FTL Solutions: Covering the Nation from Nashik. Our Full Truck Load (FTL) service offers you the entire truck for your cargo, ensuring maximum efficiency and reliability. With a fleet of well-maintained vehicles and experienced drivers, we guarantee secure transportation for your goods from Nashik to any destination across India. Enjoy peace of mind knowing that your FTL shipments are in capable hands, with timely deliveries and competitive rates as our commitment to your satisfaction."
        },
        {
            id: 3,
            icon : IMAGE.lms,
            name: "Connect for Last - Mile Services Work",
            location: 'Nashik City',
            description: "For Last-Mile Excellence, Connect with Us! Beyond transporting your goods from Nashik to destinations nationwide, we specialize in last-mile services, ensuring your cargo reaches its final destination swiftly and securely. Our dedicated team and robust network enable us to navigate through urban areas and remote locations alike, guaranteeing prompt delivery and customer satisfaction. Partner with us for reliable last-mile solutions that complete the journey seamlessly, every time."
        },
        {
            id: 4,
            icon : IMAGE.pm,
            name: "Packers and Movers",
            location: 'Nashik to All Over India',
            description: "Effortless Relocation with Our Packers and Movers Service! Whether you're moving your home or office, our expert packers and movers handle every aspect of your relocation with utmost care and precision. From packing fragile items to disassembling and reassembling furniture, we ensure a smooth transition to your new location, whether it's within Nashik or across India. With our reliable team and comprehensive moving solutions, rest assured your belongings are in safe hands, making your move stress-free and hassle-free."
        },
    ]

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
    ]
    return (
        <div className='w-full h-auto justify-center flex flex-col items-center'>
            <div className=' bg-blue-gray-200 h-[350px] w-full ' />
            <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
                <p className=' text-4xl font-semibold font-Poppins text-blue-gray-900 '>OUR SERVICE FOR YOU</p>
                <div className=' flex flex-wrap w-full justify-evenly items-center'>
                    {
                        services.map((item, index) => (
                            <div key={index} className=' shadow-md flex-col  h-[600px] w-[350px] hover:shadow-primary flex justify-evenly items-center'>
                                <img src={item?.icon} className=' object-cover h-[150px] w-[92%]' />
                                <p className=' text-2xl font-bold text-center font-Poppins text-primary tracking-widest '>{item?.name}</p>
                                <p className=' text-md font-semibold text-center font-Poppins text-blue-gray-800 tracking-widest '>{item?.location}</p>
                                <p className=' text-xs font-semibold px-4 text-justify font-Poppins text-gray-500 tracking-widest '>{item?.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=' bg-primary h-[350px] w-full flex flex-col justify-evenly items-center '>
                <p className=' text-4xl font-semibold font-Poppins text-white tracking-widest '>YOU NEED ANY HELP? GET FREE CONSULTATION</p>
                <p className=' text-xl font-semibold font-Poppins text-white tracking-widest '>Have Any Question</p>
                <a href='tel:+917773972197' className=' text-4xl font-semibold font-Poppins text-white tracking-widest '>+91 7773972197</a>
                <Button className='bg-white text-primary '>Contact Now</Button>
            </div>
            <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
                <p className=' text-4xl font-semibold font-Poppins text-blue-gray-900 '>TRUSTED BY OUR 148+ CLIENTS</p>
                <div className=' flex flex-wrap w-full justify-evenly items-center'>
                    {
                        clients.map((item, index) => (
                            <div key={index} className='border-4 border-primary rounded-full h-[200px] w-[200px] flex justify-center items-center'>
                                <img src={item?.icon} className=' object-contain h-[150px] w-[150px] rounded-full' />
                            </div>
                        ))
                    }
                </div>
                <p className=' text-4xl font-semibold font-Poppins text-blue-gray-900 '>And Many <span className='text-primary tracking-widest'>Moreeeeeeee</span> </p>
            </div>
        </div>
    )
}
