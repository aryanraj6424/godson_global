
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
