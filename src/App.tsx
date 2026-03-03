import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, Users, Clock, CheckCircle, FileText, ChevronDown, ChevronUp, MapPin, Search, Star } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-white bg-navy-900 min-h-screen selection:bg-gold selection:text-navy-900">
      {/* 1. NAV */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
          isScrolled ? 'bg-navy-900 shadow-lg border-b-2 border-gold' : 'bg-transparent border-b-2 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src="/logo.svg" alt="Summit Electric" className="h-14 md:h-16 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Process', 'Reviews', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-gold transition-colors duration-200"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:1234567891" className="flex items-center space-x-2 text-white hover:text-gold transition-colors">
              <Phone size={18} className="text-gold" />
              <span className="font-bold">(123) 456-7891</span>
            </a>
            <button 
              onClick={scrollToHero}
              className="bg-gold text-navy-900 px-6 py-2.5 rounded font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              GET FREE QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-800 absolute top-full left-0 right-0 p-4 shadow-xl border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Process', 'Reviews', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gold font-medium py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              ))}
              <a href="tel:1234567891" className="flex items-center space-x-2 text-gold font-bold py-2">
                <Phone size={18} />
                <span>(123) 456-7891</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO */}
      <section id="hero" className="relative min-h-[70vh] pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        {/* Background Image with lighter overlay so image is more visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Summit Electric - Professional Electrical Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900/60"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">
            {/* Left: Hero text */}
            <div className="w-full md:max-w-3xl flex-shrink-0">
              <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded text-xs font-bold tracking-widest mb-2 border border-gold/20 backdrop-blur-sm">
                SERVING AKRON & SURROUNDING AREAS
              </div>
              <h1 className="font-heading text-4xl md:text-6xl leading-tight font-bold text-white drop-shadow-lg">
                RELIABLE ELECTRICAL <br />
                <span className="text-gold">SOLUTIONS FOR YOU</span>
              </h1>
              <p className="text-gray-200 text-lg max-w-xl leading-relaxed drop-shadow-md mt-4">
                Professional residential and commercial electrical services. 
                Safety, quality, and integrity in every connection we make.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <a href="#contact" className="bg-gold text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors shadow-lg">
                  REQUEST SERVICE
                </a>
                <a href="#services" className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  VIEW SERVICES
                </a>
              </div>
            </div>

            {/* Right: Quote form – iframe fits exactly to embed size, no scroll */}
            <div className="w-full md:w-[520px] flex-shrink-0 rounded-lg">
              <iframe
                src="https://core.switchflowai.com/widget/form/gpOPebgVrFMlV3mWzrw1"
                className="w-full border-0 block"
                style={{ height: '1223px' }}
                id="inline-gpOPebgVrFMlV3mWzrw1"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="1223"
                data-layout-iframe-id="inline-gpOPebgVrFMlV3mWzrw1"
                data-form-id="gpOPebgVrFMlV3mWzrw1"
                title="Website Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section className="bg-navy-800 border-y border-white/5 py-8 md:py-10 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: Shield, text: "MILITARY OWNED" },
              { icon: Users, text: "FAMILY BUSINESS" },
              { icon: Clock, text: "40+ YEARS EXPERIENCE" },
              { icon: CheckCircle, text: "INSURED" },
              { icon: FileText, text: "FULLY LICENSED" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-3 rounded-lg bg-navy-900/50 border border-white/10 min-w-[180px] justify-center md:min-w-0">
                <item.icon className="text-gold w-8 h-8 shrink-0" />
                <span className="font-heading text-base md:text-lg font-bold tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT */}
      <section id="about" className="py-12 md:py-14 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-gold font-bold tracking-widest text-sm">ABOUT SUMMIT ELECTRIC</h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">POWERING OUR COMMUNITY WITH PRIDE</h2>
              <p className="text-gray-400 leading-relaxed">
                Summit Electric has been a trusted name in electrical contracting for over four decades. 
                As a military-owned, family-operated business, we bring disciplined precision and 
                personal care to every project.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's a simple residential repair or a complex commercial installation, 
                our team of licensed electricians ensures your systems are safe, efficient, and 
                built to last.
              </p>
              <div className="pt-4">
                <a href="#contact" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
                  MEET THE TEAM
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg border border-white/10 relative overflow-hidden">
                <img 
                  src="/about-panel.png" 
                  alt="Electrician working on electrical control panel - Summit Electric" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR EXPERTISE</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">PREMIUM ELECTRICAL SERVICES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "ELECTRICAL SERVICES", 
                desc: "Full-service repairs, installations, and maintenance for your home.",
                img: "https://picsum.photos/seed/wiring-repair/600/400"
              },
              { 
                title: "POWER & ENERGY SOLUTIONS", 
                desc: "Panel upgrades, EV chargers, and whole-home surge protection.",
                img: "https://picsum.photos/seed/solar-panel/600/400"
              },
              { 
                title: "SECURITY & OUTDOOR LIGHTING", 
                desc: "Landscape lighting, motion sensors, and security system wiring.",
                img: "https://picsum.photos/seed/outdoor-lights/600/400"
              },
              { 
                title: "COMMERCIAL SERVICES", 
                desc: "Reliable power solutions for offices, retail, and industrial facilities.",
                img: "https://picsum.photos/seed/office-building/600/400"
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-navy-900 rounded overflow-hidden border-t-4 border-gold hover:-translate-y-1.5 transition-transform duration-300 shadow-lg group flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 w-full md:w-3/5">
                  <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-gold transition-colors">
                    <a href="#">{service.title}</a>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section id="process" className="py-12 md:py-14 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">HOW WE WORK</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">From your first call to the final inspection, we follow a clear, reliable process so you know what to expect every step of the way.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative">
            {[
              { step: "01", title: "CONTACT", desc: "Reach out by phone or our free quote form for a no-pressure consultation." },
              { step: "02", title: "ASSESS", desc: "We visit your property, evaluate your needs, and provide a clear written estimate." },
              { step: "03", title: "EXECUTE", desc: "Our team arrives on time and completes the work to code with minimal disruption." },
              { step: "04", title: "ENJOY", desc: "You get safe, reliable power with warranties and ongoing support." }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center z-10 bg-navy-800/50 rounded-lg p-6 border border-white/5">
                <div className="w-16 h-16 rounded-full border-2 border-gold bg-navy-900 flex items-center justify-center text-gold font-heading font-bold text-xl mb-4 shadow-[0_0_15px_rgba(211,30,38,0.3)]">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-[2px] bg-navy-700 -z-10">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-navy-700 rotate-45 transform translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY */}
      <section id="gallery" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR WORK</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A sample of residential and commercial work we're proud of.</p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg group bg-navy-900 border-t-4 border-gold border border-white/10 shadow-lg aspect-[4/3] hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src={`https://picsum.photos/seed/project-${i + 10}/600/600`} 
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <span className="text-white font-heading font-bold text-base tracking-wide">Project {i + 1}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Search className="text-gold w-6 h-6 drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVIEWS */}
      <section id="reviews" className="py-12 md:py-14 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-1 mb-4">
              {[1,2,3,4,5].map(star => <Star key={star} className="text-gold fill-gold w-5 h-5" />)}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">WHAT OUR CLIENTS SAY</h2>
          </div>
          
          <div className="bg-navy-800 rounded-lg p-12 border border-white/5 flex items-center justify-center min-h-[200px]">
            {/* <!-- REVIEWS WIDGET EMBED --> */}
            <span className="font-mono text-gray-500">&lt;!-- REVIEWS WIDGET EMBED --&gt;</span>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* FAQ Accordion */}
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-2">
                {[
                  { q: "Do you offer emergency services?", a: "Yes. We offer 24/7 emergency electrical services for urgent issues that cannot wait—including power outages, sparking, burning smells, or safety hazards. Call us anytime; we'll dispatch a licensed electrician as quickly as possible to diagnose and resolve the problem safely." },
                  { q: "Are your electricians licensed and insured?", a: "Absolutely. Every technician who comes to your home or business is fully licensed, bonded, and insured. We carry general liability and workers' compensation so you're protected. We're happy to provide proof of insurance upon request and to meet any requirements from property managers or HOAs." },
                  { q: "Do you provide free estimates?", a: "Yes. We provide free, no-obligation estimates for both residential and commercial projects. After we assess your needs—either from your description or an onsite visit—we'll give you a clear written quote with no hidden fees. There's no pressure to commit; we want you to feel confident before any work begins." },
                  { q: "What areas do you serve?", a: "We proudly serve Akron and the surrounding communities, including Hudson, Stow, Tallmadge, Cuyahoga Falls, Barberton, and the greater Summit County area. If you're unsure whether we cover your location, give us a call or submit a quote request—we'll let you know right away." }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-3">
                    <button 
                      className={`w-full flex justify-between items-center text-left font-bold text-lg py-2 transition-colors ${activeAccordion === i ? 'text-gold' : 'text-white hover:text-gold'}`}
                      onClick={() => toggleAccordion(i)}
                    >
                      <span>{item.q}</span>
                      {activeAccordion === i ? <ChevronUp size={20} className="text-gold shrink-0 ml-2" /> : <ChevronDown size={20} className="text-gold shrink-0 ml-2" />}
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === i ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-400 leading-relaxed pb-2">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2">
              <div className="h-full min-h-[400px] bg-navy-900 rounded border border-white/10 flex items-center justify-center relative">
                {/* <!-- PHOTO: [description] --> */}
                <span className="font-mono text-gray-500">&lt;!-- PHOTO: Electrician at work --&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS */}
      <section className="py-10 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h4 className="text-gray-500 font-bold tracking-widest text-sm mb-8">PROUDLY SERVING</h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Akron', 'Hudson', 'Stow', 'Tallmadge', 'Cuyahoga Falls', 'Barberton'].map((city) => (
              <a key={city} href="#" className="text-gold font-bold text-lg hover:text-white transition-colors flex items-center">
                <MapPin size={16} className="mr-1" />
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA BANNER */}
      <section id="contact" className="py-12 md:py-14 bg-navy-900 relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <button 
            onClick={scrollToHero}
            className="bg-gold text-navy-900 px-10 py-4 rounded font-bold text-lg hover:bg-white transition-colors shadow-lg shadow-gold/20"
          >
            GET YOUR FREE QUOTE
          </button>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-navy-800 pt-12 pb-6 border-t-4 border-gold">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-8">
            {/* Brand / Contact */}
            <div className="md:col-span-2 space-y-6">
              <a href="#hero" className="inline-block">
                <img src="/logo.svg" alt="Summit Electric" className="h-14 md:h-16 w-auto" />
              </a>
              <p className="text-gray-400 max-w-xs">
                Your trusted partner for residential and commercial electrical solutions. 
                Quality workmanship guaranteed.
              </p>
              <div className="space-y-2">
                <a href="tel:1234567891" className="block text-white hover:text-gold transition-colors font-bold">(123) 456-7891</a>
                <p className="text-gray-400">info@summitelectric.com</p>
              </div>
            </div>

            {/* Business Links */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">COMPANY</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Process', 'Careers', 'Reviews', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">SERVICES</h4>
              <ul className="space-y-3">
                {['Residential', 'Commercial', 'Generators', 'Lighting', 'Safety Inspections'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">HOURS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 5pm</span></li>
                <li className="flex justify-between"><span>Sat - Sun</span> <span>Closed</span></li>
                <li className="pt-4 text-gold font-bold">24/7 Emergency Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Summit Electric. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
