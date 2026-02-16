
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded([]);
  }, [location]);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || isOpen 
        ? 'bg-[#050C1A]/95 backdrop-blur-md border-b border-white/5 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center p-1 bg-white rounded-full border-2 border-[#26BAA4] shadow-lg transform transition-transform group-hover:scale-105">
               <img 
                 src="https://i.ibb.co/RTP9M9L/godson-logo.png" 
                 alt="Godson Global Logo" 
                 className="h-full w-full object-contain"
               />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href === '#' ? location.pathname : item.href}
                  className={`flex items-center px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all ${
                    location.pathname === item.href 
                      ? 'text-[#26BAA4]' 
                      : 'text-white/80 hover:text-[#26BAA4]'
                  } ${item.href === '#' && (!item.children || item.children.length === 0) ? 'cursor-default pointer-events-none' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Level 1 Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[#0A192F] border border-white/10 shadow-2xl rounded-xl py-3">
                      {item.children.map((child) => {
                        const isNavigable = child.href !== '#';
                        const hasSubmenu = child.children && child.children.length > 0;

                        return (
                          <div key={child.label} className="relative group/sub">
                            {isNavigable || hasSubmenu ? (
                              <Link
                                to={child.href === '#' ? location.pathname : child.href}
                                className="flex items-center justify-between px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-[#26BAA4] transition-colors"
                              >
                                {child.label}
                                {hasSubmenu && <ChevronRight className="w-4 h-4" />}
                              </Link>
                            ) : (
                              <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/30 cursor-default">
                                {child.label}
                              </div>
                            )}

                            {/* Level 2 Dropdown (Nested Submenu) */}
                            {hasSubmenu && (
                              <div className="absolute left-full top-0 pl-2 w-64 hidden group-hover/sub:block animate-in fade-in slide-in-from-left-2 duration-200">
                                <div className="bg-[#0A192F] border border-white/10 shadow-2xl rounded-xl py-3">
                                  {child.children?.map((subChild) => (
                                    <Link
                                      key={subChild.label}
                                      to={subChild.href}
                                      className="block px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-[#26BAA4] transition-colors"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pl-4">
              <a
                href="https://wa.me/919354503193"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#26BAA4] text-[#050C1A] px-6 py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-[#1f9b87] transition-all transform hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#26BAA4] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#050C1A] z-40 p-6 flex flex-col space-y-6 animate-in slide-in-from-right duration-300 overflow-y-auto pb-20">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="space-y-4">
              <div className="flex items-center justify-between">
                <Link
                  to={item.href === '#' ? location.pathname : item.href}
                  className={`text-xl font-bold uppercase tracking-widest text-white ${item.href === '#' && (!item.children || item.children.length === 0) ? 'pointer-events-none opacity-30' : ''}`}
                  onClick={() => item.href !== '#' && setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button 
                    onClick={() => toggleMobileExpand(item.label)}
                    className="p-2 bg-white/5 rounded-lg"
                  >
                    <ChevronDown className={`w-5 h-5 text-[#26BAA4] transition-transform ${mobileExpanded.includes(item.label) ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {item.children && mobileExpanded.includes(item.label) && (
                <div className="pl-4 space-y-4 border-l border-white/10 ml-1">
                  {item.children.map((child) => {
                    const isNavigable = child.href !== '#';
                    const hasSubmenu = child.children && child.children.length > 0;

                    return (
                      <div key={child.label} className="space-y-4">
                        <div className="flex items-center justify-between">
                          {isNavigable || hasSubmenu ? (
                            <Link
                              to={child.href === '#' ? location.pathname : child.href}
                              className="text-sm font-bold uppercase tracking-wider text-white/70"
                              onClick={() => child.href !== '#' && setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <div className="text-sm font-bold uppercase tracking-wider text-white/30">
                              {child.label}
                            </div>
                          )}
                          {hasSubmenu && (
                            <button 
                              onClick={() => toggleMobileExpand(child.label)}
                              className="p-1.5 bg-white/5 rounded-md"
                            >
                              <ChevronDown className={`w-4 h-4 text-[#26BAA4] transition-transform ${mobileExpanded.includes(child.label) ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>

                        {hasSubmenu && mobileExpanded.includes(child.label) && (
                          <div className="pl-4 space-y-3 border-l border-white/10 ml-1">
                            {child.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="block text-white/50 py-1 text-xs font-bold uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/919354503193"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#26BAA4] text-black text-center py-4 rounded-xl font-bold uppercase tracking-widest text-lg shadow-xl"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
