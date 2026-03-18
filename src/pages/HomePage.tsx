import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Clock, CheckCircle, FileText, ChevronDown, ChevronUp, MapPin, Star, Zap } from 'lucide-react';
import { services } from '../data/services';

const googleReviews = [
  { name: 'Mike T.', text: 'MPH Property Services did an outstanding job on our lawn and beds. Professional, on time, and left everything clean. Highly recommend!', date: '2 weeks ago' },
  { name: 'Sarah L.', text: 'We needed our yard cleaned up and they came out the same week. The crew was thorough and the property looked great. Five stars.', date: '1 month ago' },
  { name: 'James K.', text: 'From quote to completion, everything was smooth. Fair pricing and quality work. Will use again for our next project.', date: '3 weeks ago' },
  { name: 'Jennifer M.', text: 'Best lawn care in the area. Weekly mowing and mulching—both look great and they’re easy to work with.', date: '1 month ago' },
  { name: 'David R.', text: 'Military-owned and it shows—disciplined, thorough, and honest. Could not ask for a better experience.', date: '2 months ago' },
];

const processSteps = [
  { step: '01', title: 'CONTACT', desc: 'Reach out by phone or our free quote form for a no-pressure consultation.' },
  { step: '02', title: 'ASSESS', desc: 'We visit your property, evaluate your needs, and provide a clear written estimate.' },
  { step: '03', title: 'EXECUTE', desc: 'Our crew arrives on time and completes the work with minimal disruption.' },
  { step: '04', title: 'ENJOY', desc: 'You get clean lines, healthier turf, and a property you’re proud to come home to.' },
];

const faqItems = [
  { q: 'Do you offer seasonal or one-time services?', a: "Yes. We offer both recurring lawn care (e.g. weekly mowing) and one-time services like mulch, trimming, and property transformations. Tell us what you need and we’ll put together a plan and quote." },
  { q: 'Are you insured?', a: "Yes. We carry appropriate insurance for our work. We’re happy to provide proof upon request and to meet any requirements from property managers or HOAs." },
  { q: 'Do you provide free estimates?', a: "Yes. We provide free, no-obligation estimates for residential and commercial properties. After we assess your needs—either from your description or an onsite visit—we’ll give you a clear written quote with no hidden fees. There’s no pressure to commit." },
  { q: 'What areas do you serve?', a: "We proudly serve Brockport and the surrounding communities, including Spencerport, Hamlin, Ogden, Holley, and Kendall. If you’re unsure whether we cover your location, give us a call or submit a quote request—we’ll let you know right away." },
];

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', message: '', consentSms: false, consentPromo: false });
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash !== '#reviews' && hash !== '#faq' && hash !== '#services') return;

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const HEADER_OFFSET_PX = 120;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Math.max(0, y), left: 0, behavior: 'smooth' });
    });
  }, [location.hash]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote submitted', quoteForm);
  };

  const scrollToHero = () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section id="hero" className="relative min-h-[70vh] pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero.svg" alt="MPH Property Services - Lawn Care & Landscaping" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">
            <div className="w-full md:max-w-3xl flex-shrink-0">
              <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded text-xs font-bold tracking-widest mb-2 border border-gold/20 backdrop-blur-sm">
                SERVING BROCKPORT & SURROUNDING AREAS
              </div>
              <h1 className="font-heading text-4xl md:text-6xl leading-tight font-bold text-white drop-shadow-lg">
                RELIABLE LAWN CARE <br />
                <span className="text-gold">DONE RIGHT</span>
              </h1>
              <p className="text-gray-200 text-lg max-w-xl leading-relaxed drop-shadow-md mt-4">
                Professional lawn care, landscaping, and property maintenance. Quality results and consistent service you can count on.
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
                      <span className="text-gray-300 text-sm font-sans">I agree to receive text messages from MPH Property Services regarding my quote request, appointment updates, and service notifications. Message frequency may vary. Message & data rates may apply. Reply STOP to opt out or HELP for assistance. *</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" checked={quoteForm.consentPromo} onChange={(e) => setQuoteForm((f) => ({ ...f, consentPromo: e.target.checked }))} className="mt-1 rounded border-white/30 bg-navy-900 text-gold focus:ring-gold focus:ring-offset-0" />
                      <span className="text-gray-300 text-sm font-sans">I agree to receive promotional text messages from MPH Property Services, including special offers and discounts.</span>
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

      <section className="bg-navy-800 border-y border-white/5 py-12 md:py-14 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg border border-white/10 overflow-hidden relative">
                <img src="/stock-pics/24.png" alt="MPH Property Services - trusted lawn care and landscaping" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/50" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
              <div>
                <h4 className="text-gold font-bold tracking-widest text-sm mb-2">WHY MPH</h4>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">BUILT ON TRUST & EXPERIENCE</h2>
                <p className="text-gray-400 text-sm mt-3 max-w-md">Serving Brockport and surrounding areas with reliable, professional lawn care and landscaping since day one.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: 'MILITARY OWNED' },
                  { icon: Users, text: 'FAMILY BUSINESS' },
                  { icon: Clock, text: '40+ YEARS EXPERIENCE' },
                  { icon: CheckCircle, text: 'INSURED' },
                  { icon: FileText, text: 'FULLY LICENSED' },
                  { icon: Zap, text: 'SEASONAL CARE' },
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

      <section id="about" className="py-12 md:py-14 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-gold font-bold tracking-widest text-sm">ABOUT MPH PROPERTY SERVICES</h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">CARING FOR YOUR PROPERTY WITH PRIDE</h2>
              <p className="text-gray-400 leading-relaxed">
                MPH Property Services provides dependable lawn care, landscaping, and property maintenance with a focus on clean lines, healthy turf, and curb appeal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From weekly mowing and edging to trimming, mulch and stone, and full property transformations, we treat every yard like it’s our own and stand behind our work.
              </p>
              <div className="pt-4">
                <Link to="/about" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
                  MEET THE TEAM
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg border border-white/10 relative overflow-hidden">
                <img src="/about-panel.png" alt="Lawn care and landscaping - MPH Property Services" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR EXPERTISE</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">LAWN CARE & LANDSCAPING</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-navy-900 rounded overflow-hidden border-t-4 border-gold hover:-translate-y-1.5 transition-transform duration-300 shadow-lg group flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 w-full md:w-3/5">
                  <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-12 md:py-14 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/stock-pics/21.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">HOW WE WORK</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">From your first call to the final walkthrough, we follow a clear, reliable process so you know what to expect every step of the way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative">
            {processSteps.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center z-10 bg-navy-800/90 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
                <div className="w-16 h-16 rounded-full border-2 border-gold bg-navy-900 flex items-center justify-center text-gold font-heading font-bold text-xl mb-4 shadow-[0_0_15px_rgba(5,136,68,0.3)]">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-[2px] bg-navy-700 -z-10">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-navy-700 rotate-45 transform translate-x-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR WORK</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Lawn care and landscaping projects we're proud of.</p>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl bg-navy-900 border border-white/10 shadow-lg group">
                <div className="aspect-[4/3]">
                  <img src={`/stock-pics/${img}`} alt={`Project ${i + 1} - MPH Property Services`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 md:py-14 bg-navy-900 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img src="/stock-pics/22.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-gold fill-gold w-5 h-5" />
              ))}
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
            <a href="https://www.google.com/search?q=MPH+Property+Services+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 rounded font-bold text-lg md:text-xl hover:bg-white hover:text-navy-900 transition-colors shadow-lg shadow-gold/30">
              <Star className="w-6 h-6 fill-white shrink-0" />
              Leave us a review on Google
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-14 bg-navy-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-2">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-3">
                    <button
                      className={`w-full flex justify-between items-center text-left font-bold text-lg py-2 transition-colors ${activeAccordion === i ? 'text-gold' : 'text-white hover:text-gold'}`}
                      onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      {activeAccordion === i ? <ChevronUp size={20} className="text-gold shrink-0 ml-2" /> : <ChevronDown size={20} className="text-gold shrink-0 ml-2" />}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === i ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-400 leading-relaxed pb-2">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-full min-h-[400px] rounded-lg border border-white/10 overflow-hidden relative shadow-xl">
                <img src="/stock-pics/8.png" alt="Lawn care and landscaping - MPH Property Services" className="w-full h-full min-h-[400px] object-cover" />
                <div className="absolute inset-0 bg-navy-900/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-800/60 shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-gold font-bold tracking-widest text-sm mb-2">SERVICE AREA</h4>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">PROUDLY SERVING</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md">Trusted lawn care and landscaping across Brockport and surrounding communities.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Brockport', 'Spencerport', 'Hamlin', 'Ogden', 'Holley', 'Kendall'].map((city) => (
                  <a key={city} href="#" className="flex items-center gap-3 px-5 py-4 rounded-lg bg-navy-900/80 border border-white/10 hover:border-gold/50 hover:bg-navy-900 text-white font-heading font-bold text-base md:text-lg transition-all duration-200 group">
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
                title="MPH Property Services location"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-14 bg-navy-900 relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <button onClick={scrollToHero} className="bg-gold text-navy-900 px-10 py-4 rounded font-bold text-lg hover:bg-white transition-colors shadow-lg shadow-gold/20">
            GET YOUR FREE QUOTE
          </button>
        </div>
      </section>
    </>
  );
}
