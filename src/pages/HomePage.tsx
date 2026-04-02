import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Clock, CheckCircle, FileText, ChevronDown, ChevronUp, MapPin, Zap, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { processSteps } from '../data/processSteps';
import { blogPosts } from '../data/blogPosts';
import howWeWorkBg from '../../blog images/Untitled design (24).png';
import ReviewsSection from '../components/ReviewsSection';
import { serviceAreas } from '../data/serviceAreas';

/**
 * Explicit 6-col bento (md+): no masonry holes, row heights capped via grid-auto-rows.
 * Mobile: 2-col; wide items span full width.
 */
const galleryLayout = [
  { file: '1.png', tw: 'col-span-2 md:col-span-6 row-span-1 md:row-span-2' },
  { file: '2.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '3.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '4.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '5.png', tw: 'col-span-1 md:col-span-3 row-span-1 md:row-span-2' },
  { file: '6.png', tw: 'col-span-1 md:col-span-3 row-span-1 md:row-span-2' },
  { file: '7.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '8.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '9.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '10.png', tw: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
  { file: '11.png', tw: 'col-span-2 md:col-span-4 row-span-1 md:row-span-2' },
  { file: '12.png', tw: 'col-span-2 md:col-span-6 row-span-1 md:row-span-2' },
] as const;

const faqItems = [
  { q: 'Do you offer seasonal or one-time services?', a: "Yes. We offer both recurring lawn care (e.g. weekly mowing) and one-time services like mulch, trimming, and property transformations. Tell us what you need and we’ll put together a plan and quote." },
  { q: 'Are you insured?', a: "Yes. We carry appropriate insurance for our work. We’re happy to provide proof upon request and to meet any requirements from property managers or HOAs." },
  { q: 'Do you provide free estimates?', a: "Yes. We provide free, no-obligation estimates for residential and commercial properties. After we assess your needs—either from your description or an onsite visit—we’ll give you a clear written quote with no hidden fees. There’s no pressure to commit." },
  { q: 'What areas do you serve?', a: "We proudly serve Brockport and the surrounding communities, including Spencerport, Hamlin, Ogden, Holley, and Kendall. If you’re unsure whether we cover your location, give us a call or submit a quote request—we’ll let you know right away." },
];

function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsMdUp(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMdUp;
}

const quoteIframeProps = {
  src: 'https://core.switchflowai.com/widget/form/lDjb3ZWn2YT1dx2rr4eS',
  className: 'quote-form-iframe w-full border-0 rounded-[10px]' as const,
  'data-layout': "{'id':'INLINE'}",
  'data-trigger-type': 'alwaysShow',
  'data-trigger-value': '',
  'data-activation-type': 'alwaysActivated',
  'data-activation-value': '',
  'data-deactivation-type': 'neverDeactivate',
  'data-deactivation-value': '',
  'data-form-name': 'Website Form',
  'data-height': '1020',
  'data-form-id': 'lDjb3ZWn2YT1dx2rr4eS',
  title: 'Website Form',
} as const;

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const location = useLocation();
  const isMdUp = useIsMdUp();

  useEffect(() => {
    const hash = location.hash;
    if (
      hash !== '#reviews' &&
      hash !== '#faq' &&
      hash !== '#services' &&
      hash !== '#quote-form' &&
      hash !== '#quote-form-mobile' &&
      hash !== '#gallery' &&
      hash !== '#blog'
    )
      return;

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const HEADER_OFFSET_PX = window.innerWidth < 768 ? 96 : 120;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Math.max(0, y), left: 0, behavior: 'smooth' });
    });
  }, [location.hash]);

  const scrollToHero = () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section
        id="hero"
        className="relative pt-28 pb-0 md:pt-32 md:pb-16 max-md:min-h-[calc(100dvh-5rem)] max-md:flex max-md:flex-col"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/hero.svg" alt="MPH Property Services - Lawn Care & Landscaping" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-md:flex-1 max-md:flex max-md:flex-col max-md:min-h-0">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start max-md:flex-1 max-md:min-h-0">
            {/* md:mt aligns green badge with Phone row in GHL iframe. Tweak if GHL layout changes. */}
            <div className="w-full md:max-w-3xl flex-shrink-0 pt-2 md:mt-[10rem] md:pt-0 max-md:flex max-md:flex-col max-md:flex-1 max-md:min-h-0 max-md:justify-start">
              <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded text-xs font-bold tracking-widest mb-2 border border-gold/20 backdrop-blur-sm">
                SERVING BROCKPORT & SURROUNDING AREAS
              </div>
              <h1 className="font-heading max-md:text-[2.15rem] text-4xl md:text-6xl leading-tight font-bold text-white drop-shadow-lg">
                <span className="block md:hidden">LAWN CARE</span>
                <span className="hidden md:inline">RELIABLE LAWN CARE <br /></span>
                <span className="block text-gold">DONE RIGHT</span>
              </h1>
              <p className="text-gray-200 max-md:text-base text-lg max-w-xl leading-relaxed drop-shadow-md mt-4">
                <span className="md:hidden">Professional lawn care, landscaping, and property maintenance from MPH Property Services.</span>
                <span className="hidden md:inline">
                  Professional lawn care, landscaping, and property maintenance from MPH Property Services, delivering quality results and consistent service you can count on.
                </span>
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#quote-form-mobile"
                  className="md:hidden bg-gold text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors shadow-lg text-center"
                >
                  REQUEST SERVICE
                </a>
                <a
                  href="#quote-form"
                  className="hidden md:inline-block bg-gold text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors shadow-lg"
                >
                  REQUEST SERVICE
                </a>
                <a href="#services" className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  VIEW SERVICES
                </a>
              </div>
              <div className="max-md:flex-1 max-md:min-h-[3rem]" aria-hidden />
              <div className="md:hidden flex flex-col items-center pt-6 pb-8 pointer-events-none shrink-0" aria-hidden>
                <img
                  src="/blog images/Untitled design (25) (1).png"
                  alt=""
                  className="w-[min(340px,94vw)] max-w-none h-auto"
                />
              </div>
            </div>
            {isMdUp ? (
              <div id="quote-form" className="w-full md:w-[540px] flex-shrink-0 mt-10 md:mt-0 md:pt-0 scroll-mt-28">
                <iframe
                  {...quoteIframeProps}
                  id="inline-lDjb3ZWn2YT1dx2rr4eS"
                  data-layout-iframe-id="inline-lDjb3ZWn2YT1dx2rr4eS"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {!isMdUp ? (
        <section id="quote-form-mobile" className="bg-navy-900 border-t border-white/10 scroll-mt-24 pt-6 pb-10 px-4">
          <div className="container mx-auto max-w-lg">
            <iframe
              {...quoteIframeProps}
              id="inline-lDjb3ZWn2YT1dx2rr4eS-mobile"
              data-layout-iframe-id="inline-lDjb3ZWn2YT1dx2rr4eS-mobile"
            />
          </div>
        </section>
      ) : null}

      <section className="bg-navy-800 border-y border-white/5 max-md:mt-0 md:-mt-12 pt-6 md:pt-8 pb-12 md:pb-14 relative z-10">
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
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-3.5 rounded-lg min-w-0 bg-gold text-white border-2 border-white/25 shadow-md shadow-black/25"
                  >
                    <item.icon className="text-white w-8 h-8 shrink-0" />
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

      <section id="about" className="py-12 md:py-14 bg-navy-900 max-md:border-t max-md:border-white/10">
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

      <section id="services" className="py-12 md:py-14 bg-navy-800 max-md:border-t max-md:border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR EXPERTISE</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">LAWN CARE & LANDSCAPING</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-navy-900 shadow-lg"
              >
                <img
                  src={service.img}
                  alt={service.title.replace(/\s+/g, ' ')}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* 75% width bar: description expands upward and pushes the chip up (flex-col-reverse) */}
                <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center px-2">
                  <div className="flex w-[75%] flex-col-reverse items-stretch">
                    <div
                      className="flex items-center gap-3 rounded-lg border border-gold/50 bg-navy-900/95 px-3 py-2.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] hover:ring-2 hover:ring-white/80 focus-within:shadow-[0_0_28px_rgba(255,255,255,0.45)] focus-within:ring-2 focus-within:ring-white/80 group-hover:rounded-b-lg group-hover:rounded-t-none group-focus-within:rounded-b-lg group-focus-within:rounded-t-none sm:px-4 sm:py-3"
                    >
                      <span className="min-w-0 flex-1 font-heading text-sm font-extrabold uppercase leading-snug tracking-wide text-white sm:text-base">
                        {service.title.replace(/\s+/g, ' ')}
                      </span>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gold text-white transition-colors hover:border-white hover:bg-white hover:text-gold sm:h-10 sm:w-10"
                        aria-label={`View ${service.title.replace(/\s+/g, ' ')}`}
                      >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                      </Link>
                    </div>
                    <div
                      className="pointer-events-none max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-500 ease-out motion-reduce:transition-none group-hover:pointer-events-auto group-hover:max-h-[220px] group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:max-h-[220px] group-focus-within:opacity-100 sm:group-hover:max-h-[200px] sm:group-focus-within:max-h-[200px]"
                    >
                      <div className="rounded-t-lg border border-b-0 border-gold/40 bg-navy-800 px-3.5 pb-3 pt-3.5 text-white sm:px-4 sm:pt-4">
                        <p className="line-clamp-5 text-xs leading-relaxed text-white/90 sm:text-sm sm:leading-relaxed sm:line-clamp-4">
                          {service.longDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-12 md:py-14 bg-navy-900 relative overflow-hidden max-md:border-t max-md:border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={howWeWorkBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">HOW WE WORK</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              From your first call to the final walkthrough, we follow a clear, reliable process so you know what to expect every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 relative max-w-6xl mx-auto">
            {processSteps.map((item, i) => {
              const StepIcon = item.Icon;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center text-center z-10 rounded-xl border border-white/10 bg-navy-800/90 p-6 shadow-xl backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy-900 text-gold shadow-[0_0_15px_rgba(5,136,68,0.3)]">
                    <StepIcon className="h-8 w-8 shrink-0" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  {i < processSteps.length - 1 ? (
                    <div className="hidden md:block absolute top-[4.25rem] left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-navy-600 -z-10" aria-hidden>
                      <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-px border-t-2 border-r-2 border-navy-600 rotate-45" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 md:py-14 bg-navy-800 max-md:border-t max-md:border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">OUR WORK</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">Lawn care and landscaping projects we're proud of.</p>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 grid-flow-dense gap-1.5 md:gap-2 auto-rows-[88px] sm:auto-rows-[96px] md:auto-rows-[100px]">
            {galleryLayout.map((item, i) => (
              <div
                key={item.file}
                className={`relative h-full min-h-0 overflow-hidden rounded-md bg-navy-900 shadow-sm ring-1 ring-white/10 group ${item.tw}`}
              >
                <img
                  src={`/stock-pics/${item.file}`}
                  alt={`Project ${i + 1} - MPH Property Services`}
                  className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-gold/25 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews">
        <ReviewsSection backgroundImageSrc="/blog images/15.png" />
      </section>

      <section id="blog" className="py-12 md:py-14 bg-navy-900 max-md:border-t max-md:border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h4 className="text-gold font-bold tracking-widest text-sm mb-2">BLOG</h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">LATEST LAWN CARE INSIGHTS</h2>
            </div>
            <Link to="/blog" className="inline-block bg-gold text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors">
              VIEW ALL BLOG POSTS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-xl overflow-hidden border-2 border-white/25 bg-gold shadow-lg shadow-black/25">
                <div className="aspect-[16/8] bg-navy-900/40 border-b border-white/20 overflow-hidden">
                  <img src={post.coverImage} alt={post.coverImageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="p-6 bg-gold">
                  <h3 className="font-heading text-xl font-bold mb-3 line-clamp-2 text-white">{post.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block text-white font-bold border-b-2 border-white/70 hover:border-white pb-0.5 transition-colors"
                  >
                    READ MORE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-14 bg-navy-800 max-md:border-t max-md:border-white/10">
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
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    className="flex items-start gap-2 md:gap-3 min-w-0 px-3 md:px-5 py-3 md:py-4 rounded-lg bg-navy-900/80 border border-white/10 hover:border-gold/50 hover:bg-navy-900 text-white font-heading font-bold text-sm md:text-lg leading-tight transition-all duration-200 group"
                  >
                    <MapPin size={20} className="text-gold shrink-0 mt-0.5 md:mt-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-gold transition-colors break-words">{area.title.replace(/\s+/g, ' ')}</span>
                  </Link>
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
