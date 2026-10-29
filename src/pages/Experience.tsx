import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI Trainer & LLM Evaluator',
    company: 'Independent / Contract',
    period: '2023 — Present',
    description: 'Providing specialized AI training, evaluation, and prompt engineering services for leading AI companies and research organizations.',
    highlights: [
      'Completed 500K+ high-quality training interactions across multiple model families',
      'Designed evaluation frameworks for factual accuracy, reasoning, and safety compliance',
      'Created prompt templates and system instructions for production AI products',
      'Maintained 99%+ quality scores across annotation and evaluation tasks',
    ],
  },
  {
    role: 'RLHF Annotation Specialist',
    company: 'AI Platform Partners',
    period: '2023 — 2024',
    description: 'Specialized in reinforcement learning from human feedback, creating preference data that directly shapes how language models respond to users worldwide.',
    highlights: [
      'Ranked and critiqued model responses across diverse domains and complexity levels',
      'Authored detailed revisions demonstrating ideal response patterns',
      'Contributed to safety alignment through careful identification of harmful outputs',
      'Achieved top-tier annotator status through consistent quality and throughput',
    ],
  },
  {
    role: 'Prompt Engineer & Content Specialist',
    company: 'Various Clients',
    period: '2022 — 2023',
    description: 'Designed and optimized prompts for AI-powered products, creating reliable output patterns for enterprise applications.',
    highlights: [
      'Developed system prompts for conversational AI assistants',
      'Created few-shot examples and chain-of-thought templates',
      'Optimized prompt performance through systematic A/B testing',
      'Documented prompt engineering best practices for team adoption',
    ],
  },
  {
    role: 'Language & Quality Specialist',
    company: 'Previous Professional Experience',
    period: '2020 — 2022',
    description: 'Applied linguistic expertise and quality analysis skills to content evaluation, translation review, and cross-cultural communication.',
    highlights: [
      'Developed deep understanding of linguistic nuance and cultural context',
      'Built quality assessment frameworks for multilingual content',
      'Applied analytical rigor to complex evaluation tasks',
      'Established foundation for transition into AI training specialization',
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Experience</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            A track record of precision.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            My professional journey reflects a consistent commitment to quality, 
            continuous learning, and the responsible development of AI systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 border-b border-[#222] last:border-b-0"
            >
              {/* Period */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 text-sm text-[#666]">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#a0a0a0]">
                  <Briefcase size={14} />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed">{exp.description}</p>
                <ul className="mt-6 space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#a0a0a0]">
                      <span className="mt-2 w-1 h-1 bg-[#444] rounded-full flex-shrink-0" />
                      {highlight}
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
