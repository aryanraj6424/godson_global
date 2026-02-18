
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050C1A] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <div className="h-16 w-16 bg-white rounded-full p-1 border-2 border-[#26BAA4] shadow-lg">
                <img 
                  src="/uploads/logoo.png" 
                  alt="Godson Global Logo" 
                  className="h-full w-full object-contain scale-125 translate-y-0"
                />
              </div>
            </Link>
            <div className="text-white/30 text-sm uppercase tracking-widest font-medium">
              Your Trusted Export Partner
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
            <Link to="/about" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">About</Link>
            <Link to="/product/hygiene/baby-diaper" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Products</Link>
            {/* <Link to="/certificate" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Certificates</Link> */}
            <Link to="/gallery" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Gallery</Link>
            <Link to="/contact" className="text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Contact</Link>
          </div>
          
          <div className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} Godson Global
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
