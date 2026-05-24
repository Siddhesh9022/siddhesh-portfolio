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
    title: 'Centrify: Shipping a Jira-Style Platform to 200+ Users',
    excerpt: 'Building an in-house agile platform with React, TanStack Query, FastAPI, and JWT role-based access — from backlogs and sprints to bugs and a personal dashboard.',
    category: 'Full Stack',
    readTime: '6 min read',
    date: '2026',
    slug: 'https://github.com/Siddhesh9022/Centrify-',
  },
  {
    id: '2',
    title: 'Apache Kafka in SCM Approval Workflows',
    excerpt: 'How event-driven architecture powers PR/RFQ workflows, hierarchical approvals, and real-time updates across a supply chain management platform.',
    category: 'Backend Engineering',
    readTime: '5 min read',
    date: '2026',
    slug: '#blog-2',
  },
  {
    id: '3',
    title: 'Trackify: Full-Stack Personal Finance with OTP Auth',
    excerpt: 'Designing a money tracker with a calendar expense grid, multi-bank balances, SIP savings, CSV export, and email OTP verification using FastAPI and React.',
    category: 'Full Stack',
    readTime: '7 min read',
    date: '2025',
    slug: 'https://github.com/Siddhesh9022/Trackify',
  },
  {
    id: '4',
    title: 'Facial Recognition Attendance at 95%+ Accuracy',
    excerpt: 'A real-time pipeline with Haar Cascade, LBPH, Tkinter GUI, and pyttsx3 speech feedback for accessible attendance tracking.',
    category: 'Computer Vision',
    readTime: '8 min read',
    date: '2025',
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
          target={post.slug.startsWith('http') ? '_blank' : undefined}
          rel={post.slug.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              {post.slug.startsWith('http') ? 'View on GitHub →' : 'Read Article →'}
            </span>
          </div>
        </a>
      </article>
    </FadeInOnScroll>
  );
};

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 md:py-24 scroll-mt-20 bg-[var(--color-background)]">
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
