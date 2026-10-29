import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs, SEO } from '../components/Layout';
import { services } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { slug } = useParams();
  const selectedService = slug ? services.find(s => s.slug === slug) : null;

  if (selectedService) {
    return (
      <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SEO title={`${selectedService.title} — Brian Kibet`} description={selectedService.shortDescription} />
          <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: selectedService.title }]} />
          
          <h1 className="font-bold text-3xl lg:text-4xl text-white tracking-tight mb-4">{selectedService.title}</h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed mb-12">{selectedService.shortDescription}</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em] mb-4">The Problem</h2>
              <p className="text-neutral-400 font-light leading-relaxed">{selectedService.problem}</p>
            </section>

            <section>
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em] mb-4">Methods</h2>
              <ul className="space-y-2">
                {selectedService.methods.map((method, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400 font-light">
                    <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                    {method}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em] mb-4">Deliverables</h2>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400 font-light">
                    <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em] mb-4">Quality Standard</h2>
              <p className="text-neutral-400 font-light leading-relaxed">{selectedService.quality}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light tracking-wide transition-colors">
              ← Back to all services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Services — Brian Kibet" description="AI training, evaluation, and quality assurance services." />
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Services</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Specialized AI services, delivered with precision.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            Each service is tailored to your specific needs, with clear deliverables, 
            measurable outcomes, and a commitment to the highest quality standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-px bg-white/5">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="block p-8 md:p-10 bg-black hover:bg-neutral-950 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white tracking-wide group-hover:text-neutral-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed font-light max-w-2xl">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-neutral-500 group-hover:text-white text-sm font-light tracking-wide transition-colors flex-shrink-0">
                  Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-white/5 bg-neutral-950">
          <h2 className="font-bold text-2xl md:text-3xl text-white tracking-tight">
            Need a custom solution?
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto font-light">
            Every project is unique. Let's discuss your specific requirements and design a service package that fits your needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
