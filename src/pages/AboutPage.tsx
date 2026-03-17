import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-12 md:py-16 bg-navy-900">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-2">ABOUT US</h4>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">CARING FOR YOUR PROPERTY WITH PRIDE</h1>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                MPH Property Services provides dependable lawn care, landscaping, and property maintenance with a focus on clean lines, healthy turf, and curb appeal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From weekly mowing and edging to trimming, mulch and stone, and full property transformations, we treat every yard like it’s our own and stand behind our work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Serving Brockport, Spencerport, Hamlin, Ogden, Holley, and Kendall, we’re committed to clear communication, consistent scheduling, and results you can see.
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
                <img src="/about-panel.png" alt="Landscaping and lawn care - MPH Property Services" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/45" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
