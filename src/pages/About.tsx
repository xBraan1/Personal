import { Breadcrumbs, SEO } from '../components/Layout';
import { profile, education } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="About — Brian Kibet" description="Learn about Brian Kibet, AI Trainer & LLM Evaluation Specialist." />
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">About</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            The person behind the precision.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            I'm {profile.name} ({profile.handle}) — an AI Trainer and LLM Evaluation Specialist dedicated to making 
            artificial intelligence more accurate, safe, and aligned with human values.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">Background</h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                With a Bachelor of Science in Computer Science and coursework in Artificial Intelligence, 
                Natural Language Processing, Data Structures, Machine Learning, and AI Ethics, 
                I bring a strong technical foundation to AI training. My work sits at the intersection 
                of human language understanding and machine learning — where nuanced judgment meets 
                systematic evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">What I Do</h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                I specialize in training large language models through high-quality preference data, 
                conducting rigorous evaluations across multiple quality dimensions, and engineering 
                prompts that unlock the full capability of production AI systems. My work directly 
                impacts how millions of users interact with AI.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed font-light">
                Currently working with Scale AI as an AI Trainer & Prompt Engineer (RLHF Specialist), 
                I evaluate model outputs across text, image, and audio modalities with a focus on 
                helpfulness, honesty, harmlessness, instruction following, reasoning quality, and factual accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Approach</h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                I believe that AI quality is built one interaction at a time. Every training example, 
                every evaluation judgment, and every prompt I craft is guided by three principles:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Accuracy over speed — correct outputs compound into trustworthy systems.',
                  'Context over rules — understanding intent produces better alignment than rigid guidelines.',
                  'Safety as a feature — responsible AI is not a constraint, it\'s a competitive advantage.',
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400 font-light">
                    <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                    {principle}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Education</h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-3">{education.degree}</p>
              <p className="text-sm text-neutral-500 font-light">Relevant coursework:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {education.relevantCoursework.map((course, i) => (
                  <span key={i} className="px-3 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                    {course}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 border border-white/5 bg-neutral-950">
              <h3 className="text-sm font-medium text-white mb-4">Quick Facts</h3>
              <dl className="space-y-4">
                {[
                  { term: 'Specialization', value: 'AI Training & LLM Evaluation' },
                  { term: 'Current Role', value: 'Scale AI — RLHF Specialist' },
                  { term: 'Focus Areas', value: 'RLHF, SFT, Safety, Prompt Engineering' },
                  { term: 'Experience', value: '3+ years remote' },
                  { term: 'Quality Score', value: '95%+ consistent' },
                  { term: 'Availability', value: 'Open to remote engagements' },
                ].map((item, i) => (
                  <div key={i}>
                    <dt className="text-xs text-neutral-500 uppercase tracking-wider">{item.term}</dt>
                    <dd className="mt-1 text-sm text-neutral-400 font-light">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-6 border border-white/5 bg-neutral-950">
              <h3 className="text-sm font-medium text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  LinkedIn <ExternalLink size={12} />
                </a>
                <a href={profile.social.x} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  X (Twitter) <ExternalLink size={12} />
                </a>
                <a href={profile.social.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  Telegram <ExternalLink size={12} />
                </a>
                <Link to="/contact" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  Contact Form <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
