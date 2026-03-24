export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-100 min-h-screen">
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8 md:p-10">
              <h4 className="text-gold font-bold tracking-widest text-sm mb-2">CONTACT US</h4>
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
                GET A FREE QUOTE
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
                Contact us by filling out the form or using one of the methods below. We will get back to you as soon as possible.
              </p>

              <div className="space-y-4 max-w-xl">
                <a
                  href="mailto:info@mphpropertyservices.com"
                  className="block w-full rounded bg-gold text-white text-center font-bold px-5 py-3 hover:bg-navy-900 transition-colors"
                >
                  EMAIL: INFO@MPHPROPERTYSERVICES.COM
                </a>
                <a
                  href="tel:1234567891"
                  className="block w-full rounded bg-gold text-white text-center font-bold px-5 py-3 hover:bg-navy-900 transition-colors"
                >
                  PHONE: (123) 456-7891
                </a>
              </div>
            </div>

            <div className="bg-black rounded-lg shadow-xl border border-white/10 p-4 md:p-5">
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
    </div>
  );
}
