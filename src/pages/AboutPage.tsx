import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-12 md:py-16 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">ABOUT US</h4>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">POWERING OUR COMMUNITY WITH PRIDE</h1>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                MPH Property Services has been a trusted name in electrical contracting for over four decades. As a military-owned, family-operated business, we bring disciplined precision and personal care to every project.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's a simple residential repair or a complex commercial installation, our team of licensed electricians ensures your systems are safe, efficient, and built to last. We stand behind our work and treat every home and business like our own.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Serving Akron and the greater Summit County area, we're committed to quality workmanship, clear communication, and fair pricing. When you need reliable electrical solutions, we're here for you.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="/#contact" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
                  GET YOUR FREE QUOTE
                </a>
                <Link to="/process" className="text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-colors">
                  OUR PROCESS
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-lg border border-white/10 relative overflow-hidden">
                <img src="/about-panel.png" alt="Electrician working on electrical control panel - MPH Property Services" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/45" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
