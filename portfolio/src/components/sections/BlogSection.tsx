/**
 * BlogSection - Technical articles and project write-ups
 * Showcases knowledge about Kafka, SCM/EAM, and technical learnings
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Implementing Apache Kafka in Enterprise SCM Applications',
    excerpt: 'How I integrated Apache Kafka for real-time data streaming in Supply Chain Management systems, enabling event-driven architecture and improving system responsiveness by 40%.',
    category: 'Backend Engineering',
    readTime: '5 min read',
    date: 'Jan 2026',
    slug: '#blog-1',
  },
  {
    id: '2',
    title: 'Building Facial Recognition with OpenCV and Haar Cascade',
    excerpt: 'Deep dive into building a 95%+ accuracy attendance system using computer vision. Exploring Haar Cascade, LBPH algorithms, and creating accessible voice feedback with pyttsx3.',
    category: 'Computer Vision',
    readTime: '8 min read',
    date: 'Dec 2025',
    slug: '#blog-2',
  },
  {
    id: '3',
    title: 'Working with IBM Watson: NLP for Social Good',
    excerpt: 'Lessons learned from developing a Water Sanitation Chatbot during my IBM internship. Implementing NLP for understanding user queries and integrating Watson services.',
    category: 'AI/ML',
    readTime: '6 min read',
    date: 'Nov 2025',
    slug: '#blog-3',
  },
  {
    id: '4',
    title: 'EAM Systems: Managing Enterprise Assets at Scale',
    excerpt: 'Understanding Enterprise Asset Management systems and their role in modern businesses. Key challenges in asset tracking, maintenance scheduling, and lifecycle management.',
    category: 'Enterprise Software',
    readTime: '4 min read',
    date: 'Oct 2025',
    slug: '#blog-4',
  },
];

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <FadeInOnScroll delay={index * 100} direction="up">
      <article className="group h-full">
        <a
          href={post.slug}
          className="block h-full p-6 rounded-xl border-2 border-[var(--color-border)] 
                     bg-[var(--color-surface)] hover:border-[var(--color-primary)]
                     transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* Category & Read Time */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
              }}
            >
              {post.category}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Date & Read More */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-text-muted)]">{post.date}</span>
            <span className="text-sm font-medium text-[var(--color-primary)] group-hover:underline">
              Read Article →
            </span>
          </div>
        </a>
      </article>
    </FadeInOnScroll>
  );
};

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-[var(--color-background)]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <SectionSubtitle className="text-[var(--color-primary)]">Technical Writing</SectionSubtitle>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <SectionTitle className="mt-2 text-[var(--color-text)]">Blog & Articles</SectionTitle>
          </FadeInOnScroll>
          <FadeInOnScroll delay={200}>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
              Sharing insights from my work with Kafka, SCM/EAM systems, and hands-on project experience.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <FadeInOnScroll delay={400}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-border)]
                       text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]
                       transition-all duration-300"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
};
