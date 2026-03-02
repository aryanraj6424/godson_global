import React from 'react';

// --- DATA SECTION START (Everything is here now) ---
const SOYA_SECTIONS = [
  {
    id: 1,
    category: "1) SOYAMEAL – De Oiled Cake",
    items: [
      {
        name: "SOYA DE OILED CAKE NORMAL 46% Min",
        desc: "Soya DOC Normal 46% (Soybean De-Oiled Cake) is a premium quality, protein-rich feed ingredient derived from non-GMO soybean seeds after the extraction of oil through solvent processing. With a minimum of 46% crude protein, it serves as a vital component in the formulation of cattle, poultry, aquaculture, and other livestock feeds.Processed under strict quality standards, our Soya DOC ensures high digestibility, excellent amino acid balance, and consistent nutrient content, making it ideal for boosting growth, health, and productivity in animals.",
        image: "/soyamealimg/soya1.png",
        specs: [
          { label: "Crude Protein", value: "46% Min" },
          { label: "Moisture", value: "12% Max" },
          { label: "Fiber", value: "6.00% Max" },
          { label: "Sand/Silica", value: "2.00% Max" },
          { label: "Fat", value: "1.50% Max" },
          { label: "Urease Activity", value: "0.30 Max" },
          { label: "KOH", value: "75-85" }
        ]
      },
      {
        name: "SOYA DE OILED CAKE HI PRO 50% Min",
        desc: "Soya DOC Hi-Pro 50-51% (High Protein Soybean De-Oiled Cake) is a superior grade, solvent-extracted soy meal, specially processed to deliver high protein content (min. 50%) and low fiber-ideal for intensive livestock and aquaculture nutrition. Extracted from non-GMO soybeans, this product ensures excellent amino acid balance, high digestibility, and consistent nutrient delivery across feed formulations. Trusted by feed manufacturers and integrators worldwide, Hi-Pro Soya DOC is widely used in poultry, dairy cattle, fish, shrimp, and pig feed formulations where performance and productivity matter.",
        image: "/soyamealimg/soya2.png",
        specs: [
          { label: "Crude Protein", value: "50%-51% Min" },
          { label: "Moisture", value: "12% Max" },
          { label: "Fiber", value: "6.00% Max" },
          { label: "Sand/Silica", value: "1.00% Max" },
          { label: "Fat", value: "1.50% Max" },
          { label: "Urease Activity", value: "0.30 Max" },
          { label: "KOH", value: "75-85" }
        ]
      }
    ]
  },
  {
    id: 2,
    category: "2) SOYA GRIT",
    items: [
      {
        name: "SOYA GRIT – DEFATTED UNTOASTED",
        desc: "Soya Grit Defatted Untoasted is a high protein, solvent-extracted product obtained from NON-GMO soybean seeds after oil extraction. It is untoasted, meaning it is not heat-treated, making it ideal for applications requiring further thermal processing or fermentation. With a neutral flavor, light cream color, and high protein content (~50%), it is widely used in food processing, fermentation industries, and specialty animal feed applications.Untoasted soya grit is particularly suitable for textured soy protein (TSP) production, soya flour manufacturing, enzyme hydrolysis, and fermentation based products like soya sauce, tempeh, and protein hydrolysates.",
        image: "/soyamealimg/soya3.png",
        specs: [
          { label: "Crude Protein", value: "50%-52% Min" },
          { label: "Moisture", value: "10% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Sand/Silica", value: "0.3% Max" },
          { label: "Fat", value: "1.25% Min" },
          { label: "Urease Activity", value: "2.00% Max" },
          { label: "Total Ash", value: "6.5% Max" }
        ]
      },
      {
        name: "SOYA GRIT – DEFATTED TOASTED",
        desc: "Soya Grit Defatted Toasted is a high quality, protein-rich product derived from non-GMO soybeans through solvent extraction and subsequent heat treatment (toasting). The toasting process deactivates anti-nutritional factors like trypsin inhibitors, making the product safe and highly digestible for both food and animal feed applications.With a minimum crude protein content of 50%, low oil, and fiber levels, toasted soya grit is widely used in poultry feed, dairy rations, bakery products, textured soy protein, and extruded snacks. Its uniform granulation and enhanced shelf life make it a preferred choice across industries.",
        image: "/soyamealimg/soya4.png",
        specs: [
          { label: "Crude Protein", value: "50% Min" },
          { label: "Moisture", value: "10% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Sand/Silica", value: "0.3% Max" },
          { label: "Fat", value: "1.2% Min" }
        ]
      }
    ]
  },
  {
    id: 3,
    category: "3) SOYA FLAKES",
    items: [
      {
        name: "SOYA FLAKES – DEFATTED UNTOASTED",
        desc: "Soya Flakes Defatted Untoasted are premium-quality flakes produced from non GMO soybeans after solvent extraction of oil. These flakes are untoasted, meaning they are not heat-treated, and are therefore ideal for applications requiring controlled thermal processing, fermentation, or enzyme treatment.Known for their high protein content (~50%), neutral flavor, and fine texture, these flakes are widely used in the production of soy protein isolates, textured vegetable proteins (TVP), fermented soy foods, and nutritional supplements. Their raw form retains maximum natural nutrients, making them a valuable input in both food and specialty feed industries.",
        image: "/soyamealimg/soya5.png",
        specs: [
          { label: "Crude Protein", value: "50% Min" },
          { label: "Moisture", value: "10% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Sand/Silica", value: "0.3% Max" },
          { label: "Fat", value: "1.2% Min" },
          { label: "PDI", value: "70-80" }
        ]
      }
    ]
  },
  {
    id: 4,
    category: "4) SOYA FLOUR",
    items: [
      {
        name: "SOYA FLOUR – DEFATTED TOASTED",
        desc: "Soya Flour Defatted Untoasted is a high protein, finely ground powder made from non-GMO soybeans after solvent extraction of oil. This flour is in its raw, untoasted form, which makes it ideal for controlled thermal processing, fermentation, and industrial applications requiring high-quality protein and enzyme reactivity.With a minimum protein content of ~50%, this product is especially suited for the production of soy protein isolates, textured soy protein, hydrolyzed protein, and fermented food products such as soy sauce, miso, and tempeh. Its neutral flavor and light cream color also make it suitable for food fortification and specialized feed formulations.",
        image: "/soyamealimg/soya6.png",
        specs: [
          { label: "Crude Protein", value: "50-52% Min" },
          { label: "Moisture", value: "0.80% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Sand/Silica", value: "0.30% Max" },
          { label: "Fat", value: "1.20% Min" },
          { label: "Urease Activity", value: "0.5-0.25 units" },
          { label: "PDI", value: "20.00% - 35.00%" }
        ]
      }
    ]
  }
];
// --- DATA SECTION END ---

const Soyameal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[400px] bg-[#001f3f] flex items-center justify-center text-center px-4">
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase">
            QUALITY SOYA PRODUCTS
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium text-orange-400 italic">
            Nourishing Livestock, Empowering Agriculture
          </p>
          <div className="mt-8 h-1 w-32 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* 2. DYNAMIC SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {SOYA_SECTIONS.map((section) => (
          <div key={section.id} className="mb-24">
            {/* Category Title */}
            <h2 className="text-3xl font-bold text-[#001f3f] mb-12 border-b-4 border-orange-500 inline-block pb-2 uppercase">
              {section.category}
            </h2>

            <div className="space-y-24">
              {section.items.map((item, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left: Text Content */}
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 underline decoration-orange-400 decoration-4 underline-offset-8">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify text-lg bg-gray-50 p-6 rounded-r-xl border-l-4 border-orange-500 shadow-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right: Image & Specs Table */}
                  <div className="flex flex-col items-center order-1 lg:order-2">
                    <div className="relative group mb-8">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-80 h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    
                    {/* Specs Table */}
                    <div className="w-full max-w-md shadow-xl rounded-lg overflow-hidden border border-gray-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-black text-white uppercase tracking-wider">
                          <tr>
                            <th className="p-4 border-r border-gray-700">CONTENT</th>
                            <th className="p-4">PARAMETER</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.specs.map((spec, sIdx) => (
                            <tr key={sIdx} className="border-b border-white/10 last:border-0 text-white">
                              <td className={`p-3 font-bold uppercase border-r border-white/10 ${sIdx % 2 === 0 ? "bg-[#f28c38]" : "bg-[#cd7f32]"}`}>
                                {spec.label}
                              </td>
                              <td className={`p-3 font-semibold ${sIdx % 2 === 0 ? "bg-[#f28c38]" : "bg-[#cd7f32]"}`}>
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 3. LOGISTICS & PACKAGING */}
        <div className="mt-32 pt-16 border-t-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#fffcf5] p-8 md:p-16 rounded-3xl border border-orange-100 shadow-inner">
            <div className="flex flex-col items-center gap-6">
               <div className="bg-white p-2 rounded-lg shadow-lg">
                <img src="/soyamealimg/soya9.png" alt="Packaging Bags" className="w-full max-w-md rounded-lg" />
               </div>
               <p className="text-center font-bold text-gray-600 uppercase tracking-widest">Global Export Quality</p>
            </div>
            
            <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
              <table className="w-full text-center text-white">
                <tbody>
                  <tr className="bg-black">
                    <td className="p-5 font-black uppercase border-r border-gray-800 tracking-widest">Packaging Type</td>
                    <td className="p-5 font-bold">PP BAGS</td>
                  </tr>
                  <tr className="bg-[#cd7f32]">
                    <td className="p-5 font-black uppercase border-r border-orange-300/30 tracking-widest">Packaging Size</td>
                    <td className="p-5 font-bold">50 Kg PP bags</td>
                  </tr>
                  <tr className="bg-[#f28c38]">
                    <td className="p-5 font-black uppercase border-r border-orange-200/30 tracking-widest leading-tight">
                      Minimum Order <br/> Quantity
                    </td>
                    <td className="p-5 font-bold">20 ft / 40 ft full container</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp - Bottom Right */}
   
    </div>
  );
};

export default Soyameal;