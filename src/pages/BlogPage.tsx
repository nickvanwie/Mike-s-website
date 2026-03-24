import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function ImageSlot({
  label,
  className = '',
  src,
  alt,
}: {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`w-full rounded-lg border border-dashed border-white/30 bg-navy-900/70 flex items-center justify-center text-gray-400 text-sm ${className}`}
      aria-label={label}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className="w-full h-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        label
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <section className="pt-36 md:pt-40 pb-14 md:pb-16 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h4 className="text-gold font-bold tracking-widest text-sm mb-3">BLOG</h4>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">LAWN CARE INSIGHTS</h1>
          <p className="text-gray-300">
            Practical guides and seasonal advice for homeowners in Brockport, Hamlin, Spencerport, and surrounding Western New York communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl overflow-hidden border border-white/10 bg-navy-800/70 shadow-lg">
              <ImageSlot label="Cover Image Placeholder" className="aspect-[16/8]" src={post.coverImage} alt={post.coverImageAlt} />
              <div className="p-6 md:p-7">
                <h2 className="font-heading text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-5">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block bg-gold text-white px-5 py-2.5 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors"
                >
                  READ ARTICLE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
