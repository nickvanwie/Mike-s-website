import { useParams, Link } from 'react-router-dom';
import { serviceAreas } from '../data/serviceAreas';
import ReviewsSection from '../components/ReviewsSection';
import ContactQuoteSection from '../components/ContactQuoteSection';

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="pt-24 pb-16 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-white mb-4">Service area not found</h1>
          <Link to="/" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-0">
      <section className="py-12 md:py-16 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-lg border border-white/10 overflow-hidden relative">
                <img src={area.img} alt={`${area.title} lawn care and landscaping`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/30" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h4 className="text-gold font-bold tracking-widest text-sm">SERVICE AREAS</h4>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">{area.title}</h1>
              <p className="text-gray-300 leading-relaxed text-lg">{area.shortDesc}</p>
              <p className="text-gray-400 leading-relaxed">{area.longDesc}</p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-gold text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors shadow-lg"
                >
                  GET A FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <ContactQuoteSection />

      <section className="py-12 bg-navy-800 border-t border-white/5 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-gray-400 text-center mb-6">More communities we serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas
              .filter((a) => a.slug !== slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/service-areas/${a.slug}`}
                  className="px-5 py-2.5 rounded-lg bg-navy-900/60 border border-white/10 hover:border-gold/30 text-white font-heading font-bold text-sm transition-colors"
                >
                  {a.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
