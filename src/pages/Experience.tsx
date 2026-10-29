import { Breadcrumbs, SEO } from '../components/Layout';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Experience — Brian Kibet" description="Professional experience in AI training and evaluation." />
        <Breadcrumbs items={[{ label: 'Experience' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Experience</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            A track record of precision.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            My professional journey reflects a consistent commitment to quality, 
            continuous learning, and the responsible development of AI systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 border-b border-white/5 last:border-b-0"
            >
              {/* Period */}
              <div className="lg:col-span-1">
                <p className="text-sm text-neutral-500 font-light">{exp.period}</p>
                <p className="mt-2 text-sm text-neutral-400 font-light">{exp.company}</p>
                <p className="text-xs text-neutral-600 font-light mt-1">{exp.type}</p>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-medium text-white tracking-wide">{exp.role}</h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">{exp.description}</p>
                <ul className="mt-6 space-y-2">
                  {exp.responsibilities.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-neutral-500 font-light">
                      <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
