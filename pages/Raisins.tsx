

import React, { useRef } from 'react';
import { Send, Phone, ChevronDown, Box } from 'lucide-react';

// --- DATA SECTION ---
const RAISIN_DATA = [
  {
    id: 1,
    category: "Indian Raisins",
    items: [
      {
        name: "GOLDEN & GREEN RAISINS",
        desc: "Seedless varieties include the sultana, traditionally sun-dried for natural sweetness. These raisins are processed to maintain their vibrant color and succulent texture, perfect for confectionery and snacking.",
        image: "/rasins/GreenRoundRaisins.png", 
        hsn: "08062010",
        specs: [
          { label: "Carbohydrates", value: "79% (4% Fiber)" },
          { label: "Energy", value: "299 kcal" },
          { label: "Protein", value: "3%" },
          { label: "Varieties", value: "Golden Round/Long, Green Round/Long" }
        ]
      },
      {
        name: "BLACK & BROWN RAISINS",
        desc: "Jumbo Black and Brown raisins are sun-dried to maintain rich antioxidants. Known for their deep flavor and health benefits, these are widely used in dry fruit mixes and medicinal formulations.",
        image: "/rasins/brownRasins.png",
        hsn: "08062010",
        specs: [
          { label: "Vitamin B6", value: "10-19% DV" },
          { label: "Minerals", value: "Rich in Potassium & Copper" },
          { label: "Type", value: "Jumbo Black / Brown" },
          { label: "Standard", value: "Sun-Dried / Seedless" }
        ]
      },
      {
        name: "MALAYAR VARIETIES",
        desc: "Malayar raisins sorted by strict grades. These raisins are sought after for their consistent size, uniform color, and balanced sweetness, making them a global export favorite.",
        image: "/rasins/malayar AAA.png",
        hsn: "08062010",
        specs: [
          { label: "Grades", value: "Grade A, Grade AA, Grade AAA" },
          { label: "Special Grade", value: "Malayar B Long" },
          { label: "Water Content", value: "15% Average" },
          { label: "Cleaning", value: "Machine Cleaned" }
        ]
      }
    ]
  }
];

const GALLERY_IMAGES = [
  "/rasins/goldLongRaisins.png", "/rasins/goldRoundRasins.png", "/rasins/GreenLongRaisins.png", 
  "/rasins/GreenRoundRaisins.png", "/rasins/brownRasins.png", "/rasins/jumboBlackRaisins.png", 
  "/rasins/malayar A.png", "/rasins/malayar AA.png", "/rasins/malayar AAA.png", "/rasins/Malayar b long rasins.png"
];

const Raisins: React.FC = () => {
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
  {/* Yahan image as a background implement hai */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/rasins/raisinsBanner.png" 
      className="w-full h-full object-cover opacity-60" 
      alt="Raisins Banner" 
    />
  </div>
  
  <div className="relative z-10 w-full px-[8%]">
    <div className="max-w-4xl">
      <h1 style={{ color: themeRed, lineHeight: 1.1 }} className="font-black text-6xl md:text-8xl uppercase tracking-tighter drop-shadow-sm">
        INDIAN RAISINS
      </h1>
      <p style={{ color: brandTeal }} className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-wider">
        HSN Code : 08062010
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

      {/* 2. NUTRITIONAL HIGHLIGHTS SECTION (New based on image 1) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase mb-6" style={{ color: themeRed }}>Nutritional Value</h2>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Raisins are 15% water, 79% carbohydrates (including 4% fiber), and 3% protein. In a reference amount of 100 grams, raisins supply 299 kilocalories and significant amounts of riboflavin, vitamin B6, potassium, and copper."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Carbs", val: "79%" },
                { label: "Water", val: "15%" },
                { label: "Protein", val: "3%" },
                { label: "Energy", val: "299 kcal" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-b-4" style={{ borderBottomColor: brandTeal }}>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-black text-gray-900">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {RAISIN_DATA.map((section) => (
            <div key={section.id} className="mb-24">
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
                        className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover bg-gray-50 border border-gray-100 p-2" 
                      />
                    </div>

                    {/* Content Column */}
                    <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                      <span style={{ color: brandTeal }} className="font-black tracking-[0.3em] uppercase text-xs mb-3 block">Indian Varieties</span>
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
                              <th className="p-3 font-bold border-b border-black/10">Analysis Parameter</th>
                              <th className="p-3 font-bold border-b border-black/10">Standard Value</th>
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

      {/* 4. GALLERY SECTION */}
      <section style={{ backgroundColor: '#f8fafc' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Product <span style={{ color: brandTeal }}>Showcase</span></h2>
            <div style={{ backgroundColor: themeRed }} className="h-1 w-20 mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
                <div key={i} className="aspect-square w-full overflow-hidden rounded-3xl shadow-lg group">
                  <img src={img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Raisin Detail" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {GALLERY_IMAGES.slice(6, 10).map((img, i) => (
                <div key={i} className="aspect-square w-full overflow-hidden rounded-3xl shadow-lg group">
                  <img src={img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Raisin Detail" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PACKAGING & SHIPMENT (Updated based on image 2) */}
      <section style={{ backgroundColor: '#fff' }} className="py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f3f7fa] rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-black mb-12 uppercase tracking-tighter">
                Logistics <span style={{ color: brandTeal }}>& Shipment</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: "Packaging", v: "Bulk - 10KG Corrugated Box" },
                  { t: "1 * 20FCL Capacity", v: "20 MT" },
                  { t: "1 * 40FCL Capacity", v: "28 MT" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center justify-between p-6 bg-white rounded-[1.5rem] shadow-md border-l-[6px] transition-all hover:shadow-lg" 
                    style={{ borderLeftColor: brandTeal }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${brandTeal}15` }}>
                        <Box size={22} style={{ color: brandTeal }} />
                      </div>
                      <span className="font-bold text-black uppercase text-xs tracking-widest">{item.t}</span>
                    </div>
                    <span className="font-black text-black text-sm md:text-base text-right">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
               <div style={{ backgroundColor: brandTeal }} className="absolute inset-0 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <img src="/rasins/soya9.png" alt="Packaging" className="relative rounded-[2.5rem] shadow-2xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
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
                  <textarea rows={3} placeholder="Raisin Variety & Quantity (MT)" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#00A99D] outline-none font-medium"></textarea>
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

export default Raisins;