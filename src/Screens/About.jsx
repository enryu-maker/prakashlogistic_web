import React from 'react'
import { IMAGE } from '../Assets/Images'
import { Button } from '@material-tailwind/react'

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
                <div className='h-[50vh] w-full flex justify-evenly items-start'>
                    <img src={IMAGE[1]} />
                    <div className='flex flex-col items-center justify-between'>
                        <div className=' rounded-full h-[220px] flex flex-col justify-center border-[5px] border-primary items-center w-[220px] '>
                            <p className=' text-8xl font-Poppins text-primary'>5</p>
                            <p className=' text-xl font-semibold font-Poppins text-blue-gray-900 '>Years Experience</p>
                        </div>
                        <img src={IMAGE[2]} />
                    </div>
                    <div className='flex flex-col justify-evenly h-full '>
                        <p className=' text-3xl font-semibold font-Poppins text-blue-gray-900 '>WELCOME WORLD WIDE BEST</p>
                        <p className=' text-3xl font-semibold font-Poppins text-blue-gray-900 '>LOGISTIC COMPANY</p>
                        <p className=' text-base border-l-8 border-primary text-gray-800 font-Poppins tracking-wider '>Competently implement efficient Logistics Services <br /> without any worries.</p>
                        <img src={IMAGE[3]} />
                        <Button className='bg-primary w-[40%] font-Poppins tracking-widest'>Contact Now</Button>
                    </div>
                </div>
                <div className='h-[20vh] w-full flex justify-evenly items-center bg-blue-gray-900 border-t-8 border-primary'>
                    <div className=' flex flex-col'>
                        <p className=' text-3xl font-semibold font-Poppins text-primary '>150+</p>
                        <p className=' text-xl font-semibold font-Poppins text-white '>Daily Delivery</p>
                    </div>
                    <div className='h-[70%] w-[2px] bg-primary' />
                    <div className=' flex flex-col'>
                        <p className=' text-3xl font-semibold font-Poppins text-primary '>148+</p>
                        <p className=' text-xl font-semibold font-Poppins text-white '>Worldwide Clients</p>
                    </div>
                    <div className='h-[70%] w-[2px] bg-primary' />
                    <div className=' flex flex-col'>
                        <p className=' text-3xl font-semibold font-Poppins text-primary '>100+</p>
                        <p className=' text-xl font-semibold font-Poppins text-white '>Best Employees</p>
                    </div>
                </div>
            </div>
            <div className=' bg-primary h-[350px] w-full flex flex-col justify-evenly items-center '>
                <p className=' text-4xl font-semibold font-Poppins text-white tracking-widest '>YOU NEED ANY HELP? GET FREE CONSULTATION</p>
                <p className=' text-xl font-semibold font-Poppins text-white tracking-widest '>Have Any Question</p>
                <a href='tel:+917773972197' className=' text-4xl font-semibold font-Poppins text-white tracking-widest '>+91 7773972197</a>
                <Button className='bg-white text-primary '>Contact Now</Button>
            </div>
            <div className='flex w-[78%] flex-col justify-evenly items-center h-[100vh]'>
                <p className=' text-4xl font-semibold font-Poppins text-blue-gray-900 '>OUR DELIVERY PARTNERS</p>
                <div className=' flex flex-wrap w-full justify-evenly items-center'>
                    {
                        partner.map((item, index) => (
                            <div className='border-4 border-primary rounded-full h-[200px] w-[200px] flex justify-center items-center'>
                                <img src={item?.icon} className=' object-contain h-[150px] w-[150px]' />
                            </div>
                        ))
                    }
                </div>
                <p className=' text-4xl font-semibold font-Poppins text-blue-gray-900 '>5 Years of<span className='text-primary tracking-widest'> Trust</span> </p>

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
