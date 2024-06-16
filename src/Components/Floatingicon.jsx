import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingButton = () => {
  // Initialize motion values for x and y coordinates
  const x = useMotionValue(10);
  const y = useMotionValue(10);

  // Configure spring properties for smooth animation
  const springConfig = { stiffness: 500, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Function to reset the button to its original position
  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className='flex flex-col justify-center align-middle w-full h-full bg-black '>
      <motion.div
        className="fixed bottom-4 right-4 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
        style={{ x: springX, y: springY }}
        drag
        dragElastic={0.7}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        whileTap={{ scale: 1.2 }}
        onDragEnd={() => resetPosition()}
      >
        <a
          href="https://wa.me/7773972197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className='text-white scale-150' />
        </a>
      </motion.div>
    </div>
  );
};

export default FloatingButton;
