import ReviewsSection from '../components/ReviewsSection';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-0 bg-navy-900 min-h-screen text-white">
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/blog images/14.png" alt="" className="w-full h-full object-cover min-h-[480px]" />
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="bg-navy-800/90 border border-white/10 rounded-lg shadow-xl p-8 md:p-10 backdrop-blur-sm">
              <h4 className="section-eyebrow mb-2">CONTACT US</h4>
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
                GET A FREE QUOTE
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Contact us by filling out the form or using one of the methods below. We will get back to you as soon as possible.
              </p>

              <div className="space-y-4 max-w-xl">
                <a
                  href="mailto:info@mphpropertyservices.com"
                  className="block w-full rounded bg-gold text-white text-center font-bold px-5 py-3 hover:bg-white hover:text-navy-900 transition-colors"
                >
                  EMAIL: INFO@MPHPROPERTYSERVICES.COM
                </a>
                <a
                  href="tel:1234567891"
                  className="block w-full rounded bg-gold text-white text-center font-bold px-5 py-3 hover:bg-white hover:text-navy-900 transition-colors"
                >
                  PHONE: (123) 456-7891
                </a>
              </div>
            </div>

            <div className="rounded-lg">
              <iframe
                src="https://core.switchflowai.com/widget/form/lDjb3ZWn2YT1dx2rr4eS"
                className="quote-form-iframe w-full border-0 rounded-[10px]"
                id="contact-inline-lDjb3ZWn2YT1dx2rr4eS"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="1020"
                data-layout-iframe-id="contact-inline-lDjb3ZWn2YT1dx2rr4eS"
                data-form-id="lDjb3ZWn2YT1dx2rr4eS"
                title="Contact Form"
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection
        className="border-t border-white/10"
        subtitle="Trusted by homeowners across Brockport and surrounding communities."
      />
    </div>
  );
}
