
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
// import { NAV_ITEMS } from '../constants';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//     setMobileExpanded([]);
//   }, [location]);

//   const toggleMobileExpand = (label: string) => {
//     setMobileExpanded(prev => 
//       prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
//     );
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       scrolled || isOpen 
//         ? 'bg-[#050C1A]/95 backdrop-blur-md border-b border-white/5 py-3' 
//         : 'bg-transparent py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center group">
//             <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-white rounded-full border-2 border-[#26BAA4] shadow-lg transform transition-transform group-hover:scale-105 overflow-hidden">
//                <img 
//                  src="/uploads/logoo.png" 
//                  alt="Godson Global Logo" 
//                  className="h-full w-full object-contain scale-125 translate-y-0"
//                />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {NAV_ITEMS.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => setActiveDropdown(item.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   to={item.href === '#' ? location.pathname : item.href}
//                   className={`flex items-center px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all ${
//                     location.pathname === item.href 
//                       ? 'text-[#26BAA4]' 
//                       : 'text-white/80 hover:text-[#26BAA4]'
//                   } ${item.href === '#' && (!item.children || item.children.length === 0) ? 'cursor-default pointer-events-none' : ''}`}
//                 >
//                   {item.label}
//                   {item.children && <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
//                 </Link>

//                 {/* Level 1 Dropdown */}
//                 {item.children && activeDropdown === item.label && (
//                   <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="bg-[#0A192F] border border-white/10 shadow-2xl rounded-xl py-3">
//                       {item.children.map((child) => {
//                         const isNavigable = child.href !== '#';
//                         const hasSubmenu = child.children && child.children.length > 0;

//                         return (
//                           <div key={child.label} className="relative group/sub">
//                             {isNavigable || hasSubmenu ? (
//                               <Link
//                                 to={child.href === '#' ? location.pathname : child.href}
//                                 className="flex items-center justify-between px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-[#26BAA4] transition-colors"
//                               >
//                                 {child.label}
//                                 {hasSubmenu && <ChevronRight className="w-4 h-4" />}
//                               </Link>
//                             ) : (
//                               <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/30 cursor-default">
//                                 {child.label}
//                               </div>
//                             )}

//                             {/* Level 2 Dropdown (Nested Submenu) */}
//                             {hasSubmenu && (
//                               <div className="absolute left-full top-0 pl-2 w-64 hidden group-hover/sub:block animate-in fade-in slide-in-from-left-2 duration-200">
//                                 <div className="bg-[#0A192F] border border-white/10 shadow-2xl rounded-xl py-3">
//                                   {child.children?.map((subChild) => (
//                                     <Link
//                                       key={subChild.label}
//                                       to={subChild.href}
//                                       className="block px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-[#26BAA4] transition-colors"
//                                     >
//                                       {subChild.label}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="pl-4">
//               <a
//                 href="https://wa.me/919354503193"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#26BAA4] text-[#050C1A] px-6 py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-[#1f9b87] transition-all transform hover:scale-105"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-white hover:text-[#26BAA4] transition-colors"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed left-0 right-0 top-[72px] h-[calc(100vh-72px)] bg-[#050C1A] z-40 p-6 flex flex-col space-y-6 overflow-y-auto">
//           {NAV_ITEMS.map((item) => (
//             <div key={item.label} className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Link
//                   to={item.href === '#' ? location.pathname : item.href}
//                   className={`text-xl font-bold uppercase tracking-widest text-white ${item.href === '#' && (!item.children || item.children.length === 0) ? 'pointer-events-none opacity-30' : ''}`}
//                   onClick={() => item.href !== '#' && setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//                 {item.children && (
//                   <button 
//                     onClick={() => toggleMobileExpand(item.label)}
//                     className="p-2 bg-white/5 rounded-lg"
//                   >
//                     <ChevronDown className={`w-5 h-5 text-[#26BAA4] transition-transform ${mobileExpanded.includes(item.label) ? 'rotate-180' : ''}`} />
//                   </button>
//                 )}
//               </div>

//               {item.children && mobileExpanded.includes(item.label) && (
//                 <div className="pl-4 space-y-4 border-l border-white/10 ml-1">
//                   {item.children.map((child) => {
//                     const isNavigable = child.href !== '#';
//                     const hasSubmenu = child.children && child.children.length > 0;

//                     return (
//                       <div key={child.label} className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           {isNavigable || hasSubmenu ? (
//                             <Link
//                               to={child.href === '#' ? location.pathname : child.href}
//                               className="text-sm font-bold uppercase tracking-wider text-white/70"
//                               onClick={() => child.href !== '#' && setIsOpen(false)}
//                             >
//                               {child.label}
//                             </Link>
//                           ) : (
//                             <div className="text-sm font-bold uppercase tracking-wider text-white/30">
//                               {child.label}
//                             </div>
//                           )}
//                           {hasSubmenu && (
//                             <button 
//                               onClick={() => toggleMobileExpand(child.label)}
//                               className="p-1.5 bg-white/5 rounded-md"
//                             >
//                               <ChevronDown className={`w-4 h-4 text-[#26BAA4] transition-transform ${mobileExpanded.includes(child.label) ? 'rotate-180' : ''}`} />
//                             </button>
//                           )}
//                         </div>

//                         {hasSubmenu && mobileExpanded.includes(child.label) && (
//                           <div className="pl-4 space-y-3 border-l border-white/10 ml-1">
//                             {child.children?.map((sub) => (
//                               <Link
//                                 key={sub.label}
//                                 to={sub.href}
//                                 className="block text-white/50 py-1 text-xs font-bold uppercase tracking-widest"
//                                 onClick={() => setIsOpen(false)}
//                               >
//                                 {sub.label}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           ))}
//           <div className="pt-4">
//             <a
//               href="https://wa.me/919354503193"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block bg-[#26BAA4] text-black text-center py-4 rounded-xl font-bold uppercase tracking-widest text-lg shadow-xl"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
// import { NAV_ITEMS } from '../constants';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//     setMobileExpanded([]);
//   }, [location]);

//   const toggleMobileExpand = (label: string) => {
//     setMobileExpanded(prev =>
//       prev.includes(label)
//         ? prev.filter(l => l !== label)
//         : [...prev, label]
//     );
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       scrolled || isOpen
//         ? 'bg-[#E6F2FF]/95 backdrop-blur-md border-b border-blue-100 py-3 shadow-sm'
//         : 'bg-[#E6F2FF] py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">

//           <Link to="/" className="flex items-center group">
//             <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-white rounded-full border-2 border-[#26BAA4] shadow-lg transform transition-transform group-hover:scale-105 overflow-hidden">
//               <img
//                 src="/uploads/logoo.png"
//                 alt="Godson Global Logo"
//                 className="h-full w-full object-contain scale-125 translate-y-0"
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {NAV_ITEMS.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => setActiveDropdown(item.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   to={item.href === '#' ? location.pathname : item.href}
//                   className={`flex items-center px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all ${
//                     location.pathname === item.href
//                       ? 'text-[#0077FF]'
//                       : 'text-[#0A2540] hover:text-[#0077FF]'
//                   } ${
//                     item.href === '#' && (!item.children || item.children.length === 0)
//                       ? 'cursor-default pointer-events-none'
//                       : ''
//                   }`}
//                 >
//                   {item.label}
//                   {item.children && (
//                     <ChevronDown
//                       className={`ml-1 w-3 h-3 transition-transform ${
//                         activeDropdown === item.label ? 'rotate-180' : ''
//                       }`}
//                     />
//                   )}
//                 </Link>

//                 {/* Dropdown */}
//                 {item.children && activeDropdown === item.label && (
//                   <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="bg-white border border-gray-200 shadow-xl rounded-xl py-3">
//                       {item.children.map((child) => {
//                         const isNavigable = child.href !== '#';
//                         const hasSubmenu = child.children && child.children.length > 0;

//                         return (
//                           <div key={child.label} className="relative group/sub">
//                             {isNavigable || hasSubmenu ? (
//                               <Link
//                                 to={child.href === '#' ? location.pathname : child.href}
//                                 className="flex items-center justify-between px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-blue-50 hover:text-[#0077FF] transition-colors"
//                               >
//                                 {child.label}
//                                 {hasSubmenu && <ChevronRight className="w-4 h-4" />}
//                               </Link>
//                             ) : (
//                               <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 cursor-default">
//                                 {child.label}
//                               </div>
//                             )}

//                             {hasSubmenu && (
//                               <div className="absolute left-full top-0 pl-2 w-64 hidden group-hover/sub:block animate-in fade-in slide-in-from-left-2 duration-200">
//                                 <div className="bg-white border border-gray-200 shadow-xl rounded-xl py-3">
//                                   {child.children?.map((subChild) => (
//                                     <Link
//                                       key={subChild.label}
//                                       to={subChild.href}
//                                       className="block px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-blue-50 hover:text-[#0077FF] transition-colors"
//                                     >
//                                       {subChild.label}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-[#0A2540] hover:text-[#0077FF] transition-colors"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed left-0 right-0 top-[72px] h-[calc(100vh-72px)] bg-[#E6F2FF] z-40 p-6 flex flex-col space-y-6 overflow-y-auto">
//           {NAV_ITEMS.map((item) => (
//             <div key={item.label} className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Link
//                   to={item.href === '#' ? location.pathname : item.href}
//                   className="text-xl font-bold uppercase tracking-widest text-[#0A2540]"
//                   onClick={() => item.href !== '#' && setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>

//                 {item.children && (
//                   <button
//                     onClick={() => toggleMobileExpand(item.label)}
//                     className="p-2 bg-white rounded-lg"
//                   >
//                     <ChevronDown
//                       className={`w-5 h-5 text-[#0077FF] transition-transform ${
//                         mobileExpanded.includes(item.label) ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                 )}
//               </div>

//               {item.children && mobileExpanded.includes(item.label) && (
//                 <div className="pl-4 space-y-4 border-l border-blue-200 ml-1">
//                   {item.children.map((child) => (
//                     <Link
//                       key={child.label}
//                       to={child.href === '#' ? location.pathname : child.href}
//                       className="block text-sm font-bold uppercase tracking-wider text-gray-600"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'mr', label: 'Marathi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'kn', label: 'Kannada' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'ur', label: 'Urdu' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
  { code: 'ar', label: 'Arabic' },
  { code: 'ru', label: 'Russian' },
  { code: 'zh-CN', label: 'Chinese' },
  { code: 'ja', label: 'Japanese' },
  { code: 'pt', label: 'Portuguese' },
];

const Navbar: React.FC = () => {

  const [lang, setLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* load google translate */
  useEffect(() => {

    const id="googleTranslateScript";

    if(!document.getElementById(id)){

      const script=document.createElement("script");
      script.id=id;
      script.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async=true;

      document.body.appendChild(script);

      // @ts-ignore
      window.googleTranslateElementInit=()=>{

        // @ts-ignore
        new window.google.translate.TranslateElement(
          {
            pageLanguage:"en",
            autoDisplay:false
          },
          "google_translate_element"
        );

        setTimeout(()=>{
          document.body.style.top="0px";
        },1000);

      };
    }

  },[]);

  /* LANGUAGE CHANGE */
  const changeLanguage=(value:string)=>{

    setLang(value);

    const apply=()=>{

      const select=document.querySelector(".goog-te-combo") as HTMLSelectElement;

      if(select){

        document.cookie=`googtrans=/en/${value};path=/`;
        document.cookie=`googtrans=/en/${value};domain=${window.location.hostname};path=/`;

        select.value=value;
        select.dispatchEvent(new Event("change"));

        document.body.style.top="0px";

      }else{
        setTimeout(apply,300);
      }
    };

    apply();
  };

  return (
    <>
      {/* hidden google widget */}
      <div id="google_translate_element" style={{display:'none'}}/>

      {/* NAVBAR LOCKED FROM TRANSLATION */}
      <nav className={`notranslate fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-[#E6F2FF]/95 backdrop-blur-md border-b border-blue-100 py-3 shadow-sm'
          : 'bg-[#E6F2FF] py-6'
      }`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center">

            {/* LOGO */}
            <Link to="/">
              <div className="h-12 w-12 md:h-16 md:w-16 bg-white rounded-full border-2 border-[#26BAA4] shadow-lg overflow-hidden">
                <img src="/uploads/logoo.png" className="h-full w-full object-contain scale-125"/>
              </div>
            </Link>

            {/* NAV ITEMS */}
            <div className="hidden md:flex items-center space-x-1">

              {NAV_ITEMS.map(item => (
                <Link
                  key={item.label}
                  to={item.href === '#' ? location.pathname : item.href}
                  className="px-4 py-2 text-[13px] font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#0077FF]"
                >
                  {item.label}
                </Link>
              ))}

              {/* LANGUAGE SELECT */}
              <div className="ml-4 relative notranslate">

                <select
                  translate="no"
                  value={lang}
                  onChange={(e)=>changeLanguage(e.target.value)}
                  className="notranslate appearance-none border border-gray-400 bg-white text-[#0A2540] text-sm px-3 pr-8 py-1.5 rounded cursor-pointer w-[150px] h-[34px] focus:outline-none hover:border-[#0077FF]"
                >
                  {languages.map(l=>(
                    <option key={l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                />

              </div>

            </div>

            {/* MOBILE BUTTON */}
            <div className="md:hidden">
              <button onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? <X size={26}/> : <Menu size={26}/>}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* GLOBAL FIX STYLE */}
      <style>{`
        .goog-te-banner-frame.skiptranslate { display:none !important; }
        body { top:0px !important; }
        .goog-tooltip { display:none !important; }
        .goog-text-highlight { background:none !important; box-shadow:none !important; }
      `}</style>

    </>
  );
};

export default Navbar;
