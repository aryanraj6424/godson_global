
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Eye, Target, Globe, Award, Users, Phone, MapPin, Mail, Clock } from 'lucide-react';

// const Home: React.FC = () => {
//   return (
//     <div className="bg-[#050C1A]">
//       {/* 1. HERO SECTION */}
//       <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2400&auto=format&fit=crop" 
//             alt="Global Trade Port Twilight" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#050C1A]/90 via-[#050C1A]/40 to-[#050C1A]/90"></div>
//         </div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-[#26BAA4] text-sm md:text-lg font-bold tracking-[0.4em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             Your Trusted Export Partner
//           </h2>
          
//           <h1 className="text-5xl md:text-[100px] font-serif text-white mb-8 leading-[1] tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
//             Bringing the Best of <span className="text-[#26BAA4]">India</span><br />
//             to the World
//           </h1>
          
//           <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
//             Seamless, innovative, and reliable export solutions connecting businesses across the globe.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <Link 
//               to="/product/hygiene/baby-diaper" 
//               className="bg-[#26BAA4] text-[#050C1A] px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#1f9b87] transition-all transform hover:scale-105 shadow-xl"
//             >
//               Explore Products
//             </Link>
//             <Link 
//               to="/contact" 
//               className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white transition-all transform hover:scale-105"
//             >
//               Get In Touch
//             </Link>
//           </div>
//         </div>
        
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-[#26BAA4] rounded-full flex justify-center p-1">
//             <div className="w-1.5 h-1.5 bg-[#26BAA4] rounded-full animate-scroll-dot"></div>
//           </div>
//         </div>
//       </section>

//       {/* 2. VISION & MISSION */}
//       <section className="bg-white py-32">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white border border-gray-100 p-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.06)] transition-all">
//               <Eye className="w-12 h-12 text-[#26BAA4] mb-8" />
//               <h3 className="text-3xl font-serif text-[#050C1A] mb-6">Our Vision</h3>
//               <p className="text-gray-500 text-lg leading-relaxed">
//                 To become a synonym of international trade in India — contributing to the country's growth and bringing communities closer through trade.
//               </p>
//             </div>
            
//             <div className="bg-white border border-gray-100 p-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.06)] transition-all">
//               <Target className="w-12 h-12 text-[#26BAA4] mb-8" />
//               <h3 className="text-3xl font-serif text-[#050C1A] mb-6">Our Mission</h3>
//               <p className="text-gray-500 text-lg leading-relaxed">
//                 To make Indian products accessible worldwide. We bridge the gap between manufacturer and buyer, becoming the beacon of trust for the global trade community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. WHO WE ARE / ABOUT */}
//       <section className="bg-[#050C1A] py-32 text-center">
//         <div className="max-w-5xl mx-auto px-4">
//           <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Who We Are</h4>
//           <h2 className="text-5xl font-serif text-white mb-10">About <span className="text-[#26BAA4]">Godson Global</span></h2>
          
//           <div className="space-y-8 text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-20">
//             <p>
//               Welcome to Godson Global, your trusted partner in navigating the world of international trade. 
//               We specialize in providing seamless, innovative, and reliable export solutions, connecting 
//               businesses across the globe to the best of what India has to offer.
//             </p>
//             <p className="text-sm font-medium italic text-white/50">
//               Under the guidance of Mr. Vijay Pratap Srivastav (Managing Director), Mr. Abhay Raj Srivastav (Founder & CEO), 
//               and Mrs. Richa Srivastav (Co-founder), our leadership brings together a wealth of experience and passion 
//               for creating meaningful connections in global trade.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="flex flex-col items-center">
//               <Globe className="w-10 h-10 text-[#26BAA4] mb-4" />
//               <div className="text-5xl font-serif text-white mb-2">20+</div>
//               <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Countries Served</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <Award className="w-10 h-10 text-[#26BAA4] mb-4" />
//               <div className="text-5xl font-serif text-white mb-2">10+</div>
//               <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Years of Trust</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <Users className="w-10 h-10 text-[#26BAA4] mb-4" />
//               <div className="text-5xl font-serif text-white mb-2">500+</div>
//               <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Happy Clients</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. OUR PRODUCTS - Updated to match card aesthetic */}
//       <section className="bg-white py-32">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-20">
//             <h2 className="text-7xl font-serif text-[#050C1A]">
//               Our <span className="text-[#26BAA4]">Products</span>
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               { 
//                 title: "Hygiene Products", 
//                 desc: "Superior quality Baby Diapers, Adult Diapers, and Underpads for personal care.", 
//                 img: "/uploads/babypad.png",
//                 link: "/product/hygiene/baby-diaper"
//               },
//               { 
//                 title: "Soya Meal", 
//                 desc: "High-protein soya de-oiled cake sourced from the finest Indian crops for global livestock feed.", 
//                 img: "/uploads/soyameal.png",
//                 link: "/product/soya-meal"
//               },
//               { 
//                 title: "Raisins", 
//                 desc: "Premium sun-dried raisins sourced from top Indian vineyards, packed with nutrients.", 
//                 img: "/uploads/raisins.png",
//                 link: "/product/raisin"
//               }
//             ].map((prod, i) => (
//               <Link to={prod.link} key={i} className="group cursor-pointer flex flex-col items-start transition-all">
//                 <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gray-50 aspect-square mb-8 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500">
//                   <img 
//                     src={prod.img} 
//                     alt={prod.title} 
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
//                 </div>
//                 <div className="px-2">
//                   <h3 className="text-3xl font-bold text-[#050C1A] mb-3 group-hover:text-[#26BAA4] transition-colors">
//                     {prod.title}
//                   </h3>
//                   <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
//                     {prod.desc}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. GET IN TOUCH */}
//       <section className="bg-[#050C1A] py-32">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-20">
//             <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Reach Out</h4>
//             <h2 className="text-6xl font-serif text-white">Get In <span className="text-[#26BAA4]">Touch</span></h2>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//             <div className="space-y-12">
//               <div className="flex items-start">
//                 <div className="bg-[#26BAA4]/10 p-4 rounded-lg mr-6">
//                   <Phone className="w-6 h-6 text-[#26BAA4]" />
//                 </div>
//                 <div>
//                   <h5 className="text-white font-bold text-lg mb-2">Phone</h5>
//                   <p className="text-white/60">+91 93545 03193</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-[#26BAA4]/10 p-4 rounded-lg mr-6">
//                   <MapPin className="w-6 h-6 text-[#26BAA4]" />
//                 </div>
//                 <div>
//                   <h5 className="text-white font-bold text-lg mb-2">Location</h5>
//                   <p className="text-white/60">Grandslam Ithum Tower, Tower A, Sector 62, Noida, 201309, UP</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-[#26BAA4]/10 p-4 rounded-lg mr-6">
//                   <Mail className="w-6 h-6 text-[#26BAA4]" />
//                 </div>
//                 <div>
//                   <h5 className="text-white font-bold text-lg mb-2">Email</h5>
//                   <p className="text-white/60">abhayraj.godson@gmail.com<br />richa.godson@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-[#26BAA4]/10 p-4 rounded-lg mr-6">
//                   <Clock className="w-6 h-6 text-[#26BAA4]" />
//                 </div>
//                 <div>
//                   <h5 className="text-white font-bold text-lg mb-2">Business Hours</h5>
//                   <p className="text-white/60">Mon – Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-6">
//               <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#26BAA4] rounded-md transition-all" />
//               <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#26BAA4] rounded-md transition-all" />
//               <textarea rows={6} placeholder="Your Message" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#26BAA4] rounded-md transition-all resize-none"></textarea>
//               <button className="w-full bg-[#26BAA4] text-[#050C1A] font-bold uppercase tracking-[0.2em] py-5 rounded-md hover:bg-[#1f9b87] transition-all flex items-center justify-center">
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Globe, Award, Users, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Home: React.FC = () => {

  const certificate = [
    "/certificate/cf1.png",
    "/certificate/cf2.png",
    "/certificate/cf3.png",
    "/certificate/cf4.png",
    "/certificate/cf5.png",
  ];

  return (
    <div className="bg-[#EAF6FF]"> {/* LIGHT BLUE PAGE BASE */}

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/50 to-[#0B1F3A]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[#26BAA4] text-sm md:text-lg font-bold tracking-[0.4em] uppercase mb-6">
            Your Trusted Export Partner
          </h2>

          <h1 className="text-5xl md:text-[100px] font-serif text-white mb-8 leading-[1] tracking-tight">
            Bringing the Best of <span className="text-[#26BAA4]">India</span><br />
            to the World
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-12">
            Seamless, innovative, and reliable export solutions connecting businesses across the globe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/product/hygiene/baby-diaper"
              className="bg-[#26BAA4] text-[#050C1A] px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#1f9b87] transition-all shadow-xl"
            >
              Explore Products
            </Link>

            <Link 
              to="/contact"
              className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          <div className="p-12 rounded-xl shadow bg-[#F6FBFF]">
            <Eye className="w-12 h-12 text-[#26BAA4] mb-8"/>
            <h3 className="text-3xl font-serif text-[#050C1A] mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To become a synonym of international trade in India — contributing to the country's growth and bringing communities closer through trade.
            </p>
          </div>

          <div className="p-12 rounded-xl shadow bg-[#F6FBFF]">
            <Target className="w-12 h-12 text-[#26BAA4] mb-8"/>
            <h3 className="text-3xl font-serif text-[#050C1A] mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To make Indian products accessible worldwide while building trusted global trade connections.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT US */}
<section className="bg-[#F0F8FF] py-32">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">
      Who We Are
    </h4>

    <h2 className="text-5xl font-serif text-[#050C1A] mb-10">
      About <span className="text-[#26BAA4]">Godson Global</span>
    </h2>

    <div className="space-y-8 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-20">
      <p>
        Welcome to Godson Global, your trusted partner in navigating the world of international trade. 
        We specialize in providing seamless, innovative, and reliable export solutions, connecting 
        businesses across the globe to the best of what India has to offer.
      </p>

      <p className="text-sm font-medium italic text-gray-500">
        Under the guidance of Mr. Vijay Pratap Srivastav (Managing Director), 
        Mr. Abhay Raj Srivastav (Founder & CEO), and Mrs. Richa Srivastav (Co-founder), 
        our leadership brings together a wealth of experience and passion 
        for creating meaningful connections in global trade.
      </p>
    </div>

    {/* STATS */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      <div className="bg-white rounded-2xl p-10 shadow">
        <div className="text-5xl font-serif text-[#050C1A] mb-2">20+</div>
        <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">
          Countries Served
        </div>
      </div>

      <div className="bg-white rounded-2xl p-10 shadow">
        <div className="text-5xl font-serif text-[#050C1A] mb-2">10+</div>
        <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">
          Years of Trust
        </div>
      </div>

      <div className="bg-white rounded-2xl p-10 shadow">
        <div className="text-5xl font-serif text-[#050C1A] mb-2">500+</div>
        <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">
          Happy Clients
        </div>
      </div>

    </div> */}

  </div>
</section>


      {/* PRODUCTS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-20">
            <h2 className="text-7xl font-serif text-[#050C1A]">
              Our <span className="text-[#26BAA4]">Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Hygiene Products",
                desc: "Superior quality Baby Diapers, Adult Diapers, and Underpads.",
                img: "/uploads/babypad.png",
                link: "/product/hygiene/baby-diaper"
              },
              {
                title: "Soya Meal",
                desc: "High-protein soya meal sourced from the finest crops.",
                img: "/uploads/soyameal.png",
                link: "/product/soya-meal"
              },
              {
                title: "Raisins",
                desc: "Premium sun-dried raisins sourced from Indian vineyards.",
                img: "/uploads/raisins.png",
                link: "/product/raisin"
              }
            ].map((prod,i)=>(
              <Link to={prod.link} key={i} className="group">

                <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-lg mb-6">
                  <img src={prod.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                </div>

                <h3 className="text-3xl font-bold text-[#050C1A] mb-2 group-hover:text-[#26BAA4]">
                  {prod.title}
                </h3>

                <p className="text-gray-500 text-lg">{prod.desc}</p>

              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ✅ NEW CERTIFICATE AUTO SLIDER */}
      <section className="bg-[#F0F8FF] py-28 overflow-hidden">

        <div className="text-center mb-14">
          <h2 className="text-6xl font-serif text-[#050C1A]">
            Our <span className="text-[#26BAA4]">Certificates</span>
          </h2>
        </div>

        <div className="relative w-full">
          <div className="flex gap-16 animate-slide whitespace-nowrap">

            {[...certificate, ...certificate].map((logo,i)=>(
              <div key={i} className="flex items-center justify-center min-w-[200px]">
                <img
                  src={logo}
                  className="h-20 object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>
        </div>

      </section>


      {/* CONTACT */}
      {/* 5. GET IN TOUCH - LIGHT BLUE VERSION */}
<section className="bg-[#EAF6FF] py-32">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-20">
      <h4 className="text-[#2A9DF4] text-xs font-bold tracking-[0.5em] uppercase mb-6">
        Reach Out
      </h4>
      <h2 className="text-6xl font-serif text-[#050C1A]">
        Get In <span className="text-[#2A9DF4]">Touch</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* CONTACT INFO */}
      <div className="space-y-10">

        {[
          {icon: Phone, title:"Phone", value:"+91 93545 03193"},
          {icon: MapPin, title:"Location", value:"B-1131 Tower B, ITHUM TOWER 11th floor, Plot no. A 40, Sector 62, Noida Uttar Pradesh - 201309, India"},
          {icon: Mail, title:"Email", value:"abhayraj.godson@gmail.com  |  richa.godson@gmail.com"},
          {icon: Clock, title:"Business Hours (IST)", value:"Mon – Sat: 9:00 AM – 6:00 PM | Sunday Closed"},
        ].map((item,i)=>(
          <div key={i} className="flex items-start">

            <div className="bg-[#2A9DF4]/10 p-4 rounded-xl mr-6 border border-[#2A9DF4]/20">
              <item.icon className="w-6 h-6 text-[#2A9DF4]" />
            </div>

            <div>
              <h5 className="text-[#050C1A] font-semibold text-lg mb-1">{item.title}</h5>
              <p className="text-gray-600 leading-relaxed">{item.value}</p>
            </div>

          </div>
        ))}

      </div>

      {/* CONTACT FORM */}
      <div className="bg-white border border-[#2A9DF4]/20 rounded-3xl p-10 shadow-xl">

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 px-6 py-4 rounded-2xl
                       focus:outline-none focus:border-[#2A9DF4]
                       focus:ring-2 focus:ring-[#2A9DF4]/30 transition-all"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 px-6 py-4 rounded-2xl
                       focus:outline-none focus:border-[#2A9DF4]
                       focus:ring-2 focus:ring-[#2A9DF4]/30 transition-all"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border border-gray-200 px-6 py-4 rounded-2xl resize-none
                       focus:outline-none focus:border-[#2A9DF4]
                       focus:ring-2 focus:ring-[#2A9DF4]/30 transition-all"
          />

          <button
            className="w-full bg-[#2A9DF4] text-white font-bold uppercase tracking-[0.2em]
                       py-5 rounded-2xl hover:bg-[#1d8be0] transition-all
                       shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Send Message
          </button>

        </div>

      </div>

    </div>
  </div>
</section>


      {/* SLIDER ANIMATION */}
      <style>{`
        .animate-slide{
          animation: slide 25s linear infinite;
        }
        @keyframes slide{
          from{ transform: translateX(0); }
          to{ transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
};

export default Home;
