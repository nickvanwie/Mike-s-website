import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-24 pb-16 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-white mb-4">Service not found</h1>
          <Link to="/#services" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
            View all services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <section className="py-12 md:py-16 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-lg border border-white/10 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/30" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h4 className="text-gold font-bold tracking-widest text-sm">OUR SERVICES</h4>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">{service.title}</h1>
              <p className="text-gray-300 leading-relaxed text-lg">{service.shortDesc}</p>
              <p className="text-gray-400 leading-relaxed">{service.longDesc}</p>
              <div className="pt-4">
                <a
                  href="/#hero"
                  className="inline-block bg-gold text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors shadow-lg"
                >
                  GET A FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-navy-800 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-gray-400 text-center mb-6">Explore our other services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="px-5 py-2.5 rounded-lg bg-navy-900/60 border border-white/10 hover:border-gold/30 text-white font-heading font-bold text-sm transition-colors"
              >
                {s.title.replace(/\s+/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
