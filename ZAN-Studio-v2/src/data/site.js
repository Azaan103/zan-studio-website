// ALL website text lives in /src/data. Edit here, save, done.
export const site = {
  name: "ZAN STUDIO",
  email: "hello@zanstudio.co",
  phone: "+92 331 6677011",
  location: "Karachi, Pakistan",
  tagline: "Designing brands people remember.",
  socials: [
    { label: "Instagram", value: "@zan.studio.co", href: "https://www.instagram.com/zan.studio.co/" },
    { label: "LinkedIn", value: "ZAN STUDIO", href: "https://www.linkedin.com/company/zan-studioo" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Packages", href: "#packages" },
  { label: "Start a Project", href: "#start", cta: true },
];

export const hero = {
  badge: "Karachi · Est. 2026",
  headline: ["YOUR BRAND", "COULD BE", "COOLER."],
  sub: "ZAN is an independent design & digital studio creating brands, digital experiences and visual systems that people actually remember.",
  primary: { label: "View Work →", href: "#work" },
  secondary: { label: "Start a Project →", href: "#start" },
  // Tiny arcade details around the headline (purely decorative)
  hud: { left: "SCORE 004200", right: "LVL 01", coin: "INSERT COIN" },
};

export const services = {
  eyebrow: "services.sys",
  title: "SERVICES",
  copy: "A focused set of design disciplines for brands that need more than decoration.",
  items: [
    { n: "01", title: "Brand Identity", color: "var(--ticket-green)", copy: "Visual identities built to make brands recognizable, consistent and distinctly theirs.", includes: ["Logo systems", "Color", "Typography", "Visual direction", "Brand assets"] },
    { n: "02", title: "UI/UX Design", color: "var(--ticket-pink)", copy: "Digital products designed around how people actually use them.", includes: ["UX direction", "User flows", "Wireframes", "UI design", "Prototypes", "Design systems"] },
    { n: "03", title: "Digital Experiences", color: "var(--ticket-orange)", copy: "Websites and digital experiences that carry the brand beyond a static screen.", includes: ["Landing pages", "Websites", "Digital experiences", "Front-end focused experiences"] },
    { n: "04", title: "Social & Campaigns", color: "var(--ticket-tan)", copy: "Visual systems for launches, campaigns and social communication.", includes: ["Social design", "Campaign visuals", "Launch assets", "Content systems"] },
    { n: "05", title: "Physical Touchpoints", color: "var(--white)", copy: "Taking the brand beyond the screen.", includes: ["Packaging", "Business cards", "Event collateral", "Signage", "Print", "QR / physical brand experiences"] },
  ],
};

export const work = { badge: "Selected work", title: "SELECTED WORK", copy: "A few projects worth showing." };

export const process = {
  badge: "How ZAN works",
  steps: [
    { n: "01", label: "Discover", copy: "Understand the brand, audience, problem and goals.", color: "var(--ticket-green)" },
    { n: "02", label: "Define", copy: "Turn the problem into a clear creative and design direction.", color: "var(--ticket-orange)" },
    { n: "03", label: "Design", copy: "Build the identity, interface or visual system.", color: "var(--ticket-pink)" },
    { n: "04", label: "Refine", copy: "Review, iterate and make sure everything works together.", color: "var(--ticket-tan)" },
    { n: "05", label: "Deliver", copy: "Organized final files, assets and everything needed to move forward.", color: "var(--white)" },
  ],
};

export const about = {
  badge: "About ZAN",
  lead: "ZAN Studio is an independent design & digital studio based in Karachi, Pakistan, founded and run by Azaan Rahim.",
  body: "We work across brand identity, UI/UX, digital experiences and visual communication — helping brands turn ideas into something people can recognize, use and remember.",
  motto: ["Small by design.", "Involved from idea to execution."],
  person: { name: "Azaan Rahim", role: "Founder & Designer", photo: "/images/hero/Azaan.jpeg" },

};

export const faq = [
  { q: "What can I hire ZAN for?", a: "Brand identity, UI/UX, websites, social and campaign design, packaging and physical brand touchpoints." },
  { q: "Do I need a complete brand package?", a: "No. Projects can be focused on one specific need or cover multiple areas." },
  { q: "Can I request something not listed?", a: "Yes. Packages are starting points. Custom projects can be scoped separately." },
  { q: "Do you work remotely?", a: "Yes. ZAN is based in Karachi and can work remotely with clients." },
  { q: "How does pricing work?", a: "Packages have starting prices. Final pricing depends on project scope and requirements." },
  { q: "How do I start?", a: "Reach out by email or WhatsApp and we can talk through the project together." },
];

export const start = {
  title: "START A PROJECT.",
  copy: "Prefer to talk? Reach out directly and let’s discuss what you’re building.",
};


export const socialProof = {
  eyebrow: "social proof.sys",
  title: "BRANDS I'VE WORKED WITH",
  brands: [
    "Pathen",
    "Google Developer Group on Campus",
    "Techwon",
    "OnScene",
    "Subjectify",
    "Al Zehra Diagnostic Center",
    "Kagaz Qalam",
    "NuttyBliss",
    "Zalbiya",
  ],
};

// Replace or add approved client quotes here. Keep this list data-only so the UI never needs editing.
export const reviews = [
  {
    quote: "Working with ZAN Studio made it easy to turn the OnScene brand into something people could actually see, interact with, and remember. From our business cards and stall backdrop to the standee, QR holder, and app store visuals, every piece felt connected.",
    name: "OnScene",
    role: "Client",
    company: "OnScene",
    project: "Brand touchpoints + app visuals",
    tone: "blue",
  },
];
