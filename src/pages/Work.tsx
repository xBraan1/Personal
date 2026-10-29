import { Breadcrumbs, SEO } from '../components/Layout';
import { caseStudies } from '../data/content';

export default function Work() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Work — Brian Kibet" description="Selected case studies and illustrative work examples." />
        <Breadcrumbs items={[{ label: 'Work' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Work</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Selected case studies.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            Illustrative examples of how I approach complex AI training and evaluation challenges. 
            Details are generalized to protect client confidentiality.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="p-8 md:p-12 border border-white/5 bg-neutral-950 hover:border-white/10 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                    {tag}
                  </span>
                ))}
                <span className="px-2.5 py-1 border border-white/5 text-neutral-600 text-xs font-light tracking-wider">
                  Illustrative
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-medium text-white tracking-wide mb-4">{study.title}</h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-8">{study.context}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Problem</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Methodology</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">{study.methodology}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Findings</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">{study.findings}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Evaluation Criteria</h3>
                <div className="flex flex-wrap gap-2">
                  {study.criteria.map((criterion, j) => (
                    <span key={j} className="text-xs text-neutral-500 font-light">{criterion}{j < study.criteria.length - 1 ? ' ·' : ''}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Skills Demonstrated</h3>
                <div className="flex flex-wrap gap-2">
                  {study.skills.map((skill, j) => (
                    <span key={j} className="px-2.5 py-1 border border-white/5 text-neutral-500 text-xs font-light tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-xs text-neutral-600 text-center max-w-2xl mx-auto font-light">
          Case studies are illustrative and generalized to protect client confidentiality. 
          Specific metrics, timelines, and details may differ from actual engagements.
        </p>
      </div>
    </div>
  );
}
