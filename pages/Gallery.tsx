
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Maximize2 } from 'lucide-react';

// const Gallery: React.FC = () => {
//   const galleryImages = [
//     {
//       url: "/gallery/img1.jpeg",
//     },
//     {
//       url: "/gallery/img2.jpeg",
//       title: "",
//       category: ""
//     },
//     {
//       url: "/gallery/img3.jpeg",
      
//     },
//     {
//       url: "/gallery/img4.jpeg",
//     },
//     {
//       url: "/gallery/img5.jpeg",
      
//     },
//     {
//       url: "/gallery/img6.jpeg",
     
//     },
//     {
//       url: "/gallery/img7.jpeg",
      
//     },
//     {
//       url: "/gallery/img8.jpeg",
//     },
//     {
//       url: "/gallery/img9.jpeg",
      
//     },
//     {
//       url: "/gallery/img10.jpeg",
      
//     },
//     {
//       url: "/gallery/img11.jpeg",
      
//     },
//     {
//       url: "/gallery/img12.jpeg",
//       title: "Innovation Workshop",
//       category: "Research"
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* 1. HERO SECTION */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2400&auto=format&fit=crop" 
//             alt="Cargo Ship Header" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-[#050C1A]/80 backdrop-blur-[1px]"></div>
//         </div>
//         <div className="relative z-10 text-center px-4 max-w-4xl">
//           <h4 className="text-[#26BAA4] text-xs md:text-sm font-bold tracking-[0.6em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             Godson Global
//           </h4>
//           <h1 className="text-6xl md:text-[90px] font-serif text-white tracking-tight mb-12 leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
//             GALLERY
//           </h1>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
//             {/*  */}
//           </div>
//         </div>
//       </section>

//       {/* 2. GALLERY GRID SECTION */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-serif text-[#050C1A] mb-6">Trade Shows & Global Events</h2>
//             <div className="w-16 h-0.5 bg-[#26BAA4] mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer">
//                 <img 
//                   src={img.url} 
//                   alt={img.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                 />
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
//                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       <span className="text-[#26BAA4] text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
//                         {img.category}
//                       </span>
//                       <h3 className="text-white text-xl font-serif mb-6">{img.title}</h3>
//                       <div className="flex items-center text-white/60 text-xs font-bold uppercase tracking-widest group/btn">
//                         View Details <Maximize2 className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                       </div>
//                    </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 text-center">
//             <button className="bg-[#050C1A] text-white px-12 py-5 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
//               Load More Memories
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;


import React, { useState } from 'react';

const Gallery: React.FC = () => {

  const categories = [
    "All",
    "Trade Shows",
    "Business Development Meeting",
    "Factory Visits",
  ];

  const [active, setActive] = useState("All");
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);

  const galleryImages = [
    { url: "/gallery/img1.jpeg", category: "Business Development Meeting" },
    { url: "/gallery/img2.jpeg", category: "Trade Shows" },
    { url: "/gallery/img3.jpeg", category: "Factory Visits" },
    { url: "/gallery/img4.jpeg", category: "Trade Shows" },
    { url: "/gallery/img5.jpeg", category: "Trade Shows" },
    { url: "/gallery/img6.jpeg", category: "Trade Shows" },
    { url: "/gallery/img7.jpeg", category: "Business Development Meeting" },
    { url: "/gallery/img8.jpeg", category: "Business Development Meeting" },
    { url: "/gallery/img9.jpeg", category: "Business Development Meeting" },
    { url: "/gallery/img10.jpeg", category: "Factory Visits" },
    { url: "/gallery/img11.jpeg", category: "Factory Visits" },
    { url: "/gallery/img12.jpeg", category: "Business Development Meeting" },
  ];

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === active);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="Logistics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050C1A]/90 to-[#050C1A]/70"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h4 className="text-[#26BAA4] text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4">
            <br /><br /><br /><br />
          </h4>
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-[#26BAA4] mx-auto mt-6"></div>
        </div>
      </section>


      {/* GALLERY */}
      <section className="py-24 bg-[#F9FAFB]">
            
        <div className="max-w-7xl mx-auto px-4">
         
          {/* TITLE */}
          <section className="relative h-[1vh] flex items-center justify-center overflow-hidden">
      
      </section>


          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`
                  px-6 py-2 rounded-full border text-sm font-semibold transition
                  ${active === cat
                    ? "bg-[#26BAA4] text-white border-[#26BAA4] shadow"
                    : "bg-white text-[#050C1A] border-gray-300 hover:border-[#26BAA4] hover:text-[#26BAA4]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>


          {/* IMAGES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {filtered.map((img, i) => (

              <div
                key={i}
                onMouseEnter={() => setHoveredImg(img.url)}
                onMouseLeave={() => setHoveredImg(null)}
                className="rounded-2xl overflow-hidden shadow-md group cursor-pointer bg-white"
              >

                <div className="overflow-hidden">
                  <img
                    src={img.url}
                    className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HOVER PREVIEW POPUP */}
      {hoveredImg && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none transition">

          <img
            src={hoveredImg}
            className="max-h-[82vh] max-w-[85vw] rounded-3xl shadow-2xl transition duration-500 scale-100 border-4 border-white"
          />

        </div>
      )}

    </div>
  );
};

export default Gallery;
