
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, Eye, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=2400&auto=format&fit=crop" 
            alt="Cargo Ship Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050C1A]/75 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-[80px] font-serif text-white tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Our Legacy
          </h1>
          <div className="w-20 h-1 bg-[#26BAA4] mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. ABOUT OUR COMPANY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-[#050C1A] leading-tight">
                About Our Company
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Welcome to <span className="font-bold text-[#050C1A]">Godson Global</span>, your trusted partner in navigating the world of international trade. 
                  We specialize in providing seamless, innovative, and reliable export solutions, connecting businesses across the globe to the best of what India has to offer. 
                </p>
                <p>
                  Since our establishment, <span className="font-bold text-[#050C1A]">Godson Global</span> has made significant strides in empowering nations and individuals through our diverse range of services. 
                  With a deep commitment to excellence, we have earned the trust of businesses globally, and now, we are taking our vision to the international stage.
                </p>
                <p>
                  Our mission is simple: to deliver outstanding trade experiences that foster growth, prosperity, and lasting relationships. At Godson Global, we are driven by a timeless belief in delivering results that matter, fostering success for you, your business, and your family.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
               <div className="absolute inset-0 bg-[#26BAA4]/5 rounded-full blur-3xl scale-75"></div>
               <img 
                  src="https://i.ibb.co/RTP9M9L/godson-logo.png" 
                  alt="Godson Logo" 
                  className="relative z-10 w-full max-w-md h-auto animate-float"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION CARDS - Based on sample image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-2 duration-500">
              <div className="w-16 h-16 rounded-full border-2 border-[#26BAA4] flex items-center justify-center mb-10 text-[#26BAA4]">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-serif text-[#050C1A] mb-8">Our Vision</h3>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">
                To become a synonym of international trade in India — contributing to the country's growth and bringing communities closer through trade.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-2 duration-500">
              <div className="w-16 h-16 rounded-full border-2 border-[#26BAA4] flex items-center justify-center mb-10 text-[#26BAA4]">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-serif text-[#050C1A] mb-8">Our Mission</h3>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">
                To make Indian products accessible worldwide. We bridge the gap between manufacturer and buyer, becoming the beacon of trust for the global trade community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM SECTION - With random professional images */}
      <section className="py-24 bg-[#050C1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-4">Leadership</h4>
            <h2 className="text-5xl font-serif tracking-tight">Meet Our Team</h2>
            <div className="w-16 h-0.5 bg-[#26BAA4]/40 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Vijay Pratap Srivastav */}
            <div className="group text-center">
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Vijay Pratap Srivastav" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-[#26BAA4] transition-colors"><Linkedin className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">Vijay Pratap Srivastav</h4>
              <p className="text-[#26BAA4] text-sm font-bold uppercase tracking-widest">Managing Director</p>
            </div>

            {/* Abhay Raj Srivastav */}
            <div className="group text-center">
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl ring-4 ring-[#26BAA4]/20 ring-offset-4 ring-offset-[#050C1A]">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" 
                  alt="Abhay Raj Srivastav" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-[#26BAA4] transition-colors"><Linkedin className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">Abhay Raj Srivastav</h4>
              <p className="text-[#26BAA4] text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
            </div>

            {/* Richa Srivastav */}
            <div className="group text-center">
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Richa Srivastav" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-[#26BAA4] transition-colors"><Linkedin className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">Richa Srivastav</h4>
              <p className="text-[#26BAA4] text-sm font-bold uppercase tracking-widest">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REACH US SECTION - Matching Screenshot Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2400&auto=format&fit=crop" 
            alt="Logistics Port" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050C1A]/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="text-6xl font-serif text-white leading-tight">We're Here To Help!</h2>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#26BAA4] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#26BAA4] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#26BAA4] transition-colors resize-none"></textarea>
                </div>
                <button className="bg-[#FFA500] text-white px-12 py-4 rounded-md font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#e69500] transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                  Send Message
                </button>
              </form>

              <div className="pt-12">
                <h3 className="text-6xl font-serif text-white mb-10">Reach Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#3b5998] transition-colors rounded flex items-center justify-center text-white"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#E1306C] transition-colors rounded flex items-center justify-center text-white"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#0077B5] transition-colors rounded flex items-center justify-center text-white"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#FF0000] transition-colors rounded flex items-center justify-center text-white"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            <div className="space-y-16 lg:pt-20">
              <div className="flex items-start">
                <div className="p-3 mr-6">
                  <MapPin className="w-10 h-10 text-[#FFA500]" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-serif text-white">Office</h4>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Grandslam Ithum Tower<br />
                    Tower A, Sector 62, Noida.<br />
                    201309 Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-6">
                  <Mail className="w-10 h-10 text-[#FFA500]" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-serif text-white">Email</h4>
                  <p className="text-white/70 text-lg">
                    abhayraj.godson@gmail.com<br />
                    richa.godson@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-6">
                  <Phone className="w-10 h-10 text-[#FFA500]" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-serif text-white">Call Us</h4>
                  <p className="text-white/70 text-2xl font-bold">+91 93545 03193</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
