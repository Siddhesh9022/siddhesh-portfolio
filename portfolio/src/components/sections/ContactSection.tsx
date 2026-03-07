/**
 * Contact Section - Contact information and working contact form
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { ContactForm } from '../ui/ContactForm';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';
import { Card } from '../ui/Card';
import { contactData } from '../../data/portfolioData';

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <SectionSubtitle className="text-[var(--color-primary)]">
              {contactData.subtitle}
            </SectionSubtitle>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <SectionTitle className="mt-2 text-[var(--color-text)]">
              {contactData.title}
            </SectionTitle>
          </FadeInOnScroll>
          <FadeInOnScroll delay={200}>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-muted)]">
              {contactData.description}
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info Cards */}
          <FadeInOnScroll delay={100} direction="right">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <Card className="text-center p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--color-surface)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-[var(--color-text)]">Email</h3>
                  <a href={`mailto:${contactData.email}`} className="text-sm text-[var(--color-primary)] hover:opacity-70 transition-opacity">
                    {contactData.email}
                  </a>
                </Card>

                {/* Phone */}
                <Card className="text-center p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--color-surface)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-[var(--color-text)]">Phone</h3>
                  <a href={`tel:${contactData.phone}`} className="text-sm text-[var(--color-primary)] hover:opacity-70 transition-opacity">
                    {contactData.phone}
                  </a>
                </Card>

                {/* Location */}
                <Card className="text-center p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--color-surface)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-[var(--color-text)]">Location</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{contactData.location}</p>
                </Card>

                {/* Availability */}
                <Card className="text-center p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--color-surface)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-[var(--color-text)]">Availability</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{contactData.availability}</p>
                </Card>
              </div>
              
              <p className="text-sm text-[var(--color-text-muted)] text-center">
                {contactData.responseTime}
              </p>
            </div>
          </FadeInOnScroll>

          {/* Right Side - Contact Form */}
          <FadeInOnScroll delay={200} direction="left">
            <Card className="p-8">
              <ContactForm />
            </Card>
          </FadeInOnScroll>
        </div>
      </Container>
    </section>
  );
};
