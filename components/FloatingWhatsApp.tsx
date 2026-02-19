
// import React from 'react';
// import { MessageCircle } from 'lucide-react';

// const FloatingWhatsApp: React.FC = () => {
//   return (
//     <a
//       href="https://wa.me/919354503193"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
//     >
//       <MessageCircle className="w-6 h-6" />
//       <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
//         Chat with us
//       </span>
//     </a>
//   );
// };

// export default FloatingWhatsApp;

import React from 'react';
// FaWhatsapp import kiya gaya hai
import { FaWhatsapp } from 'react-icons/fa';
import { FaSquareWhatsapp } from "react-icons/fa6";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919354503193"
      target="_blank"
      rel="noopener noreferrer"
      // rounded-full ko rounded-lg se badla hai square look ke liye
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-lg shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center group"
    >
      {/* Icon size ko adjust kiya gaya hai */}
      {/* <FaWhatsapp className="w-7 h-7" /> */}
      <FaSquareWhatsapp className="w-7 h-7" />
      
      {/* "Chat with us" text hover par smoothly bahar aayega */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap uppercase text-sm tracking-wider">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;