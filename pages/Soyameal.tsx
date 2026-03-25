
import React, { useRef } from 'react';
import { Send, Phone, ChevronDown } from 'lucide-react';
import { Box } from 'lucide-react'; 
// --- DATA SECTION ---
const SOYA_SECTIONS = [
  {
    id: 1,
    category: "1) SOYAMEAL – De Oiled Cake",
    items: [
      {
        name: "SOYA DE OILED CAKE NORMAL 46% Min",
        desc: "Soya DOC Normal 46% (Soybean De-Oiled Cake) is a premium quality, protein-rich feed ingredient derived from non-GMO soybean seeds after the extraction of oil through solvent processing. With a minimum of 46% crude protein, it serves as a vital component in the formulation of cattle, poultry, aquaculture, and other livestock feeds.",
        image: "/soyamealimg/soya1.png",
        hsn: "23040030",
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
        desc: "Soya DOC Hi-Pro 50-51% (High Protein Soybean De-Oiled Cake) is a superior grade, solvent-extracted soy meal, specially processed to deliver high protein content (min. 50%) and low fiber—ideal for intensive livestock and aquaculture nutrition.",
        image: "/soyamealimg/soya2.png",
        hsn: "23040030",
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
        desc: "Soya Grit Defatted Untoasted is a high protein, solvent-extracted product obtained from NON-GMO soybean seeds after oil extraction. It is untoasted, making it ideal for applications requiring further thermal processing or fermentation like soya sauce and tempeh.",
        image: "/soyamealimg/soya3.png",
        hsn: "23040030",
        specs: [
          { label: "Crude Protein", value: "50%-52% Min" },
          { label: "Moisture", value: "10% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Sand/Silica", value: "0.3% Max" },
          { label: "Fat", value: "1.25% Min" },
          { label: "Total Ash", value: "6.5% Max" }
        ]
      },
      {
        name: "SOYA GRIT – DEFATTED TOASTED",
        desc: "Soya Grit Defatted Toasted is a high quality, protein-rich product deactivating anti-nutritional factors like trypsin inhibitors, making the product safe and highly digestible for both food and animal feed applications.",
        image: "/soyamealimg/soya4.png",
        hsn: "23040030",
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
        desc: "Premium-quality flakes produced from non GMO soybeans after solvent extraction. Ideal for production of soy protein isolates, textured vegetable proteins (TVP), and fermented soy foods.",
        image: "/soyamealimg/soya5.png",
        hsn: "23040030",
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
        desc: "Finely ground powder made from non-GMO soybeans. Especially suited for the production of soy protein isolates, hydrolyzed protein, and food fortification.",
        image: "/soyamealimg/soya6.png",
        hsn: "23040030",
        specs: [
          { label: "Crude Protein", value: "50-52% Min" },
          { label: "Moisture", value: "0.80% Max" },
          { label: "Fiber", value: "3.50% Max" },
          { label: "Fat", value: "1.20% Min" },
          { label: "PDI", value: "20.00% - 35.00%" }
        ]
      }
    ]
  }
];

const Soyameal: React.FC = () => {
  const brandTeal = "#00A99D"; 
  const themeRed = "#7A0C0C"; 

  const contactRef = useRef<HTMLElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-[#f8fafc] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/soyamealimg/banner.png" 
            className="w-full h-full object-cover opacity-60" 
            alt="Soya Banner" 
          />
        </div>
        
        <div className="relative z-10 w-full px-[8%]">
          <div className="max-w-4xl">
            <h1 style={{ color: themeRed, lineHeight: 1.1 }} className="font-black text-6xl md:text-8xl uppercase tracking-tighter drop-shadow-sm">
              QUALITY <br /> SOYA PRODUCTS
            </h1>
            <p style={{ color: brandTeal }} className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-wider">
              HSN Code : 23040030
            </p>
            <button 
              onClick={scrollToContact}
              style={{ backgroundColor: brandTeal }}
              className="mt-10 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all flex items-center shadow-2xl cursor-pointer"
            >
              Request Quote <ChevronDown className="ml-3 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTS SECTION */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {SOYA_SECTIONS.map((section, sIdx) => (
            <div key={section.id} className={`${sIdx === SOYA_SECTIONS.length - 1 ? 'mb-0' : 'mb-24'}`}>
              <div className="flex items-center gap-4 mb-16">
                <div style={{ backgroundColor: brandTeal }} className="h-1.5 w-24"></div>
                <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">{section.category}</h2>
              </div>

              <div className="space-y-32">
                {section.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    
                    {/* Image Column */}
                    <div className={`relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <div style={{ backgroundColor: brandTeal }} className="absolute -inset-4 rounded-[2rem] blur-3xl opacity-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="relative rounded-3xl shadow-2xl w-full h-[450px] object-contain bg-gray-50 border border-gray-100 p-4" 
                      />
                    </div>

                    {/* Content Column */}
                    <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                      <span style={{ color: brandTeal }} className="font-black tracking-[0.3em] uppercase text-xs mb-3 block">Premium Export Grade</span>
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight uppercase">{item.name}</h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base bg-gray-50 p-5 rounded-r-2xl border-l-4" style={{ borderLeftColor: brandTeal }}>
                        {item.desc}
                      </p>

                      <p className="text-gray-400 italic text-[12px] font-bold mb-4">HSN Code: {item.hsn}</p>
                      
                      {/* Specs Table */}
                      <div className="rounded-2xl border-2 border-gray-100 overflow-hidden shadow-lg">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr style={{ backgroundColor: brandTeal }} className="text-white uppercase tracking-widest text-[10px]">
                              <th className="p-3 font-bold border-b border-black/10">Parameter</th>
                              <th className="p-3 font-bold border-b border-black/10">Analysis Value</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {item.specs.map((spec, sIdx) => (
                              <tr key={sIdx} className="hover:bg-teal-50/50 transition-colors">
                                <td className="p-3 font-bold text-gray-700 bg-gray-50/30 uppercase text-[10px] tracking-wider">{spec.label}</td>
                                <td className="p-3 text-gray-600 font-medium">{spec.value}</td>
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
        </div>
      </section>

      {/* 3. PACKAGING SECTION */}
      {/* <section style={{ backgroundColor: '#fcfcfc' }} className="py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-10 uppercase tracking-tighter">Packaging <span style={{ color: brandTeal }}>& Logistics</span></h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Packaging Type", v: "Strong PP Bags" },
                  { t: "Standard Size", v: "50 Kg Packing" },
                  { t: "Min Order Qty", v: "20ft / 40ft Container" },
                  { t: "Quality Check", v: "SGS / Geo-Chem Certified" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border-l-4" style={{ borderLeftColor: brandTeal }}>
                    <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">{item.t}</span>
                    <span className="font-black text-gray-800 text-sm">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div style={{ backgroundColor: brandTeal }} className="absolute inset-0 rounded-full blur-[100px] opacity-10"></div>
               <img src="/soyamealimg/soya9.png" alt="Soya Packaging" className="relative rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section> */}

       <section style={{ backgroundColor: '#f3f7fa' }} className="py-20 border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-5xl font-black text-black mb-12 uppercase tracking-tighter">
          Packaging <span style={{ color: brandTeal }}>& Logistics</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {[
            { t: "Packaging Type", v: "Strong PP Bags" },
            { t: "Standard Size", v: "50 Kg Packing" },
            { t: "Min Order Qty", v: "20ft / 40ft Container" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex items-center justify-between p-6 bg-white rounded-[1.5rem] shadow-md border-l-[6px] transition-all hover:shadow-lg" 
              style={{ borderLeftColor: brandTeal }}
            >
              <div className="flex items-center gap-5">
                {/* Icon Box with subtle brand color background */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${brandTeal}15` }}
                >
                  <Box size={22} style={{ color: brandTeal }} />
                </div>
                
                {/* Label: Gray-500 ko Black kar diya hai */}
                <span className="font-bold text-black uppercase text-xs tracking-widest">
                  {item.t}
                </span>
              </div>

              {/* Value: Ye pehle se Black tha, ab thoda aur bada (base) kiya hai */}
              <span className="font-black text-black text-sm md:text-base text-right">
                {item.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative group">
        <div 
          style={{ backgroundColor: brandTeal }} 
          className="absolute inset-0 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"
        ></div>
        <img 
          src="/soyamealimg/soya9.png" 
          alt="Soya Packaging" 
          className="relative rounded-[2.5rem] shadow-2xl w-full object-cover transform transition-transform hover:scale-[1.02]" 
        />
      </div>
    </div>
  </div>
</section>

      {/* 4. CONTACT FOOTER */}
      <section ref={contactRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ backgroundColor: brandTeal }} className="rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-white text-center lg:text-left">
                <h2 className="text-5xl font-black mb-6 leading-none uppercase tracking-tighter">Get Best <br/> Export Rates</h2>
                <div className="flex items-center justify-center lg:justify-start space-x-4 mt-8">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Phone size={20} /></div>
                   <span className="text-xl font-bold">+91-93545 03193</span>
                </div>
              </div>
              
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl">
                <div className="space-y-4">
                  <input type="text" placeholder="Company Name" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#00A99D] outline-none font-medium" />
                  <textarea rows={3} placeholder="Requirement Details (MT)" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#00A99D] outline-none font-medium"></textarea>
                  <button style={{ backgroundColor: '#111' }} className="w-full text-white font-black uppercase py-5 rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-transform">
                    Request Quote <Send className="ml-3 w-5 h-5 text-[#00A99D]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Soyameal;