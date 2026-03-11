export const services = [
  {
    slug: 'electrical-services',
    title: 'ELECTRICAL SERVICES',
    shortDesc: 'Full-service repairs, installations, and maintenance for your home.',
    longDesc: 'From routine repairs to full installations, our licensed electricians handle every aspect of residential electrical work. We troubleshoot issues, upgrade outdated wiring, add new circuits, and ensure your home meets current code. Quality workmanship and clear communication from start to finish.',
    img: '/stock-pics/1.png',
  },
  {
    slug: 'power-energy',
    title: 'POWER & ENERGY SOLUTIONS',
    shortDesc: 'Panel upgrades, EV chargers, and whole-home surge protection.',
    longDesc: 'Modernize your home’s electrical capacity with panel upgrades, EV charger installation, and whole-home surge protection. We help you plan for today’s loads and tomorrow’s needs while keeping your system safe and efficient.',
    img: '/stock-pics/2.png',
  },
  {
    slug: 'security-lighting',
    title: 'SECURITY & OUTDOOR LIGHTING',
    shortDesc: 'Landscape lighting, motion sensors, and security system wiring.',
    longDesc: 'Enhance safety and curb appeal with professional outdoor and landscape lighting. We install motion sensors, security lighting, and low-voltage systems, and wire for security systems so your property is well-lit and protected.',
    img: '/stock-pics/3.png',
  },
  {
    slug: 'commercial',
    title: 'COMMERCIAL SERVICES',
    shortDesc: 'Reliable power solutions for offices, retail, and industrial facilities.',
    longDesc: 'We provide electrical services for offices, retail spaces, and industrial facilities. From tenant fit-outs and maintenance to emergency repairs and upgrades, we keep your business powered and compliant.',
    img: '/stock-pics/4.png',
  },
  {
    slug: 'generator',
    title: 'GENERATOR INSTALLATION',
    shortDesc: 'Standby and portable generator installation, wiring, and transfer switches for backup power.',
    longDesc: 'Stay powered during outages with standby or portable generator installation. We size units to your needs, install transfer switches, and wire everything to code so you have reliable backup power when it matters.',
    img: '/stock-pics/5.png',
  },
  {
    slug: 'electrical-inspections',
    title: 'ELECTRICAL INSPECTIONS',
    shortDesc: 'Code compliance inspections, safety audits, and pre-purchase electrical assessments.',
    longDesc: 'Get peace of mind with code compliance inspections, safety audits, and pre-purchase electrical assessments. We identify issues and provide clear reports so you can make informed decisions about your property.',
    img: '/stock-pics/6.png',
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];
