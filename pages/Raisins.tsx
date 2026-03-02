// import React from 'react';

// const RAISIN_DATA = [
//   {
//     id: 1,
//     category: "Premium Indian Raisins",
//     items: [
//       {
//         name: "GOLDEN & GREEN RAISINS",
//         desc: "Seedless varieties include the sultana, traditionally sun-dried for natural sweetness. These are high in potassium and copper.",
//         image: "/uploads/image_423089.jpg", // Banner style image
//         varieties: ["Golden Round", "Golden Long", "Green Round", "Green Long"],
//         specs: [
//           { label: "Carbohydrates", value: "79% (4% Fiber)" },
//           { label: "Water Content", value: "15%" },
//           { label: "Protein", value: "3%" },
//           { label: "Energy", value: "299 kcal per 100g" }
//         ]
//       },
//       {
//         name: "BLACK & BROWN RAISINS",
//         desc: "Jumbo Black and Brown raisins are sun-dried to maintain their rich antioxidants and natural minerals.",
//         image: "/uploads/image_422da1.jpg",
//         varieties: ["Jumbo Black Raisins", "Brown Raisins"],
//         specs: [
//           { label: "Nutrients", value: "Rich in Riboflavin & Vitamin B6" },
//           { label: "Minerals", value: "Potassium, Copper, Iron" }
//         ]
//       },
//       {
//         name: "MALAYAR VARIETIES",
//         desc: "Premium quality Malayar raisins sorted by grades (A, AA, AAA) and size (B Long).",
//         image: "/uploads/image_422d7f.jpg",
//         varieties: ["Malayar A", "Malayar AA", "Malayar AAA", "Malayar B Long"]
//       }
//     ]
//   }
// ];

// const Raisins: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white pb-20">
//       {/* Hero Section */}
//       <section className="relative h-[400px] bg-yellow-900 flex items-center justify-center overflow-hidden">
//         <img src="/uploads/image_423089.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Raisins" />
//         <h1 className="relative text-5xl font-bold text-white uppercase tracking-widest text-center px-4">
//           Premium Quality Raisins
//         </h1>
//       </section>

//       {/* --- ADDED TEXT SECTION --- */}
//       <section className="bg-yellow-50 py-12 border-b border-yellow-100">
//         <div className="max-w-5xl mx-auto px-4 text-center">
//           <p className="text-lg md:text-xl text-yellow-900 leading-relaxed italic font-medium">
//             "Raisin varieties depend on the type of grape used and are made in a variety of sizes and colors including green, black, brown, and golden. Seedless varieties include the sultana, the Greek currants Flame grapes. Raisins are traditionally sun-dried, but may also be water-dipped and artificially dehydrated."
//           </p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-4 mt-12">
//         {RAISIN_DATA.map((section) => (
//           <div key={section.id}>
//             <h2 className="text-3xl font-bold border-b-4 border-yellow-500 inline-block mb-10 pb-2">{section.category}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {section.items.map((item, idx) => (
//                 <div key={idx} className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
//                   <div className="h-56 overflow-hidden">
//                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-yellow-800 mb-3">{item.name}</h3>
//                     <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    
//                     {item.varieties && (
//                       <div className="mb-4">
//                         <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Available Types:</span>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {item.varieties.map(v => (
//                             <span key={v} className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded border border-yellow-200">{v}</span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {item.specs && (
//                       <div className="bg-gray-50 p-4 rounded-lg">
//                         <h4 className="text-sm font-bold mb-2">Nutritional Value:</h4>
//                         {item.specs.map(s => (
//                           <div key={s.label} className="flex justify-between text-xs py-1 border-b border-gray-200 last:border-0">
//                             <span className="text-gray-500">{s.label}</span>
//                             <span className="font-semibold">{s.value}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Raisins;



// import React from 'react';

// const RAISIN_DATA = [
//   {
//     id: 1,
//     category: "Premium Indian Raisins",
//     items: [
//       {
//         name: "GOLDEN & GREEN RAISINS",
//         desc: "Seedless varieties include the sultana, traditionally sun-dried for natural sweetness. These are high in potassium and copper.",
//         image: "/uploads/image_423089.jpg", 
//         varieties: ["Golden Round", "Golden Long", "Green Round", "Green Long"],
//         specs: [
//           { label: "Carbohydrates", value: "79% (4% Fiber)" },
//           { label: "Water Content", value: "15%" },
//           { label: "Protein", value: "3%" },
//           { label: "Energy", value: "299 kcal per 100g" }
//         ]
//       },
//       {
//         name: "BLACK & BROWN RAISINS",
//         desc: "Jumbo Black and Brown raisins are sun-dried to maintain their rich antioxidants and natural minerals.",
//         image: "/uploads/image_422da1.jpg",
//         varieties: ["Jumbo Black Raisins", "Brown Raisins"],
//         specs: [
//           { label: "Nutrients", value: "Rich in Riboflavin & Vitamin B6" },
//           { label: "Minerals", value: "Potassium, Copper, Iron" }
//         ]
//       },
//       {
//         name: "MALAYAR VARIETIES",
//         desc: "Premium quality Malayar raisins sorted by grades (A, AA, AAA) and size (B Long).",
//         image: "/uploads/image_422d7f.jpg",
//         varieties: ["Malayar A", "Malayar AA", "Malayar AAA", "Malayar B Long"]
//       }
//     ]
//   }
// ];

// // Gallery Images Array (Total 8 images)
// const GALLERY_IMAGES = [
//   "/rasins/rai1.png", "/rasins/rai2.png", // Row 1 (2 images)
//   "/rasins/rai3.png", "/rasins/rai4.png", // Row 2 (2 images)
//   "/rasins/rai5.png", "/rasins/rai6.png", // Row 3 (2 images)
//   "/rasins/rai7.png", "/rasins/rai8.png", "/rasins/rai9.png", "/rasins/rai10.png" // Row 4 (4 images)
// ];

// const Raisins: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white pb-20 font-sans">
      
//       {/* 1. HERO BANNER SECTION */}
//       <section className="relative h-[450px] bg-[#4a3728] flex items-center justify-center overflow-hidden">
//         <img 
//           src="/uploads/image_423089.jpg" 
//           className="absolute inset-0 w-full h-full object-cover opacity-40" 
//           alt="Raisins Banner" 
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">
//             Premium Raisins
//           </h1>
//           <div className="h-1 w-32 bg-yellow-500 mx-auto"></div>
//         </div>
//       </section>

//       {/* 2. DESCRIPTION TEXT SECTION */}
//       <section className="bg-white pt-16 pb-8 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-light">
//             "Raisin varieties depend on the type of grape used and are made in a variety of sizes and colors including green, black, brown, and golden. Seedless varieties include the sultana, the Greek currants Flame grapes. Raisins are traditionally sun-dried, but may also be water-dipped and artificially dehydrated."
//           </p>
//         </div>
//       </section>

//       {/* 3. NUTRITION VALUE TABLE (Added before Types) */}
//       <section className="max-w-4xl mx-auto px-4 mb-16">
//         <div className="bg-white border-2 border-yellow-100 rounded-2xl overflow-hidden shadow-sm">
//           <div className="bg-yellow-500 py-3 px-6">
//             <h3 className="text-white font-bold uppercase tracking-widest text-center">Nutritional Value (Per 100g)</h3>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-yellow-100">
//              {[
//                {l: "Energy", v: "299 kcal"}, {l: "Protein", v: "3.1g"}, 
//                {l: "Carbs", v: "79.2g"}, {l: "Fiber", v: "3.7g"},
//                {l: "Sugar", v: "59g"}, {l: "Potassium", v: "749mg"},
//                {l: "Iron", v: "1.9mg"}, {l: "Vitamin B6", v: "0.2mg"}
//              ].map((n, i) => (
//                <div key={i} className="p-4 text-center">
//                  <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">{n.l}</p>
//                  <p className="text-lg font-bold text-gray-800">{n.v}</p>
//                </div>
//              ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. TYPES HIGHLIGHT SECTION (Design kept same) */}
//       <section className="bg-yellow-50 py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-center text-3xl font-bold text-yellow-900 uppercase tracking-widest mb-8">
//               Available Raisin Types
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {["Green", "Black", "Golden", "Brown", "Malayar", "Sultana"].map((type) => (
//               <span key={type} className="px-6 py-2 bg-white border-2 border-yellow-500 text-yellow-900 font-bold rounded-full shadow-sm">
//                 {type}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. 8-IMAGE GALLERY SECTION (Row 1-3: 2 images, Row 4: 4 images) */}
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         <div className="space-y-4">
//           {/* Row 1, 2, 3 (2 images each) */}
//           <div className="grid grid-cols-2 gap-4">
//             {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
//               <div key={i} className="h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
//                 <img src={img} className="w-full h-full object-cover hover:scale-105 transition-duration-500" alt="Raisin View" />
//               </div>
//             ))}
//           </div>
//           {/* Row 4 (4 images) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {GALLERY_IMAGES.slice(6, 10).map((img, i) => (
//               <div key={i} className="h-48 overflow-hidden rounded-xl shadow-lg">
//                 <img src={img} className="w-full h-full object-cover hover:scale-105 transition-duration-500" alt="Raisin View" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. PHOTOS WITH NAME SECTION (Product Cards) */}
//       {/* <div className="max-w-7xl mx-auto px-4 mt-10">
//         {RAISIN_DATA.map((section) => (
//           <div key={section.id}>
//             <div className="flex items-center gap-4 mb-12">
//                <h2 className="text-4xl font-black text-gray-900 uppercase">{section.category}</h2>
//                <div className="flex-grow h-[2px] bg-gray-200"></div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {section.items.map((item, idx) => (
//                 <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
//                   <div className="h-64 overflow-hidden relative">
//                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                     <div className="absolute top-4 left-4">
//                        <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Premium</span>
//                     </div>
//                   </div>

//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">{item.name}</h3>
//                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    
//                     {item.varieties && (
//                       <div className="mb-6">
//                         <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Varieties</p>
//                         <div className="flex flex-wrap gap-2">
//                           {item.varieties.map(v => (
//                             <span key={v} className="bg-gray-50 text-gray-700 text-[10px] font-bold px-2 py-1 rounded border border-gray-200">{v}</span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {item.specs && (
//                       <div className="bg-yellow-50/50 p-5 rounded-xl border border-yellow-100">
//                         <p className="text-xs font-black text-yellow-800 uppercase tracking-widest mb-3">Analysis</p>
//                         {item.specs.map(s => (
//                           <div key={s.label} className="flex justify-between text-xs py-1.5 border-b border-yellow-100 last:border-0">
//                             <span className="text-yellow-700/70 font-medium">{s.label}</span>
//                             <span className="text-yellow-900 font-bold">{s.value}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default Raisins;




import React from 'react';

const RAISIN_DATA = [
  {
    id: 1,
    category: "Premium Indian Raisins",
    items: [
      {
        name: "GOLDEN & GREEN RAISINS",
        desc: "Seedless varieties include the sultana, traditionally sun-dried for natural sweetness.",
        image: "/uploads/image_423089.jpg", 
        varieties: ["Golden Round", "Golden Long", "Green Round", "Green Long"],
        specs: [
          { label: "Carbohydrates", value: "79%" },
          { label: "Energy", value: "299 kcal" }
        ]
      },
      {
        name: "BLACK & BROWN RAISINS",
        desc: "Jumbo Black and Brown raisins are sun-dried to maintain rich antioxidants.",
        image: "/uploads/image_422da1.jpg",
        varieties: ["Jumbo Black", "Brown Raisins"],
        specs: [
          { label: "Nutrients", value: "Vitamin B6" },
          { label: "Iron", value: "1.9mg" }
        ]
      },
      {
        name: "MALAYAR VARIETIES",
        desc: "Premium quality Malayar raisins sorted by grades (A, AA, AAA).",
        image: "/uploads/image_422d7f.jpg",
        varieties: ["Malayar A", "Malayar AAA"]
      }
    ]
  }
];

const GALLERY_IMAGES = [
  "/rasins/rai1.png", "/rasins/rai2.png", "/rasins/rai3.png", 
  "/rasins/rai4.png", "/rasins/rai5.png", "/rasins/rai6.png", 
  "/rasins/rai7.png", "/rasins/rai8.png", "/rasins/rai9.png", "/rasins/rai10.png"
];

const Raisins: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[450px] bg-[#4a3728] flex items-center justify-center overflow-hidden">
        <img src="/uploads/image_423089.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">Premium Raisins</h1>
          <div className="h-1 w-32 bg-yellow-500 mx-auto"></div>
        </div>
      </section>

      {/* 2. DESCRIPTION */}
      <section className="bg-white pt-16 pb-8 px-4 text-center max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-light">
          "Raisin varieties depend on the type of grape used and are made in a variety of sizes and colors including green, black, brown, and golden. Seedless varieties include the sultana, the Greek currants Flame grapes. Raisins are traditionally sun-dried, but may also be water-dipped and artificially dehydrated."
        </p>
      </section>

      {/* 3. NUTRITION TABLE */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white border-2 border-yellow-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-yellow-500 py-3 text-center text-white font-bold uppercase tracking-widest">Nutritional Value (Per 100g)</div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-yellow-100">
             {[{l: "Energy", v: "299 kcal"}, {l: "Protein", v: "3.1g"}, {l: "Carbs", v: "79.2g"}, {l: "Fiber", v: "3.7g"}].map((n, i) => (
               <div key={i} className="p-4 text-center">
                 <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">{n.l}</p>
                 <p className="text-lg font-bold text-gray-800">{n.v}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. TYPES SECTION */}
      <section className="bg-yellow-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-yellow-900 uppercase tracking-widest mb-8">Available Raisin Types</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Green", "Black", "Golden", "Brown", "Malayar", "Sultana"].map((type) => (
              <span key={type} className="px-6 py-2 bg-white border-2 border-yellow-500 text-yellow-900 font-bold rounded-full">{type}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION (3-3-4 Layout) */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-4">
        {/* Rows with 3 images each (First 6 images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
            <div key={i} className="aspect-square w-full overflow-hidden rounded-xl shadow-md border border-gray-100">
              <img src={img} className="w-full h-full object-cover" alt="Gallery View" />
            </div>
          ))}
        </div>

        {/* Row with 4 images (Last 4 images) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(6, 10).map((img, i) => (
            <div key={i} className="aspect-square w-full overflow-hidden rounded-xl shadow-md border border-gray-100">
              <img src={img} className="w-full h-full object-cover" alt="Gallery View" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRODUCT CARDS */}
      {/* <div className="max-w-7xl mx-auto px-4 mt-10">
        {RAISIN_DATA.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-4xl font-black text-gray-900 uppercase">{section.category}</h2>
               <div className="flex-grow h-[2px] bg-gray-200"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
              {section.items.map((item, idx) => (
                <div key={idx} className="group w-full max-w-[400px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                  <div className="aspect-square w-full overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                       <h3 className="text-xl font-bold text-white uppercase leading-tight">{item.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.varieties?.map(v => (
                        <span key={v} className="bg-yellow-50 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded border border-yellow-200">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Raisins;