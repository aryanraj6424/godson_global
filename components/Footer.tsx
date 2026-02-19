
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#050C1A] border-t border-white/5 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
//           <div className="flex flex-col items-center md:items-start">
//             <Link to="/" className="mb-4">
//               <div className="h-16 w-16 bg-white rounded-full p-1 border-2 border-[#26BAA4] shadow-lg">
//                 <img 
//                   src="/uploads/logoo.png" 
//                   alt="Godson Global Logo" 
//                   className="h-full w-full object-contain scale-125 translate-y-0"
//                 />
//               </div>
//             </Link>
//             <div className="text-white/30 text-sm uppercase tracking-widest font-medium">
//               Your Trusted Export Partner
//             </div>
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
//             <Link to="/" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
//             <Link to="/about" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">About</Link>
//             <Link to="/product/hygiene/baby-diaper" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Products</Link>
//             {/* <Link to="/certificate" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Certificates</Link> */}
//             <Link to="/gallery" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Gallery</Link>
//             <Link to="/contact" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Contact</Link>
//           </div>
          
//           <div className="text-white/30 text-sm font-medium">
//             © {new Date().getFullYear()} Godson Global
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     // Background color changed to the dark navy blue from the image
//     <footer className="bg-[#1A2E3D] text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
//           {/* 1. LEFT SIDE: LOGO SECTION */}
//           <div className="flex flex-col items-center md:items-start space-y-4">
//             <div className="h-24 w-24 bg-white rounded-full p-2 shadow-lg border-2 border-[#2A9DF4] flex items-center justify-center">
//               <img 
//                 src="/uploads/logoo.png" 
//                 alt="Godson Global Logo" 
//                 className="h-full w-full object-contain"
//               />
//             </div>
//             <h3 className="text-xl font-bold tracking-tight text-white">
//               Godson Global
//             </h3>
//             <p className="text-gray-300 text-sm italic">Your Trusted Export Partner</p>
//           </div>

//           {/* 2. MIDDLE: QUICK LINKS */}
//           <div className="flex flex-col space-y-4">
//             <h4 className="text-lg font-bold text-white border-b-2 border-[#2A9DF4] pb-2 mb-2 inline-block md:w-fit">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               <li><Link to="/" className="text-gray-300 hover:text-[#2A9DF4] font-medium transition-colors flex items-center justify-center md:justify-start">› Home</Link></li>
//               <li><Link to="/about" className="text-gray-300 hover:text-[#2A9DF4] font-medium transition-colors flex items-center justify-center md:justify-start">› About Us</Link></li>
//               <li><Link to="/product/hygiene/baby-diaper" className="text-gray-300 hover:text-[#2A9DF4] font-medium transition-colors flex items-center justify-center md:justify-start">› Products</Link></li>
//               <li><Link to="/gallery" className="text-gray-300 hover:text-[#2A9DF4] font-medium transition-colors flex items-center justify-center md:justify-start">› Gallery</Link></li>
//               <li><Link to="/contact" className="text-gray-300 hover:text-[#2A9DF4] font-medium transition-colors flex items-center justify-center md:justify-start">› Contact Us</Link></li>
//             </ul>
//           </div>

//           {/* 3. RIGHT SIDE: FOLLOW US */}
//           <div className="flex flex-col items-center md:items-start space-y-6">
//             <h4 className="text-lg font-bold text-white border-b-2 border-[#2A9DF4] pb-2 inline-block md:w-fit">
//               Follow Us
//             </h4>
//             <div className="flex space-x-4">
//               {/* Social icons with matching blue hover effect */}
//               <a href="#" className="bg-white p-3 rounded-full text-[#1A2E3D] hover:bg-[#2A9DF4] hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
//                 <Facebook size={22} />
//               </a>
//               <a href="#" className="bg-white p-3 rounded-full text-[#1A2E3D] hover:bg-[#2A9DF4] hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
//                 <Instagram size={22} />
//               </a>
//               <a href="https://wa.me/919354503193" target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full text-[#1A2E3D] hover:bg-[#2A9DF4] hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
//                 <MessageCircle size={22} />
//               </a>
//               <a href="#" className="bg-white p-3 rounded-full text-[#1A2E3D] hover:bg-[#2A9DF4] hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
//                 <Youtube size={22} />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* BOTTOM COPYRIGHT */}
//         <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
//           © {new Date().getFullYear()} <span className="font-semibold text-gray-200">Manak Analytics & Development</span>. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FaSquareWhatsapp } from "react-icons/fa6"; 
const Footer: React.FC = () => {
  // Google Maps URL for ITHUM Tower B
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=B-1131+Tower+B+ITHUM+TOWER+Sector+62+Noida";

  return (
    <footer className="bg-[#1A2E3D] text-white py-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-center md:text-left">
          
          {/* 1. LOGO SECTION */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="h-20 w-20 bg-white rounded-full p-2 shadow-lg border-2 border-red flex items-center justify-center">
              <img 
                src="/uploads/logoo.png" 
                alt="Godson Global Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white uppercase">
              Godson Global
            </h3>
            <p className="text-gray-400 text-xs italic">Your Trusted Export Partner</p>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-md font-bold text-white border-b-2 border-[#2A9DF4] pb-2 mb-2 inline-block md:w-fit uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-[#2A9DF4] transition-colors flex items-center justify-center md:justify-start">› Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#2A9DF4] transition-colors flex items-center justify-center md:justify-start">› About Us</Link></li>
              <li><Link to="/product/hygiene/baby-diaper" className="text-gray-300 hover:text-[#2A9DF4] transition-colors flex items-center justify-center md:justify-start">› Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-[#2A9DF4] transition-colors flex items-center justify-center md:justify-start">› Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#2A9DF4] transition-colors flex items-center justify-center md:justify-start">› Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT US (Updated with Your Specific Data) */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-md font-bold text-white border-b-2 border-[#2A9DF4] pb-2 mb-2 inline-block md:w-fit uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-[#2A9DF4] shrink-0 mt-1" />
                <p>
                  B-1131 Tower B, ITHUM TOWER, <br />
                  11th floor, Plot no. A 40, Sector 62, Noida <br />
                  Uttar Pradesh – 201309, India
                </p>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <Phone size={18} className="text-[#2A9DF4] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919354503193" className="hover:text-white">+91 93545 03193</a>
                  <a href="tel:+919870864385" className="hover:text-white">+91 98708 64385</a>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <Mail size={18} className="text-[#2A9DF4] shrink-0 mt-1" />
                <div className="flex flex-col break-all">
                  <a href="mailto:abhayraj.godson@gmail.com" className="hover:text-white">abhayraj.godson@gmail.com</a>
                  <a href="mailto:richa.godson@gmail.com" className="hover:text-white">richa.godson@gmail.com</a>
                  <a href="mailto:godsonglobal24@gmail.com" className="hover:text-white">godsonglobal24@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. MAP & FOLLOW US */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-md font-bold text-white border-b-2 border-[#2A9DF4] pb-2 mb-2 inline-block md:w-fit uppercase tracking-wider">
              Location & Follow
            </h4>
            {/* Clickable Map Image/Iframe */}
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative w-full h-32 rounded-lg overflow-hidden border border-white/10 block"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.13476315579!2d77.3681462!3d28.625725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef00001%3A0x6917643570659976!2sThe%20Ithum!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0, pointerEvents: 'none' }} 
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 bg-black/40">
                Click to Open Map
              </div>
            </a>
            
            <div className="flex justify-center md:justify-start gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#2A9DF4] transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#2A9DF4] transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
              <a href="https://wa.me/919354503193" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#2A9DF4] transition-all transform hover:-translate-y-1"><MessageCircle size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#2A9DF4] transition-all transform hover:-translate-y-1"><Youtube size={18} /></a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Manak Analytics & Development</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;