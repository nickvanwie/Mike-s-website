import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, Users, Clock, CheckCircle, FileText, ChevronDown, ChevronUp, MapPin, Search, Star, Zap } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', message: '', consentSms: false, consentPromo: false });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hook up to your CRM/email endpoint; for now just prevent default
    console.log('Quote submitted', quoteForm);
  };

  const googleReviews = [
    { name: 'Mike T.', text: 'Summit Electric did an outstanding job upgrading our panel. Professional, on time, and left everything clean. Highly recommend!', date: '2 weeks ago' },
    { name: 'Sarah L.', text: 'We had an emergency and they came out the same day. The team was knowledgeable and fixed the issue quickly. Five stars.', date: '1 month ago' },
    { name: 'James K.', text: 'From quote to completion, everything was smooth. Fair pricing and quality work. Will use again for our next project.', date: '3 weeks ago' },
    { name: 'Jennifer M.', text: 'Best electricians in the area. They installed our EV charger and outdoor lighting—both look great and work perfectly.', date: '1 month ago' },
    { name: 'David R.', text: 'Military-owned and it shows—disciplined, thorough, and honest. Could not ask for a better experience.', date: '2 months ago' },
  ];

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
                className="text-base font-bold hover:text-gold transition-colors duration-200"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1234567891" className="flex items-center space-x-2 bg-black border border-white/20 text-white px-4 py-2.5 rounded font-bold text-base hover:bg-navy-800 hover:text-gold transition-colors duration-200">
              <Phone size={20} className="text-gold" />
              <span>(123) 456-7891</span>
            </a>
            <button 
              onClick={scrollToHero}
              className="bg-gold text-white px-6 py-2.5 rounded font-bold text-base hover:bg-white hover:text-navy-900 transition-colors duration-200"
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
                  className="text-white hover:text-gold font-bold text-base py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              ))}
              <a href="tel:1234567891" className="flex items-center space-x-2 text-gold font-bold text-base py-2">
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

            {/* Right: Custom quote form matching site style */}
            <div className="w-full md:w-[500px] flex-shrink-0">
              <form onSubmit={handleQuoteSubmit} className="rounded-xl border border-white/10 border-t-4 border-t-gold bg-navy-800/95 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="font-heading text-2xl font-extrabold text-white mb-6 text-center">GET A FREE QUOTE</h3>
                  <div>
                    <label htmlFor="quote-name" className="block font-heading font-bold text-sm text-gray-300 mb-1.5">Full Name *</label>
                    <input id="quote-name" type="text" required value={quoteForm.name} onChange={(e) => setQuoteForm((f) => ({ ...f, name: e.target.value }))} placeholder="John Smith" className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans text-sm" />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block font-heading font-bold text-sm text-gray-300 mb-1.5">Phone *</label>
                    <input id="quote-phone" type="tel" required value={quoteForm.phone} onChange={(e) => setQuoteForm((f) => ({ ...f, phone: e.target.value }))} placeholder="(123) 456-7890" className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans text-sm" />
                  </div>
                  <div>
                    <label htmlFor="quote-message" className="block font-heading font-bold text-sm text-gray-300 mb-1.5">Message *</label>
                    <textarea id="quote-message" rows={3} required value={quoteForm.message} onChange={(e) => setQuoteForm((f) => ({ ...f, message: e.target.value }))} placeholder="*Your message goes straight to my phone, I'll get back to you as soon as I'm available*" className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans text-sm resize-none" />
                  </div>
                  <div className="space-y-3 pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" required checked={quoteForm.consentSms} onChange={(e) => setQuoteForm((f) => ({ ...f, consentSms: e.target.checked }))} className="mt-1 rounded border-white/30 bg-navy-900 text-gold focus:ring-gold focus:ring-offset-0" />
                      <span className="text-gray-300 text-sm font-sans">I agree to receive text messages from Summit Electric regarding my quote request, appointment updates, and service notifications. Message frequency may vary. Message & data rates may apply. Reply STOP to opt out or HELP for assistance. *</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" checked={quoteForm.consentPromo} onChange={(e) => setQuoteForm((f) => ({ ...f, consentPromo: e.target.checked }))} className="mt-1 rounded border-white/30 bg-navy-900 text-gold focus:ring-gold focus:ring-offset-0" />
                      <span className="text-gray-300 text-sm font-sans">I agree to receive promotional text messages from Summit Electric, including special offers and discounts.</span>
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-gold text-white font-heading font-bold text-base py-3.5 rounded-lg hover:bg-white hover:text-navy-900 transition-colors duration-200">
                    REQUEST FREE QUOTE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR - image left, badges right */}
      <section className="bg-navy-800 border-y border-white/5 py-12 md:py-14 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            {/* Left: supporting image */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg border border-white/10 overflow-hidden relative">
                <img src="/stock-pics/24.png" alt="Summit Electric - trusted electrical services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/50" />
              </div>
            </div>
            {/* Right: headline + trust badges + filler */}
            <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
              <div>
                <h4 className="text-gold font-bold tracking-widest text-sm mb-2">WHY SUMMIT</h4>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">BUILT ON TRUST & EXPERIENCE</h2>
                <p className="text-gray-400 text-sm mt-3 max-w-md">Serving Akron and the greater Summit County area with reliable, professional electrical work since day one.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "MILITARY OWNED" },
                  { icon: Users, text: "FAMILY BUSINESS" },
                  { icon: Clock, text: "40+ YEARS EXPERIENCE" },
                  { icon: CheckCircle, text: "INSURED" },
                  { icon: FileText, text: "FULLY LICENSED" },
                  { icon: Zap, text: "24/7 EMERGENCY" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3.5 rounded-lg bg-navy-900/60 border border-gold/20 min-w-0">
                    <item.icon className="text-gold w-8 h-8 shrink-0" />
                    <span className="font-heading text-base md:text-lg font-bold tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="#hero" className="inline-block text-gold font-heading font-bold text-sm border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
                GET YOUR FREE QUOTE →
              </a>
            </div>
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
                img: "/stock-pics/1.png"
              },
              { 
                title: "POWER & ENERGY SOLUTIONS", 
                desc: "Panel upgrades, EV chargers, and whole-home surge protection.",
                img: "/stock-pics/2.png"
              },
              { 
                title: "SECURITY & OUTDOOR LIGHTING", 
                desc: "Landscape lighting, motion sensors, and security system wiring.",
                img: "/stock-pics/3.png"
              },
              { 
                title: "COMMERCIAL SERVICES", 
                desc: "Reliable power solutions for offices, retail, and industrial facilities.",
                img: "/stock-pics/4.png"
              },
              { 
                title: "GENERATOR INSTALLATION", 
                desc: "Standby and portable generator installation, wiring, and transfer switches for backup power.",
                img: "/stock-pics/5.png"
              },
              { 
                title: "ELECTRICAL INSPECTIONS", 
                desc: "Code compliance inspections, safety audits, and pre-purchase electrical assessments.",
                img: "/stock-pics/6.png"
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
      <section id="process" className="py-12 md:py-14 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/stock-pics/21.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
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
              <div key={i} className="relative flex flex-col items-center text-center z-10 bg-navy-800/90 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
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

      {/* 7. GALLERY - project photos */}
      <section id="gallery" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR WORK</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Residential and commercial electrical work we're proud of.</p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl bg-navy-900 border border-white/10 shadow-lg group"
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={`/stock-pics/${img}`} 
                    alt={`Project ${i + 1} - Summit Electric`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVIEWS - constant slow stream, 3-4 visible */}
      <section id="reviews" className="py-12 md:py-14 bg-navy-900 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img src="/stock-pics/22.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-1 mb-4">
              {[1,2,3,4,5].map(star => <Star key={star} className="text-gold fill-gold w-5 h-5" />)}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">WHAT OUR CLIENTS SAY</h2>
          </div>

          <div className="relative -mx-4 md:-mx-8 overflow-hidden">
            <div className="review-marquee-track flex gap-6 py-4 w-max">
              {[...googleReviews, ...googleReviews].map((review, i) => (
                <div key={i} className="flex-shrink-0 w-[320px] md:w-[360px] bg-navy-800 rounded-xl p-6 border border-white/10 border-t-4 border-t-gold shadow-xl">
                  <p className="text-gray-200 text-base leading-relaxed mb-4 line-clamp-3">"{review.text}"</p>
                  <p className="text-white font-heading font-bold text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{review.date} · Google Review</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="https://www.google.com/search?q=Summit+Electric+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 rounded font-bold text-lg md:text-xl hover:bg-white hover:text-navy-900 transition-colors shadow-lg shadow-gold/30">
              <Star className="w-6 h-6 fill-white shrink-0" />
              Leave us a review on Google
            </a>
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
            
            {/* FAQ Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full min-h-[400px] rounded-lg border border-white/10 overflow-hidden relative shadow-xl">
                <img src="/stock-pics/8.png" alt="Electrician at work - Summit Electric" className="w-full h-full min-h-[400px] object-cover" />
                <div className="absolute inset-0 bg-navy-900/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS */}
      <section className="py-12 md:py-14 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-800/60 shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-gold font-bold tracking-widest text-sm mb-2">SERVICE AREA</h4>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">PROUDLY SERVING</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md">Trusted electrical services across Summit County and surrounding communities.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Akron', 'Hudson', 'Stow', 'Tallmadge', 'Cuyahoga Falls', 'Barberton'].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="flex items-center gap-3 px-5 py-4 rounded-lg bg-navy-900/80 border border-white/10 hover:border-gold/50 hover:bg-navy-900 text-white font-heading font-bold text-base md:text-lg transition-all duration-200 group"
                  >
                    <MapPin size={24} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-gold transition-colors">{city}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[320px] md:min-h-[400px] bg-navy-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052786.409900489!2d-79.74353328749999!3d41.650627000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcaf33c816a8d7%3A0xe32ba79e665453b9!2sSummit%20Electric!5e0!3m2!1sen!2sus!4v1772504144421!5m2!1sen!2sus"
                className="w-full h-full min-h-[320px] md:min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Summit Electric location"
              />
            </div>
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
