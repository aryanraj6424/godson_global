
import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '#',
    children: [
      {
        label: 'Hygiene Product',
        href: '#',
        children: [
          { label: 'Baby Diaper', href: '/product/hygiene/baby-diaper' },
          { label: 'Adult Diaper', href: '/product/hygiene/adult-diaper' },
          { label: 'Underpads', href: '/product/hygiene/underpads' },
        ],
      },
      { label: 'Soya Meal', href: '#' },
      { label: 'Raisin', href: '#' },
    ],
  },
  // { label: 'Certificates', href: '/certificate' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export interface ExtendedProduct extends Product {
  fullDescription: string;
  featuresList: { icon: string; title: string; desc: string }[];
  technicalSpecs: { label: string; value: string }[];
  availableTypes?: { title: string; desc: string; icon: string }[];
  logistics: string[];
  sliderImages: string[];
  heroHeading: string;
}

export const PRODUCTS: Record<string, ExtendedProduct> = {
  'baby-diaper': {
    id: 'baby-diaper',
    heroHeading: (
  <div style={{ 
  textAlign: 'left',
   lineHeight: 1.1 ,
   marginLeft: '8%',     // 👈 LEFT shift control
      maxWidth: '600px'
   }}>
    
    <div
      style={{
        color: '#7A0C0C',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontSize: 'clamp(32px, 4vw, 64px)',   // 👈 responsive single-line desktop
        whiteSpace: 'nowrap'
      }}
    >
      BABY DIAPER
    </div>

    <div
      style={{
        marginTop: '12px',
        color: '#ff6b6b',
        fontSize: 'clamp(14px, 1.2vw, 22px)',
        fontWeight: 500,
        letterSpacing: '1px'
      }}
    >
      (HSN CODE: 96190040)
    </div>

  </div>
),
    name: 'Godson Baby Diapers',
    category: 'Hygiene Product',
    description: 'Specially designed to provide superior comfort, dryness, and protection for babies at every stage.',
    fullDescription: 'Our high-quality baby diapers are manufactured with soft, skin-friendly materials and advanced absorbent technology. They ensure excellent leakage control, high absorbency, and gentle care for delicate baby skin. They are suitable for both active babies and overnight use, providing convenience for parents and caregivers.',
    image: '/uploads/baby1.png',
    sliderImages: [
      '/uploads/babybanner1.png',
      
    ],
    features: [],
    featuresList: [
      { icon: 'Droplets', title: 'Superior Absorbency', desc: 'Keeps babies dry all day with high-polymer core' },
      { icon: 'Shield', title: 'Leak-Secure Fit', desc: 'Prevents leaks during active movement' },
      { icon: 'Cloud', title: 'Ultra-Soft & Breathable', desc: 'Gentle on sensitive skin with non-woven top' },
      { icon: 'Smile', title: 'Skin-Friendly Comfort', desc: 'Soft materials for delicate baby skin' },
      { icon: 'Wind', title: 'Odor Control', desc: 'Advanced technology to keep baby fresh' },
      { icon: 'Moon', title: 'Day & Night Protection', desc: 'Perfect for long naps and nighttime' },
    ],
    technicalSpecs: [
      { label: 'Size', value: 'NB, S, M, L, XL' },
      { label: 'Product Style', value: 'Pant Style' },
      { label: 'Top Sheet', value: 'Non - Woven Polypropylene' },
      { label: 'Back Sheet', value: 'Non - Woven Polypropylene Polyethylene' },
      { label: 'Absorbent Pad', value: 'Paper, Pulp and Polymer' },
      { label: 'Elastic', value: 'Polyurethane' },
      {label:'Construction', value: 'Hot Melt Adhesive'},
      {label:'SAP', value: 'Available'},
      {label:'Wetness Indicator', value: 'Optional'},
    ],
    availableTypes: [
      { title: 'Pant Style (Pull-Up)', desc: 'Easy to wear pull-up design ideal for active babies with a snug comfortable fit.', icon: 'Zap' }
    ],
    logistics: [
      'Inner Packaging: As per buyers requirement',
      'Outer Packaging: 10 packets per BOPP / Sack bag',
      'MOQ: 20ft/40ft Container capacity'
    ]
  },
  'adult-diaper': {
    id: 'adult-diaper',
    heroHeading: (
  <div

  
    style={{
      textAlign: 'left',
      lineHeight: 1.1,
      maxWidth: '650px'
    }}
  >

    {/* FIRST LINE */}
    <div
      style={{
        color: '#7A0C0C',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontSize: 'clamp(32px, 4vw, 64px)',   // 👈 responsive single-line desktop
        whiteSpace: 'nowrap'                  // 👈 force one line on desktop
      }}
    >
      Adult DIAPER
    </div>

    {/* SECOND LINE */}
    <div
      style={{
        marginTop: '12px',
        color: '#ff6b6b',
        fontSize: 'clamp(14px, 1.2vw, 22px)', // 👈 responsive size
        fontWeight: 500,
        letterSpacing: '1px'
      }}
    >
      (HSN CODE: 96190040)
    </div>

  </div>
),
    name: 'Godson Adult Diapers',
    category: 'Hygiene Product',
    description: 'Designed to deliver superior comfort, protection, and dignity for daily personal care needs.',
    fullDescription: 'Our adult diapers are manufactured using advanced technology and high-quality materials. They offer excellent absorbency, reliable leakage control, and skin-friendly softness. Suitable for both active users and assisted care environments, these diapers are trusted by international buyers for healthcare, retail, and private-label distribution.',
    image: '/uploads/adult1.png',
    sliderImages: [
      '/uploads/adultbanner1.png'
    ],
    features: [],
    featuresList: [
      { icon: 'Droplets', title: 'Superior Absorbency', desc: 'High-capacity dual core padding for better absorption' },
      { icon: 'ShieldCheck', title: 'Leak-Secure Fit', desc: 'Standing leak guards for maximum protection' },
      { icon: 'Cloud', title: 'Ultra-Soft & Breathable', desc: 'Skin-friendly comfort for delicate skin' },
      { icon: 'Wind', title: 'Odor Control', desc: 'Advanced technology to neutralize odors' },
      { icon: 'Heart', title: 'Dignity and Protection', desc: 'Discreet fit feels like real underwear' },
      { icon: 'Activity', title: 'Active and Assisted Use', desc: 'Suitable for mobile and bedridden care' },
    ],
    technicalSpecs: [
      { label: 'Size', value: 'M, L, XL, XXL' },
      { label: 'Product Style', value: 'Pant Style' },
      { label: 'Top Sheet', value: 'Non – Woven Polypropylene' },
      { label: 'Back Sheet', value: 'Non – Woven Polypropylene Polyethylene ' },
      { label: 'Absorbent Pad', value: 'Paper, Pulp and Polymer' },
      { label: 'Elastic', value: 'Polyurethane' },
      {label: 'Construction', value: 'Hot Melt Adhesive '},
      {label: 'SAP', value: 'Available'},
      {label: 'Wetness Indicator', value: 'Available'},
    ],
    availableTypes: [
      { title: 'Pant Style (Pull-Up)', desc: 'Contours to your body for a comfortable fit like real underwear.', icon: 'Zap' }
    ],
    logistics: [
      'Inner Packaging: 10 diapers per packet',
      'Outer Packaging: 10 packets per BOPP / Sack bag',
      'Container Capacity: One 40ft container ≈ 14,000 bags'
    ]
  },
  'underpads': {
    id: 'underpads',
    heroHeading: (
  <div

  
    style={{
      textAlign: 'left',
      lineHeight: 1.1,
      maxWidth: '650px'
    }}
  >

    {/* FIRST LINE */}
    <div
      style={{
        color: '#7A0C0C',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontSize: 'clamp(32px, 4vw, 64px)',   // 👈 responsive single-line desktop
        whiteSpace: 'nowrap'                  // 👈 force one line on desktop
      }}
    >
      Under Pads
    </div>

    {/* SECOND LINE */}
    <div
      style={{
        marginTop: '12px',
        color: '#ff6b6b',
        fontSize: 'clamp(14px, 1.2vw, 22px)', // 👈 responsive size
        fontWeight: 500,
        letterSpacing: '1px'
      }}
    >
      (HSN CODE: 96190090)
    </div>

  </div>
),
    name: 'Godson Protective Underpads',
    category: 'Hygiene Product',
    description: 'Highly absorbent pads designed to protect surfaces like beds, chairs, and furniture from fluid damage.',
    fullDescription: 'Godson Global Underpads are highly absorbent pads designed to protect surfaces like beds, chairs, and furniture from fluid damage and moisture. They feature a multi-layered construction: a soft, non-woven top sheet for comfort, a high-performance absorbent core with SAP technology to lock in fluids, and a waterproof backing to prevent leakage. Essential for maintaining hygiene in medical, geriatric, domestic, and pet care settings.',
    image: '/uploads/underpads11.png',
    sliderImages: [
      '/uploads/underpadsbanner.png',
    ],
    features: [],
    featuresList: [
      { icon: 'Layers', title: 'Advanced 5-Layer Protection', desc: 'Multi-layered system for comfort, high absorbency & leakproof safety' },
      { icon: 'Cloud', title: 'Premium Non-Woven Top', desc: 'Ultra-soft top sheet designed for skin comfort and rapid drying' },
      { icon: 'Droplets', title: 'High-Performance Core', desc: 'SAP and Wood Fluff pulp core to lock in fluids effectively' },
      { icon: 'Shield', title: 'Waterproof PE Backing', desc: '100% moisture-proof and leak-proof Polyethylene backing' },
      { icon: 'Wind', title: 'Odor Control', desc: 'Engineered for home hygiene and neutralizing odors' },
      { icon: 'Zap', title: 'Quick-Dry Technology', desc: 'Rapid fluid absorption keeping the surface dry' },
    ],
    technicalSpecs: [
      { label: 'Size', value: '60*90 cm' },
      { label: 'Top Sheet', value: 'Non – Woven' },
      { label: 'Back Sheet', value: 'Moisture Proof Polyethylene (PE)' },
      { label: 'SAP', value: 'Available' },
    ],
    availableTypes: [
      { title: 'Adult Underpads', desc: 'Ideal for incontinence management, post-operative care, and hospital environments.', icon: 'Stethoscope' },
      { title: 'Pet Underpads', desc: 'Perfect for house-training puppies or providing comfort for senior pets while keeping floors clean.', icon: 'Dog' }
    ],
    logistics: [
      'Inner Packaging : 10 under pads per packet',
      'Outer Packaging : 20 packets per carton / Sack bag',
      'MOQ: 20ft/40ft Container capacity',
    ]
  },
  'soya-meal': {
    id: 'soya-meal',
    heroHeading: 'Soya Meal',
    name: 'High-Protein Soya Meal',
    category: 'Agricultural',
    description: 'Premium quality soybean meal sourced from top producers, ideal for livestock feed.',
    fullDescription: 'Our soya meal is processed to maintain maximum nutritional value, providing an essential protein source for various livestock applications.',
    image: 'https://images.unsplash.com/photo-1594754407856-12c8b746c268?q=80&w=1000&auto=format&fit=crop',
    sliderImages: ['https://images.unsplash.com/photo-1594754407856-12c8b746c268?q=80&w=2000&auto=format&fit=crop'],
    features: [],
    featuresList: [
      { icon: 'ShieldCheck', title: 'Non-GMO Options', desc: 'Sourced from strictly verified crops' },
      { icon: 'Zap', title: 'High Digestibility', desc: 'Optimized for efficient livestock growth' }
    ],
    technicalSpecs: [
      { label: 'Protein Content', value: 'High protein profile' },
      { label: 'Digestibility', value: 'Rich in Amino Acids' }
    ],
    logistics: ['Bulk packaging available', 'Global logistics support'],
    availableTypes: []
  },
  'raisin': {
    id: 'raisin',
    heroHeading: 'Premium Raisins',
    name: 'Golden & Black Raisins',
    category: 'Dried Fruits',
    description: 'Sun-dried premium raisins packed with natural sweetness and nutrients.',
    fullDescription: 'Hand-picked and processed under strict hygiene standards to ensure a high-quality product for food manufacturers and retail alike.',
    image: 'https://images.unsplash.com/photo-1595436021424-7388cd53c7a7?q=80&w=1000&auto=format&fit=crop',
    sliderImages: ['https://images.unsplash.com/photo-1595436021424-7388cd53c7a7?q=80&w=2000&auto=format&fit=crop'],
    features: [],
    featuresList: [
      { icon: 'Sun', title: '100% Natural', desc: 'Sun-dried for natural sweetness' },
      { icon: 'ShieldCheck', title: 'A-Grade Quality', desc: 'Carefully sorted for size and texture' }
    ],
    technicalSpecs: [
      { label: 'Type', value: 'Golden & Black variants' },
      { label: 'Shelf Life', value: 'Extended shelf life' }
    ],
    logistics: ['Safe transportation', 'Standardized packing sizes'],
    availableTypes: []
  }
};
