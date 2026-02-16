
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO BANNER - Updated to Dark Background for Navbar Visibility */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2400&auto=format&fit=crop" 
            alt="Cargo Ship Header" 
            className="w-full h-full object-cover"
          />
          {/* Using dark overlay to ensure white navbar text is visible */}
          <div className="absolute inset-0 bg-[#050C1A]/80 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h4 className="text-[#26BAA4] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Godson Global
          </h4>
          <h1 className="text-6xl md:text-[90px] font-serif text-white tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 uppercase leading-none">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-[#26BAA4] mx-auto mt-8 animate-in fade-in zoom-in duration-1000"></div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION - Based on Screenshot 2 & Layout */}
      <section className="relative min-h-[80vh] overflow-hidden">
        {/* Full Section Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050C1A]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-0 shadow-2xl rounded-2xl overflow-hidden">
            
            {/* Orange Info Block (Left Sidebar) */}
            <div className="lg:w-2/5 bg-[#F98E2B] p-10 md:p-16 space-y-12 text-white">
              {/* Location */}
              <div className="flex items-start">
                <MapPin className="w-8 h-8 mr-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Location</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    B-1131 Tower B, ITHUM TOWER<br />
                    11th floor, Plot no. A 40,Sector 62,Noida,Uttar Pradesh.<br />
                    201309<br />
                    Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="w-8 h-8 mr-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Phone</h3>
                  <p className="text-white/90 text-lg">+91 93545 03193</p>
                  <p className="text-white/90 text-lg">+91 98708 64385</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-8 h-8 mr-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Email</h3>
                  <p className="text-white/90 text-lg">abhayraj.godson@gmail.com</p>
                  <p className="text-white/90 text-lg">richa.godson@gmail.com</p>
                  <p className="text-white/90 text-lg">godsonglobal24@gmail.com</p>
                </div>
              </div>

              {/* Open Hours */}
              <div className="flex items-start">
                <Clock className="w-8 h-8 mr-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Open Hours</h3>
                  <div className="space-y-1 text-white/90 text-lg">
                    <p><span className="font-bold">Mon:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Tue:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Wed:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Thur:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Fri:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Sat:</span> 09am – 06pm</p>
                    <p><span className="font-bold">Sun:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form & Social Block (Right Side) */}
            <div className="lg:w-3/5 bg-black/20 backdrop-blur-md p-10 md:p-16 border-l border-white/5">
              <div className="space-y-12">
                <div>
                  <h2 className="text-5xl font-serif text-white mb-10 tracking-tight">Send A Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F98E2B] transition-colors" 
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F98E2B] transition-colors" 
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Message</label>
                      <textarea 
                        rows={5} 
                        className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F98E2B] transition-colors resize-none"
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-white text-[#F98E2B] px-12 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#F98E2B] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Reach Us Social Section */}
                <div>
                  <h3 className="text-5xl font-serif text-white mb-10 tracking-tight">Reach Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.facebook.com/people/Godson-Global/61571279177409/" className="w-14 h-14 bg-[#3b5998] hover:scale-110 transition-transform rounded flex items-center justify-center text-white"><Facebook className="w-6 h-6" /></a>
                    <a href="https://www.instagram.com/godson_global_/" className="w-14 h-14 bg-[#E1306C] hover:scale-110 transition-transform rounded flex items-center justify-center text-white"><Instagram className="w-6 h-6" /></a>
                    <a href="https://www.linkedin.com/company/godson-global-pvt-ltd/" className="w-14 h-14 bg-[#0077B5] hover:scale-110 transition-transform rounded flex items-center justify-center text-white"><Linkedin className="w-6 h-6" /></a>
                    <a href="https://www.youtube.com/@GodsonGlobal" className="w-14 h-14 bg-[#FF0000] hover:scale-110 transition-transform rounded flex items-center justify-center text-white"><Youtube className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
