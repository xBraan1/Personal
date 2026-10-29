import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            The person behind the precision.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            I'm xBraan1 — an AI Trainer and LLM Evaluation Specialist dedicated to making 
            artificial intelligence more accurate, safe, and aligned with human values.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">Background</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                With a foundation in linguistics, computational analysis, and cognitive science, 
                I bring a multidisciplinary perspective to AI training. My work sits at the intersection 
                of human language understanding and machine learning — where nuanced judgment meets 
                systematic evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">What I Do</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                I specialize in training large language models through high-quality preference data, 
                conducting rigorous evaluations across multiple quality dimensions, and engineering 
                prompts that unlock the full capability of production AI systems. My work directly 
                impacts how millions of users interact with AI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Approach</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                I believe that AI quality is built one interaction at a time. Every training example, 
                every evaluation judgment, and every prompt I craft is guided by three principles:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Accuracy over speed — correct outputs compound into trustworthy systems.',
                  'Context over rules — understanding intent produces better alignment than rigid guidelines.',
                  'Safety as a feature — responsible AI is not a constraint, it\'s a competitive advantage.',
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#a0a0a0]">
                    <span className="mt-2 w-1.5 h-1.5 bg-[#444] rounded-full flex-shrink-0" />
                    {principle}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Values</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                I'm committed to intellectual honesty, continuous learning, and the responsible 
                development of AI. I believe the people who train and evaluate AI systems carry 
                a significant responsibility — and I take that seriously in every project I undertake.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 border border-[#222] bg-[#080808]">
              <h3 className="text-sm font-medium text-white mb-4">Quick Facts</h3>
              <dl className="space-y-4">
                {[
                  { term: 'Specialization', value: 'AI Training & LLM Evaluation' },
                  { term: 'Focus Areas', value: 'RLHF, Safety, Prompt Engineering' },
                  { term: 'Model Experience', value: 'GPT, Claude, Gemini, Llama, Mistral' },
                  { term: 'Languages', value: 'English, Arabic' },
                  { term: 'Availability', value: 'Open to new projects' },
                ].map((item, i) => (
                  <div key={i}>
                    <dt className="text-xs text-[#666] uppercase tracking-wider">{item.term}</dt>
                    <dd className="mt-1 text-sm text-[#a0a0a0]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-6 border border-[#222] bg-[#080808]">
              <h3 className="text-sm font-medium text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="mailto:contact@xbraan1.com" className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-white transition-colors">
                  Email
                </a>
                <Link to="/contact" className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-white transition-colors">
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
