
// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, Navigate, Link } from 'react-router-dom';
// import { PRODUCTS } from '../constants';

// import { 
//   CheckCircle2, 
//   ArrowLeft, 
//   Mail, 
//   Droplets, 
//   Shield, 
//   Cloud, 
//   Smile, 
//   Wind, 
//   Moon, 
//   Zap, 
//   Users, 
//   Heart, 
//   Activity, 
//   Layout, 
//   Layers, 
//   Dog, 
//   Stethoscope, 
//   Maximize,
//   ShieldCheck,
//   Send,
//   Phone,
//   Clock,
//   Package,
//   Truck,
//   Box,
//   ChevronDown,
//   Sun,
//   Ruler,
//   Info
// } from 'lucide-react';

// const iconMap: any = {
//   Droplets, Shield, Cloud, Smile, Wind, Moon, Zap, Users, Heart, Activity, Layout, Layers, Dog, Stethoscope, Maximize, ShieldCheck, Sun, Ruler, Info
// };

// // Helper to pick a logical icon for tech specs if not specified
// const getSpecIcon = (label: string) => {
//   const l = label.toLowerCase();
//   if (l.includes('size')) return Ruler;
//   if (l.includes('absorb')) return Droplets;
//   if (l.includes('sheet') || l.includes('layer')) return Layers;
//   if (l.includes('waist') || l.includes('grip') || l.includes('style')) return Maximize;
//   if (l.includes('indicator')) return Info;
//   return Info;
// };

// const ProductDetail: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>();
//   const product = productId ? PRODUCTS[productId] : null;
//   const [activeSlide, setActiveSlide] = useState(0);
//   const contactRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!product || product.sliderImages.length <= 1) return;
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % product.sliderImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [product]);

//   if (!product) {
//     return <Navigate to="/" replace />;
//   }

//   const scrollToContact = () => {
//     contactRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="pt-0 min-h-screen bg-white overflow-x-hidden">
//       {/* HERO BANNER - AUTOMATIC SLIDER */}
//       <section className="relative h-[80vh] md:h-[95vh] overflow-hidden bg-black">
//         {product.sliderImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               idx === activeSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             {/* Added a subtle overlay to maintain readability on white-background images like the crawling baby */}
//             <div className="absolute inset-0 bg-black/20 z-10" />
//             <img 
//               src={img} 
//               alt={`${product.name} slide ${idx}`} 
//               className="w-full h-full object-cover md:object-center" 
//             />
//           </div>
//         ))}

//         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black/60 via-transparent to-black/60">
//           <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-5xl">
//             <h1 className="text-6xl md:text-[120px] font-black text-white tracking-tighter mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-none">
//               {product.heroHeading}
//             </h1>
//             <button 
//               onClick={scrollToContact}
//               className="bg-[#26BAA4] text-black px-12 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#1f9b87] transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center mx-auto"
//             >
//               Request Quote
//               <ChevronDown className="ml-3 w-5 h-5 animate-bounce" />
//             </button>
//           </div>
//         </div>

//         {/* Slider Navigation Dots */}
//         {product.sliderImages.length > 1 && (
//           <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
//             {product.sliderImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveSlide(idx)}
//                 className={`h-1.5 rounded-full transition-all duration-500 ${
//                   idx === activeSlide ? 'bg-[#26BAA4] w-12' : 'bg-white/30 w-6'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* 3. ABOUT PRODUCT SECTION */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//             <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              
//               <h2 className="text-5xl font-serif text-[#050C1A] mb-10 leading-tight">Product Overview</h2>
//               <div className="space-y-8 text-lg text-gray-500 leading-relaxed">
//                 <p>{product.fullDescription}</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {product.featuresList.slice(0, 6).map((f, i) => (
//                     <div key={i} className="flex items-center space-x-3">
//                       <CheckCircle2 className="w-5 h-5 text-[#26BAA4] shrink-0" />
//                       <span className="font-bold text-[#050C1A] text-sm uppercase tracking-wide">{f.title}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="animate-in fade-in slide-in-from-right-8 duration-700">
//               <div className="relative group">
//                 <div className="absolute -inset-4 bg-[#26BAA4]/10 rounded-[2rem] blur-2xl group-hover:bg-[#26BAA4]/20 transition-colors"></div>
//                 <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-gray-100 aspect-square">
//                   <img src={product.image} alt={product.name} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. TECHNICAL SPECIFICATIONS SECTION */}
//       <section className="py-32 bg-[#050C1A]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-24">
//             <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Technical Data</h4>
//             <h2 className="text-5xl font-serif text-white tracking-tight">Specifications</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {product.technicalSpecs.map((spec, i) => {
//               const SpecIcon = getSpecIcon(spec.label);
//               return (
//                 <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all duration-300">
//                   <div className="w-12 h-12 bg-[#26BAA4]/10 text-[#26BAA4] rounded-lg flex items-center justify-center mb-8">
//                     <SpecIcon className="w-6 h-6" />
//                   </div>
//                   <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-4">{spec.label}</div>
//                   <div className="text-2xl font-serif text-white leading-tight">{spec.value}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 5. FEATURES LIST */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-24">
//             <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Key Benefits</h4>
//             <h2 className="text-5xl font-serif text-[#050C1A]">Why Godson Global</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {product.featuresList.map((f, i) => {
//               const Icon = iconMap[f.icon] || CheckCircle2;
//               return (
//                 <div key={i} className="group bg-gray-50 p-12 rounded-2xl hover:bg-[#050C1A] transition-all duration-500">
//                   <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-white/10 group-hover:text-[#26BAA4] transition-colors">
//                     <Icon className="w-8 h-8 text-[#26BAA4]" />
//                   </div>
//                   <h4 className="text-xl font-bold mb-4 text-[#050C1A] group-hover:text-white transition-colors">{f.title}</h4>
//                   <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{f.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 6. AVAILABLE TYPE SECTION */}
//       {product.availableTypes && product.availableTypes.length > 0 && (
//         <section className="py-32 bg-[#050C1A]">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-24">
//               <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Variants</h4>
//               <h2 className="text-5xl font-serif text-white">Available Types</h2>
//             </div>
            
//             <div className={`grid grid-cols-1 ${product.availableTypes.length > 1 ? 'md:grid-cols-2' : ''} gap-12`}>
//               {product.availableTypes.map((type, i) => {
//                 const Icon = iconMap[type.icon] || Zap;
//                 return (
//                   <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl p-16 overflow-hidden hover:bg-white/10 transition-all text-center">
//                     <div className="absolute top-0 right-0 w-80 h-80 bg-[#26BAA4]/5 blur-[120px] rounded-full"></div>
//                     <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-10 mx-auto group-hover:bg-[#26BAA4] group-hover:text-black transition-all">
//                       <Icon className="w-10 h-10 text-[#26BAA4] group-hover:text-black" />
//                     </div>
//                     <h3 className="text-3xl font-serif text-white mb-6">{type.title}</h3>
//                     <p className="text-white/50 text-lg leading-relaxed mb-10">{type.desc}</p>
//                     <div className="inline-flex items-center text-[#26BAA4] font-bold tracking-[0.2em] uppercase text-[10px]">
//                       Export Ready
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 7. PACKAGING & LOGISTICS SECTION */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-24 items-center">
//             <div className="lg:w-1/2">
//               <h4 className="text-[#26BAA4] text-xs font-bold tracking-[0.5em] uppercase mb-6">Global Supply Chain</h4>
//               <h2 className="text-5xl font-serif text-[#050C1A] mb-12">Logistics</h2>
//               <div className="space-y-4">
//                 {product.logistics.map((item, i) => (
//                   <div key={i} className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#26BAA4] transition-colors group">
//                     <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#26BAA4]">
//                       {[Truck, Package, Box, ShieldCheck, Maximize][i % 5] ? React.createElement([Truck, Package, Box, ShieldCheck, Maximize][i % 5], {className: 'w-5 h-5'}) : <CheckCircle2 className="w-5 h-5" />}
//                     </div>
//                     <span className="text-[#050C1A] font-bold text-sm uppercase tracking-wider">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="rounded-2xl overflow-hidden h-[500px] w-[500px]">
//                   <img src="/uploads/logestic.png" alt="Logistics 1" className="w-full h-full object-cover" />
//                 </div>
//                 {/* <div className="rounded-2xl overflow-hidden h-[400px] mt-12">
//                   <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop" alt="Logistics 2" className="w-full h-full object-cover" />
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 8. CONTACT US SECTION */}
//       <section ref={contactRef} className="py-32 bg-[#050C1A]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-[#26BAA4] rounded-2xl p-16 lg:p-24 relative overflow-hidden group">
//             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
//               <div>
//                 <h2 className="text-4xl md:text-6xl font-serif text-black mb-10 leading-tight">Request Global Export Quote</h2>
//                 <p className="text-black/70 text-xl mb-12 font-medium">
//                   Direct factory pricing for wholesalers and distributors. Partner with India's trusted export group.
//                 </p>
//                 <div className="space-y-8">
//                   <div className="flex items-center space-x-6 text-black">
//                     <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
//                       <Phone className="w-6 h-6" />
//                     </div>
//                     <span className="text-2xl font-bold">+91-9354503193</span>
//                   </div>
//                   <div className="flex items-center space-x-6 text-black/60">
//                     <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
//                       <Clock className="w-6 h-6" />
//                     </div>
//                     <span className="text-lg font-bold uppercase tracking-widest">Global Support 24/7</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-black/5 backdrop-blur-md p-10 rounded-xl border border-black/5">
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input type="text" placeholder="Full Name" className="w-full bg-white/20 border border-black/10 rounded-md px-6 py-4 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-all" />
//                     <input type="email" placeholder="Email Address" className="w-full bg-white/20 border border-black/10 rounded-md px-6 py-4 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-all" />
//                   </div>
//                   <input type="tel" placeholder="Phone / WhatsApp" className="w-full bg-white/20 border border-black/10 rounded-md px-6 py-4 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-all" />
//                   <textarea rows={4} placeholder="Quantity & Destination Requirements..." className="w-full bg-white/20 border border-black/10 rounded-md px-6 py-4 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-all resize-none"></textarea>
//                   <button type="button" className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] py-5 rounded-md hover:bg-zinc-900 transition-all flex items-center justify-center shadow-2xl">
//                     Submit Inquiry
//                     <Send className="ml-3 w-5 h-5" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { 
  CheckCircle2, ChevronDown, Send, Phone, Clock, Truck, 
  Package, Box, ShieldCheck, Globe, Shield, Star, Info
} from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? PRODUCTS[productId] : null;
  const [activeSlide, setActiveSlide] = useState(0);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product || product.sliderImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % product.sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#26BAA4] selection:text-white text-gray-800">
      
      {/* 1. HERO BANNER - FULL SCREEN (100vh) */}
      <section className="relative h-screen w-full overflow-hidden bg-gray-100">
        {product.sliderImages.map((img, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img src={img} alt="Product Banner" className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-6xl md:text-[100px] font-black text-white tracking-tighter mb-8 drop-shadow-lg leading-none uppercase">
              {product.heroHeading}
            </h1>
            <button 
              onClick={scrollToContact}
              className="bg-[#26BAA4] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1f9b87] transition-all transform hover:scale-105 shadow-xl flex items-center mx-auto"
            >
              Request Quote <ChevronDown className="ml-3 w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {product.sliderImages.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSlide(idx)} className={`h-2 rounded-full transition-all duration-500 ${idx === activeSlide ? 'bg-[#26BAA4] w-12' : 'bg-white/50 w-6'}`} />
          ))}
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW & DETAILS (Grid Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-[#F0F9FF] rounded-[2rem] blur-2xl"></div>
              <img src={product.image} alt={product.name} className="relative rounded-2xl shadow-xl w-full h-[550px] object-cover border border-gray-100" />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#26BAA4] font-black tracking-[0.3em] uppercase text-sm mb-4 block">Product Insights</span>
              <h2 className="text-5xl font-serif text-gray-900 mb-8 leading-tight">Product Details</h2>
              <p className="text-gray-500 text-xl leading-relaxed mb-10">{product.fullDescription}</p>
              
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.featuresList.slice(0, 6).map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-[#F0F9FF] rounded-xl border border-blue-50">
                    <CheckCircle2 className="w-5 h-5 text-[#26BAA4] shrink-0" />
                    <span className="font-bold text-gray-700 text-sm uppercase tracking-wide">{f.title}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS (Table Form) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 tracking-tight">Product Specifications</h2>
            <div className="w-24 h-1 bg-[#26BAA4] mx-auto mt-6"></div>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#26BAA4] text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-sm">Parameter</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-sm">Value / Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {product.technicalSpecs.map((spec, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-6 font-bold text-gray-900 bg-[#F0F9FF]/50 w-1/3 italic">{spec.label}</td>
                    <td className="p-6 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT FEATURES (Card Layout) */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900">Product Features</h2>
            <p className="text-[#26BAA4] font-medium mt-2 italic tracking-wide">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.featuresList.map((f, i) => (
              <div key={i} className="bg-[#F0F9FF]/50 p-10 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-[#26BAA4] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-teal-100">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 4. PRODUCT FEATURES (Table + Grid Responsive) */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-gray-900">Product Features</h2>
      <p className="text-[#26BAA4] font-medium mt-2 italic tracking-wide">
        Excellence in every detail
      </p>
    </div>

    {/* ✅ DESKTOP TABLE */}
    <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
      <table className="w-full text-left bg-white">
        <thead>
          <tr className="bg-[#26BAA4] text-white">
            <th className="p-6 font-bold uppercase tracking-widest text-sm">Feature</th>
            <th className="p-6 font-bold uppercase tracking-widest text-sm">Description</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {product.featuresList.map((f, i) => (
            <tr key={i} className="hover:bg-[#F0F9FF] transition-colors">
              <td className="p-6 font-bold text-gray-900 italic w-1/3">
                {f.title}
              </td>
              <td className="p-6 text-gray-600">
                {f.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ✅ MOBILE GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
      {product.featuresList.map((f, i) => (
        <div
          key={i}
          className="bg-[#F0F9FF]/40 p-8 rounded-2xl border border-blue-100 
          hover:bg-white hover:shadow-xl hover:-translate-y-2 
          transition-all duration-300"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {f.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {f.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 5. PACKAGING & LOGISTICS (Grid) */}
      <section className="py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-10">Packaging Details</h2>
              <div className="space-y-4">
                {product.logistics.map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-blue-50 shadow-sm hover:border-[#26BAA4] transition-colors">
                    <div className="w-12 h-12 bg-[#26BAA4]/10 rounded-xl flex items-center justify-center text-[#26BAA4]">
                      <Package className="w-6 h-6" />
                    </div>
                    <span className="text-gray-800 font-bold uppercase tracking-widest text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
              <img src="/uploads/logestic.png" alt="Logistics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY GODSON GLOBAL (Table & Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900">Why Godson Global</h2>
            <div className="w-20 h-1 bg-[#26BAA4] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Globe, title: "Global Reach", desc: "Exporting premium goods to 20+ countries." },
              { icon: ShieldCheck, title: "Reliability", desc: "Trusted by international wholesalers." },
              { icon: Truck, title: "Swift Supply", desc: "Optimized logistics for faster deliveries." }
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF]/30 p-10 rounded-2xl text-center border border-blue-50 group hover:bg-[#26BAA4] transition-all duration-500">
                <item.icon className="w-12 h-12 text-[#26BAA4] mx-auto mb-6 group-hover:text-white" />
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-white mb-3">{item.title}</h4>
                <p className="text-gray-500 group-hover:text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <table className="w-full">
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="grid grid-cols-1 md:grid-cols-2">
                  <td className="p-6 bg-gray-50 font-bold text-gray-900 italic border-r border-gray-100">Quality Management</td>
                  <td className="p-6 text-gray-600">Every batch undergoes rigorous quality checks to meet global safety standards.</td>
                </tr>
                <tr className="grid grid-cols-1 md:grid-cols-2">
                  <td className="p-6 bg-gray-50 font-bold text-gray-900 italic border-r border-gray-100">Client Support</td>
                  <td className="p-6 text-gray-600">24/7 dedicated support for international documentation and tracking.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section ref={contactRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#26BAA4] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-teal-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-5xl font-serif mb-6 leading-tight">Request Your Global Export Quote</h2>
                <p className="text-white/90 text-lg mb-10">Direct factory pricing for bulk orders and international distributors.</p>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center border border-white/30"><Phone size={28} /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">Call Us Anytime</p>
                    <p className="text-2xl font-black">+91-93545 03193</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#26BAA4] outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#26BAA4] outline-none" />
                  </div>
                  <textarea rows={3} placeholder="Tell us about your requirements (Quantity, Destination...)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#26BAA4] outline-none resize-none"></textarea>
                  <button className="w-full bg-gray-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-black transition-all flex items-center justify-center">
                    Send Inquiry <Send className="ml-3 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;