export const packagesIntro = {
  title: "SERVICES & PACKAGES",
  line: "Thoughtful starting points for brands, products and experiences. Every scope stays clear from the start.",
};

export const packageCategories = [
  {
    n: "01", name: "BRAND IDENTITY",
    description: "Visual identities built to make brands recognizable, consistent and distinctly theirs.", color: "var(--ticket-green)",
    packages: [
      { n: "01", name: "Brand Essentials", price: "PKR 25,000", tag: "A complete visual starting point for a new brand.", items: ["Primary logo design", "2 alternate logo variations", "Brand color palette", "Typography selection", "Logo variations for light and dark backgrounds", "Social media profile picture", "Brand guidelines sheet (PDF)", "Final files in SVG, PNG, JPG and PDF"] },
      { n: "02", name: "Brand Essentials + Print", price: "PKR 40,000", tag: "For businesses that need their identity ready for both digital and physical use.", items: ["Everything included in Brand Essentials", "Business card design (front and back)", "Letterhead design", "Envelope design", "Email signature", "Print-ready files with bleed and trim marks", "3D mockups of selected stationery"], note: "Printing and production costs are not included. Two revision rounds per design stage." },
    ],
  },
  {
    n: "02", name: "UI/UX DESIGN",
    description: "Digital products designed around how people actually use them.", color: "var(--ticket-pink)",
    packages: [
      { n: "01", name: "Interface Design", price: "PKR 30,000", tag: "For clients who already have their structure and need polished interfaces.", items: ["Up to 5 unique screens", "High-fidelity Figma UI", "Typography and color styling", "Reusable UI components", "Basic interactive states", "Desktop or mobile layout", "Organized Figma handover", "2 revision rounds"] },
      { n: "02", name: "Product Design", price: "PKR 65,000", tag: "For startups building an app, SaaS platform or digital product.", recommended: true, items: ["Up to 12 unique screens", "UX discovery and requirements", "User flows and information architecture", "Low-fidelity wireframes", "High-fidelity UI design", "Responsive layouts where applicable", "Reusable component library", "Clickable Figma prototype", "Developer handoff", "2 revision rounds"] },
      { n: "03", name: "Product Experience", price: "PKR 110,000", tag: "For products that need a more complete and consistent design system.", items: ["Up to 25 unique screens", "UX discovery and requirements", "User flows and wireframes", "High-fidelity interface design", "Responsive design", "Extended design system", "Reusable components and states", "Interactive prototype", "Developer handoff documentation", "3 revision rounds"] },
    ],
    note: "Screen limits refer to unique screens, not every responsive variation. Additional screens and extensive research are quoted separately. Development is not included.",
  },
  {
    n: "03", name: "DIGITAL EXPERIENCES",
    description: "Websites and digital experiences that carry the brand beyond a static screen.", color: "var(--ticket-orange)",
    packages: [
      { n: "01", name: "Landing Page", price: "PKR 35,000", tag: "A focused website for a product, service or campaign.", items: ["One-page custom website", "UI design in Figma", "Up to 6 content sections", "Responsive desktop and mobile layouts", "Front-end development", "Contact form or WhatsApp CTA", "Basic SEO setup", "Deployment and handover"] },
      { n: "02", name: "Business Website", price: "PKR 65,000", tag: "A complete digital presence for a growing business.", recommended: true, items: ["Up to 5 website pages", "Custom UI design in Figma", "Responsive front-end development", "Navigation and footer system", "Contact form or WhatsApp integration", "Basic animations and interactions", "Basic on-page SEO", "Deployment and handover"] },
      { n: "03", name: "Front-end Development", price: "PKR 30,000", tag: "Already have a design? Get it turned into a working website.", items: ["Development from supplied Figma designs", "Up to 3 website pages", "React-based front-end implementation", "Responsive layouts", "Component-based structure", "Interactive UI elements", "Basic animations", "Cross-device testing", "Deployment and handover"] },
    ],
    note: "Front-end Development is an implementation-only service. Additional pages and complexity are quoted separately. Backend, databases, authentication, payment systems, CMS and hosting fees are excluded.",
  },
  {
    n: "04", name: "SOCIAL & CAMPAIGNS",
    description: "Visual systems for launches, campaigns and social communication.", color: "var(--ticket-tan)",
    packages: [
      { n: "01", name: "Social Starter", price: "PKR 10,000", tag: "A small batch of branded content for businesses getting started.", items: ["8 custom social media post designs", "2 story designs", "1 visual direction for the content set", "Instagram-ready exports", "2 revision rounds"] },
      { n: "02", name: "Social Consistency", price: "PKR 18,000", tag: "For brands that need a consistent monthly visual presence.", recommended: true, items: ["12 custom social media post designs", "4 story designs", "2 carousel designs (up to 5 slides each)", "Consistent brand styling", "Platform-ready exports", "2 revision rounds"] },
      { n: "03", name: "Campaign Launch Kit", price: "PKR 25,000", tag: "For product launches, announcements, promotions and brand campaigns.", items: ["1 campaign visual direction", "5 campaign-specific social media designs", "3 story designs", "1 promotional poster or digital flyer", "1 campaign cover/banner", "2 carousel designs (up to 5 slides each)", "2 revision rounds"] },
    ],
    note: "Design only. Content writing, captions, posting, scheduling, account management, photography and video production are not included. Social Consistency is a monthly package; Campaign Launch Kit is a one-time project.",
  },
  {
    n: "05", name: "PHYSICAL TOUCHPOINTS",
    description: "Taking the brand beyond the screen through packaging, stationery, events and print.", color: "var(--white)",
    packages: [
      { n: "01", name: "Business Stationery", price: "PKR 12,000", tag: "Professional printed materials for everyday business use.", items: ["Business card design (front and back)", "Letterhead design", "Envelope design", "Email signature", "Print-ready PDF files", "3D stationery mockups", "2 revision rounds"] },
      { n: "02", name: "Retail & Packaging", price: "PKR 20,000", tag: "For product-based businesses that need their products to look as good as their brand.", recommended: true, items: ["1 primary packaging design", "1 product label design", "1 secondary packaging variation", "Product information layout", "Print-ready files", "3D packaging mockups", "2 revision rounds"] },
      { n: "03", name: "Event & Print Kit", price: "PKR 18,000", tag: "For events, exhibitions, launches and promotional activities.", items: ["1 event poster", "1 standee design", "1 event banner design", "1 digital invitation", "1 certificate design", "Print-ready files", "2 revision rounds"] },
    ],
    note: "Design and production-ready artwork only. Printing, physical samples, material sourcing, fabrication, delivery and installation are billed separately.",
  },
];

export const packageTerms = [
  "A 50% advance payment is required to begin a project.",
  "The remaining payment is due before final file handover.",
  "Each package includes the specified number of revision rounds.",
  "Additional revisions and deliverables are charged separately.",
  "Project timelines begin after receiving the advance payment and required content.",
  "Printing, production, hosting, domain and third-party costs are not included unless explicitly stated.",
  "Additional requirements outside the listed package scope will be quoted separately.",
  "Final deliverables are handed over in the formats specified in the selected package.",
];

export const customProject = {
  name: "Custom Projects",
  tag: "Don't see what you need?",
  note: "Not every project fits a package. Tell me what you're trying to create and we'll shape the scope around your actual needs.",
  cta: "BUILD A CUSTOM PROJECT →",
};
