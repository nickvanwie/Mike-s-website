import howWeWorkBg from '../../blog images/Untitled design (24).png';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { processSteps } from '../data/processSteps';

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={howWeWorkBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-gold font-bold tracking-widest text-sm mb-2">HOW WE WORK</h4>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">OUR PROCESS</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              A simple path from your first message to a yard you love—no guesswork, no surprises.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-4 md:gap-1 lg:gap-3 max-w-6xl mx-auto">
            {processSteps.map((item, i) => (
              <div key={item.step} className="contents">
                <div className="group relative z-10 flex flex-col items-center rounded-xl border border-white/10 bg-navy-800/90 p-6 text-center shadow-xl backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_12px_40px_-12px_rgba(5,136,68,0.25)] md:max-w-[220px] md:flex-1 lg:max-w-[240px]">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy-900 font-heading text-xl font-bold text-gold shadow-[0_0_18px_rgba(5,136,68,0.35)] transition-transform duration-300 ease-out group-hover:scale-105">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </div>
                {i < processSteps.length - 1 ? (
                  <>
                    <div className="flex justify-center py-1 text-gold/70 md:hidden" aria-hidden>
                      <ChevronDown className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <div
                      className="hidden md:flex md:items-center md:justify-center md:self-center md:pt-14 md:pb-6 text-gold"
                      aria-hidden
                    >
                      <ArrowRight className="h-7 w-7 shrink-0 opacity-90 transition-opacity duration-300 lg:h-8 lg:w-8" strokeWidth={2.5} />
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <p className="text-gray-300 mb-6 text-lg">Ready to get started? Get your free quote today.</p>
            <a
              href="/#hero"
              className="inline-block bg-gold text-white px-10 py-4 rounded font-bold text-lg hover:bg-white hover:text-navy-900 transition-colors shadow-lg shadow-gold/20"
            >
              GET YOUR FREE QUOTE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
