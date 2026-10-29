import { ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'RLHF Preference Data Pipeline',
    category: 'AI Training',
    description: 'Designed and executed a large-scale preference annotation pipeline for a leading AI lab, producing training data that improved model helpfulness scores by 23% while maintaining safety compliance.',
    challenge: 'The client needed high-quality pairwise preference data at scale, with strict quality controls and domain-specific expertise across technical, creative, and conversational domains.',
    approach: 'Developed comprehensive annotation guidelines, established quality benchmarks, and implemented multi-stage review processes. Created domain-specific rubrics for consistent evaluation.',
    outcome: 'Delivered 200K+ annotated preference pairs with 98.5% inter-annotator agreement. Model trained on this data showed significant improvement in user satisfaction metrics.',
    tags: ['RLHF', 'Annotation', 'Quality Control', 'Scale'],
  },
  {
    title: 'Multi-Model Evaluation Framework',
    category: 'Evaluation',
    description: 'Built a comprehensive evaluation framework for comparing multiple LLMs across factual accuracy, reasoning quality, safety, and instruction following.',
    challenge: 'The organization needed a standardized way to evaluate and compare model performance across diverse use cases, with reproducible results and clear improvement tracking.',
    approach: 'Designed multi-dimensional evaluation rubrics, created representative test suites, and established statistical methods for reliable comparison. Implemented automated scoring with human oversight.',
    outcome: 'Framework adopted across the organization for all model selection decisions. Enabled data-driven model comparisons that reduced deployment risk and improved end-user experience.',
    tags: ['Benchmarking', 'Comparison', 'Metrics', 'Automation'],
  },
  {
    title: 'Safety Red Team Operation',
    category: 'Safety',
    description: 'Conducted systematic red teaming of a production conversational AI system, identifying critical vulnerabilities before public deployment.',
    challenge: 'A conversational AI product needed thorough safety testing before launch, with particular attention to jailbreak resistance, harmful content generation, and edge case handling.',
    approach: 'Executed structured adversarial testing across multiple attack vectors, documented vulnerability patterns, and provided specific remediation recommendations with proof-of-concept mitigations.',
    outcome: 'Identified 47 unique vulnerability patterns, 12 of which were critical. All critical issues were addressed before launch. System passed subsequent external security audit.',
    tags: ['Red Teaming', 'Jailbreak', 'Vulnerability', 'Remediation'],
  },
  {
    title: 'Production Prompt Library',
    category: 'Prompt Engineering',
    description: 'Created a comprehensive prompt engineering system for an enterprise AI product, standardizing output quality across multiple use cases and user segments.',
    challenge: 'The product team needed reliable, consistent AI outputs across diverse scenarios — from customer support to content generation — with minimal engineering overhead.',
    approach: 'Developed modular prompt templates with clear variable separation, created few-shot example libraries for each use case, and established testing protocols for prompt changes.',
    outcome: 'Reduced prompt-related support tickets by 65%. Standardized output quality across 15+ use cases. Created self-service prompt modification capabilities for the product team.',
    tags: ['Prompts', 'Templates', 'Enterprise', 'Standardization'],
  },
];

export default function Work() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Work</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Selected case studies.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            Illustrative examples of how I approach complex AI training and evaluation challenges. 
            Details are generalized to protect client confidentiality.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <article
              key={i}
              className="p-8 md:p-12 border border-[#222] bg-[#080808] hover:border-[#333] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs text-[#666] uppercase tracking-wider">{study.category}</span>
                  <h2 className="mt-2 text-xl md:text-2xl font-medium text-white">{study.title}</h2>
                </div>
                <ExternalLink size={18} className="text-[#444] flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#a0a0a0] leading-relaxed mb-8">{study.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-medium text-[#666] uppercase tracking-wider mb-3">Challenge</h3>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-[#666] uppercase tracking-wider mb-3">Approach</h3>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">{study.approach}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-[#666] uppercase tracking-wider mb-3">Outcome</h3>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">{study.outcome}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {study.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs text-[#a0a0a0] border border-[#222] bg-[#0a0a0a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-xs text-[#666] text-center max-w-2xl mx-auto">
          Case studies are illustrative and generalized to protect client confidentiality. 
          Specific metrics, timelines, and details may differ from actual engagements.
        </p>
      </div>
    </div>
  );
}
