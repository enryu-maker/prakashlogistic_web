import { Typography } from "@material-tailwind/react";
import { IMAGE } from "../Assets/Images";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];



export function Footer() {
  return (
    <footer className="w-full bg-navy border-t-2 border-deep-orange-600 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
            <a href=""  className="flex justify-center">
                <img src={IMAGE.pl} className="w-[10rem]"/>
            </a>
            <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                <li ><a href="/"  className="text-white hover:text-gray-400">Home</a></li>
                <li className="sm:my-0 my-2" ><a href="/service"  className="text-white hover:text-gray-400">Services</a></li>
                <li ><a href="/about"  className="text-white hover:text-gray-400">About </a></li>
                <li  className="sm:my-0 my-2"><a href="/contact"  className="text-white hover:text-gray-400">Contact</a></li>

            </ul>
            
        </div>

        <div className="py-7 border-t border-gray-700">
        <div className="flex items-center justify-center">
                <span className="text-gray-400 "><a href="">PrakashLogistics</a> designed by NerdTech.</span>
            </div>
            <div className="flex items-center justify-center">
                <span className="text-gray-400 ">©<a href="">NerdTech</a>2024, All rights reserved.</span>
            </div>
            
        </div>
    </div>
</footer>
                                        
  );
}

export default Footer;
