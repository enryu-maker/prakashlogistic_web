import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingButton = () => {
  return (
    <>
    <div className='flex flex-col justify-center align-middle w-full h-full bg-black'>
      <a
      href="https://wa.me/7773972197" 
      className="fixed bottom-4 z-50 right-4 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
     <WhatsAppIcon className='text-white scale-150'/>
    </a></div>
    </>
  );
};

export default FloatingButton;