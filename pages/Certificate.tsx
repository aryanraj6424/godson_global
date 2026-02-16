
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Download, ExternalLink, ChevronRight } from 'lucide-react';

const Certificate: React.FC = () => {
  const certificateDocs = [
    {
      title: "Importer-Exporter Code (IEC)",
      issuer: "Ministry of Commerce and Industry, Government of India",
      image: "https://i.ibb.co/3ykS8Vv/iec-cert.png", // Representative placeholder
      description: "Mandatory registration for companies carrying out the import and export of goods and services from India."
    },
    {
      title: "GST Registration Certificate",
      issuer: "Department of Revenue, Government of India",
      image: "https://i.ibb.co/L9Y0j0y/gst-cert.png", // Representative placeholder
      description: "Formal registration under the Goods and Services Tax Act, ensuring tax compliance for global operations."
    },
    {
      title: "APEDA Registration",
      issuer: "Agricultural & Processed Food Products Export Development Authority",
      image: "https://i.ibb.co/BgnD1jH/apeda-logo.png", // Representative placeholder
      description: "Authorization for export of agricultural and processed food products, certifying adherence to quality standards."
    },
    {
      title: "Udyam Registration",
      issuer: "Ministry of Micro, Small and Medium Enterprises",
      image: "https://i.ibb.co/zXqXGyz/udyam-cert.png", // Representative placeholder
      description: "MSME recognition providing various benefits and credibility to the enterprise in the international market."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Based on Screenshot 1 & 3 */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2400&auto=format&fit=crop" 
            alt="Cargo Ship Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050C1A]/80 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h4 className="text-[#26BAA4] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Godson Global
          </h4>
          <h1 className="text-6xl md:text-[90px] font-serif text-white tracking-tight mb-10 leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            CERTIFICATES
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <Link 
              to="/about" 
              className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CERTIFICATES GRID - Based on Screenshot 2, 4, 5 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#050C1A] mb-6">Verified Compliance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We maintain the highest standards of international trade compliance and quality certification to ensure trust and reliability in every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {certificateDocs.map((doc, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-500">
                {/* Document Display Area */}
                <div className="bg-[#F8FAFC] p-8 lg:p-12 relative overflow-hidden flex justify-center items-center aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10 w-full h-full shadow-2xl rounded-sm border border-gray-200 transform group-hover:scale-[1.02] transition-transform duration-700 bg-white p-1 overflow-hidden">
                    {/* Placeholder for actual certificate images from screenshots */}
                    <div className="w-full h-full bg-[#FAFAFA] flex items-center justify-center relative">
                      <img 
                        src={doc.image} 
                        alt={doc.title} 
                        className="w-full h-full object-contain mix-blend-multiply opacity-90"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback Graphic if image fails */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-gray-300">
                        <ShieldCheck className="w-20 h-20 mb-4 opacity-20" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black">{doc.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8 lg:p-10 border-t border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-[#050C1A] mb-2">{doc.title}</h3>
                      <p className="text-[#26BAA4] text-xs font-bold uppercase tracking-widest">{doc.issuer}</p>
                    </div>
                    <div className="bg-[#26BAA4]/10 p-2 rounded-lg text-[#26BAA4]">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {doc.description}
                  </p>
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center text-sm font-bold uppercase tracking-widest text-[#050C1A] hover:text-[#26BAA4] transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="flex items-center text-sm font-bold uppercase tracking-widest text-[#050C1A] hover:text-[#26BAA4] transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Online
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST BANNER */}
      <section className="py-24 bg-[#050C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#26BAA4]/10 border border-[#26BAA4]/20 mb-10 text-[#26BAA4]">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Committed to Quality</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Every product we export undergoes rigorous quality checks and follows all regulatory guidelines set by the Government of India and destination countries.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-[#26BAA4] text-[#050C1A] px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#1f9b87] transition-all transform hover:scale-105"
          >
            Inquire About Documentation
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
