import { Link, Navigate, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';

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
      className={`w-full rounded-lg overflow-hidden ${src ? '' : 'border border-dashed border-white/30 bg-navy-900/70 flex items-center justify-center text-gray-400 text-sm'} ${className}`}
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

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const middleIndex = Math.max(2, Math.floor(post.paragraphs.length / 2));

  return (
    <section className="pt-36 md:pt-40 pb-14 md:pb-16 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-block text-gold font-bold mb-6 hover:text-white transition-colors">
            ← BACK TO BLOG
          </Link>

          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <ImageSlot label="Cover Image Placeholder" className="aspect-[16/8] mb-8" src={post.coverImage} alt={post.coverImageAlt} />

          <article className="space-y-6 text-gray-200 leading-relaxed text-base md:text-lg">
            {post.paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
                {index === middleIndex && (
                  <ImageSlot
                    label="Inline Blog Image Placeholder"
                    className="aspect-[16/9] mt-8"
                    src={post.inlineImage}
                    alt={post.inlineImageAlt}
                  />
                )}
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
