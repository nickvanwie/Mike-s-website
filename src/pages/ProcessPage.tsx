const processSteps = [
  { step: '01', title: 'CONTACT', desc: 'Reach out by phone or our free quote form for a no-pressure consultation.' },
  { step: '02', title: 'ASSESS', desc: 'We visit your property, evaluate your needs, and provide a clear written estimate.' },
  { step: '03', title: 'EXECUTE', desc: 'Our crew arrives on time and completes the work with minimal disruption.' },
  { step: '04', title: 'ENJOY', desc: 'You get clean lines, healthier turf, and a property you’re proud to come home to.' },
];

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/stock-pics/21.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-gold font-bold tracking-widest text-sm mb-2">HOW WE WORK</h4>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">OUR PROCESS</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              From your first call to the final walkthrough, we follow a clear, reliable process so you know what to expect every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative max-w-5xl mx-auto">
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
