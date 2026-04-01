import { Star } from 'lucide-react';
import { googleReviews } from '../data/reviews';

type ReviewsSectionProps = {
  /** When set, shows a photo background with navy overlay (e.g. home page). Omit for solid navy. */
  backgroundImageSrc?: string;
  subtitle?: string;
  className?: string;
};

export default function ReviewsSection({ backgroundImageSrc, subtitle, className = '' }: ReviewsSectionProps) {
  return (
    <section className={`py-12 md:py-14 overflow-hidden relative max-md:border-t max-md:border-white/10 ${className}`}>
      {backgroundImageSrc ? (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImageSrc} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-navy-900" />
      )}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-gold fill-gold w-5 h-5" />
            ))}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">WHAT OUR CLIENTS SAY</h2>
          {subtitle ? <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{subtitle}</p> : null}
        </div>
        <div className="relative -mx-4 md:-mx-8 overflow-hidden">
          <div className="review-marquee-track flex gap-6 py-4 w-max">
            {[...googleReviews, ...googleReviews].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[360px] bg-navy-800 rounded-xl p-6 border border-white/10 border-t-4 border-t-gold shadow-xl"
              >
                <p className="text-gray-200 text-base leading-relaxed mb-4 line-clamp-3">"{review.text}"</p>
                <p className="text-white font-heading font-bold text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{review.date} · Google Review</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=MPH+Property+Services+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 rounded font-bold text-lg md:text-xl hover:bg-white hover:text-navy-900 transition-colors shadow-lg shadow-gold/30"
          >
            <Star className="w-6 h-6 fill-white shrink-0" />
            Leave us a review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
