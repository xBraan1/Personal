import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Shield, Zap, MessageSquare, Code } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Training & RLHF',
    description: 'High-quality preference data creation, response ranking, and RLHF annotation for aligning language models with human values and intent.',
    features: [
      'Pairwise preference annotation',
      'Response quality ranking',
      'Detailed critique and revision',
      'Multi-turn conversation training',
      'Constitutional AI alignment',
    ],
  },
  {
    icon: Target,
    title: 'LLM Evaluation',
    description: 'Comprehensive model assessment across accuracy, reasoning, safety, and instruction-following dimensions with actionable improvement recommendations.',
    features: [
      'Custom benchmark design',
      'Multi-dimensional scoring',
      'Comparative model analysis',
      'Regression testing',
      'Performance reporting',
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Red Teaming',
    description: 'Systematic identification of model vulnerabilities through adversarial testing, jailbreak attempts, and edge case exploration.',
    features: [
      'Adversarial prompt testing',
      'Jailbreak vulnerability assessment',
      'Bias and fairness evaluation',
      'Content safety auditing',
      'Harmful output prevention',
    ],
  },
  {
    icon: Zap,
    title: 'Prompt Engineering',
    description: 'Production-grade prompt design, system instruction crafting, and optimization frameworks for reliable AI-powered products.',
    features: [
      'System prompt design',
      'Chain-of-thought frameworks',
      'Few-shot example curation',
      'Output format specification',
      'Prompt template libraries',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Design and evaluation of multi-turn dialogue systems with consistent persona, contextual awareness, and natural interaction patterns.',
    features: [
      'Dialogue flow design',
      'Persona consistency',
      'Context management',
      'Turn-level evaluation',
      'User satisfaction optimization',
    ],
  },
  {
    icon: Code,
    title: 'Code AI Training',
    description: 'Specialized training data and evaluation for code generation models, covering correctness, security, documentation, and best practices.',
    features: [
      'Code generation evaluation',
      'Bug detection training',
      'Documentation quality',
      'Security vulnerability assessment',
      'Multi-language coverage',
    ],
  },
];

export default function Services() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Services</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Specialized AI services, delivered with precision.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            Each service is tailored to your specific needs, with clear deliverables, 
            measurable outcomes, and a commitment to the highest quality standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 md:p-12 border border-[#222] bg-[#080808] hover:border-[#333] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <service.icon size={28} className="text-[#666] group-hover:text-white transition-colors" />
                  <h3 className="mt-6 text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">What's included</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                        <span className="w-1 h-1 bg-[#444] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-[#222] bg-[#050505]">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">
            Need a custom solution?
          </h2>
          <p className="mt-4 text-[#a0a0a0] max-w-xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and design a service package that fits your needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
