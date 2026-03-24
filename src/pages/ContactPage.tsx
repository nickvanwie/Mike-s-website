import { Star } from 'lucide-react';

const contactPageReviews = [
  {
    name: 'Mike T.',
    text: 'MPH Property Services did an outstanding job on our lawn and beds. Professional, on time, and left everything clean. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    name: 'Sarah L.',
    text: 'We needed our yard cleaned up and they came out the same week. The crew was thorough and the property looked great. Five stars.',
    date: '1 month ago',
  },
  {
    name: 'James K.',
    text: 'From quote to completion, everything was smooth. Fair pricing and quality work. Will use again for our next project.',
    date: '3 weeks ago',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-navy-900 min-h-screen text-white">
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="bg-navy-800/80 border border-white/10 rounded-lg shadow-xl p-8 md:p-10">
              <h4 className="text-gold font-bold tracking-widest text-sm mb-2">CONTACT US</h4>
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

          <div className="mt-12 md:mt-16 overflow-hidden">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-gold fill-gold w-5 h-5" />
                ))}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">WHAT OUR CLIENTS SAY</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                Trusted by homeowners across Brockport and surrounding communities.
              </p>
            </div>

            <div className="relative -mx-4 md:-mx-8 overflow-hidden">
              <div className="review-marquee-track flex gap-6 py-4 w-max">
                {[...contactPageReviews, ...contactPageReviews].map((review, i) => (
                  <div key={i} className="flex-shrink-0 w-[320px] md:w-[360px] bg-navy-800 rounded-xl p-6 border border-white/10 border-t-4 border-t-gold shadow-xl">
                    <p className="text-gray-200 text-base leading-relaxed mb-4 line-clamp-3">"{review.text}"</p>
                    <p className="text-white font-heading font-bold text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{review.date} · Google Review</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
