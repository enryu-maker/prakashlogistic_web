import React from 'react'
import { useState, useRef, useEffect } from "react";
import bg from "../Images/bg.png";
import bg1 from "../Images/bg2.png"; 

function Count() { const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
  }) => {
    const [count, setCount] = useState(initialValue);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };
    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      if (countRef.current) {
        observer.observe(countRef.current);
      }
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [options]);
    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const framesPerSecond = 60;
        const totalFrames = (duration / 1000) * framesPerSecond;
        const incrementValue = (targetValue - initialValue) / totalFrames;

        let currentCount = initialValue;
        const animationInterval = setInterval(() => {
          currentCount += incrementValue;
          setCount(Math.round(currentCount));

          if (incrementValue > 0 && currentCount >= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          } else if (incrementValue < 0 && currentCount <= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          }
        }, 1000 / framesPerSecond);

        return () => clearInterval(animationInterval);
      }
    }, [isVisible, initialValue, targetValue]);
    return (
      <div className="container" ref={countRef}>
        <div className="icon">{iconComponent}</div>
        <span className="num">{count}</span>
        <span className="text">{text}</span>
      </div>
    );
  };
  const variants = {
    initial: {
      transform: "translateZ(4px) translateY(-2px)",
    },
    animate: {
      transform: "translateZ(32px) translateY(-20px)",
    },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "easeInOut",
    },
  };
  return (
    <div>      <div className="h-[20vh]  w-full bg-white flex justify-center ">
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "10",
      }}
      className="h-[25vh] -mt-20 full bg-white flex flex-row px-20 p-16 gap-20 justify-between border-deep-orange-600 border-y-4"
    >
      <div className=" text-start text-5xl">
        <h1 className="text-deep-orange-600 text-center">
          <CountUpAnimation initialValue={0} targetValue={112} text="+" />
        </h1>
        <h1 className="text-xl text-center text-black">
          Vehicals
        </h1>
      </div>
      <div className=" text-start text-5xl ">
        <h1 className="text-deep-orange-600 text-center">
          <CountUpAnimation initialValue={0} targetValue={140} text="+" />
        </h1>
        <h1 className="text-xl text-center text-black">Best Employees</h1>
      </div>
      <div className=" text-start text-5xl ">
        <h1 className="text-deep-orange-600 text-center">
          <CountUpAnimation initialValue={0} targetValue={148} text="+" />
        </h1>
        <h1 className="text-xl text-center text-black">
          World Wide Clients
        </h1>
      </div>
      <div className=" text-start text-5xl ">
        <h1 className="text-deep-orange-600 text-center">
          <CountUpAnimation initialValue={0} targetValue={100} text="+" />
        </h1>
        <h1 className="text-xl text-center text-black">Daily Delivery</h1>
      </div>
    </div>
  </div></div>
  )
}

export default Count